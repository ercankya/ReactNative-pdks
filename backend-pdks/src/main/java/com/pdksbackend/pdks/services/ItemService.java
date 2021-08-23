package com.pdksbackend.pdks.services;


import com.pdksbackend.pdks.model.Item;
import com.pdksbackend.pdks.repository.ItemRepository;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class ItemService {
    @Autowired
    ItemRepository itemRepository;
    @PersistenceContext
    private EntityManager em, em2;

    public String saveWithProcedure(String qrcodeStr, String deviceID, Boolean accesState) {
        Long t0 = System.currentTimeMillis();
        String jsonMessage, sqlProcedureMessage, procedure, accessInfo;
        int olayID;
        //ProDEAL veritabanına gönderilen değerler
        StoredProcedureQuery storedProcedureQuery = em.createStoredProcedureQuery("QRKodKaydet2");
        storedProcedureQuery.registerStoredProcedureParameter("QRKod", String.class, ParameterMode.IN);
        storedProcedureQuery.registerStoredProcedureParameter("DeviceID", String.class, ParameterMode.IN);
        storedProcedureQuery.registerStoredProcedureParameter("Status", Boolean.class, ParameterMode.IN);
        storedProcedureQuery.setParameter("QRKod", qrcodeStr);
        storedProcedureQuery.setParameter("DeviceID", deviceID);
        storedProcedureQuery.setParameter("Status", accesState);
        //ProDEAL veritabanından prosedürün çıktısı
        storedProcedureQuery.registerStoredProcedureParameter("Mesaj_JSON", String.class, ParameterMode.OUT);
        storedProcedureQuery.registerStoredProcedureParameter("Cevap_SQL", String.class, ParameterMode.OUT);
        storedProcedureQuery.execute();

        jsonMessage = (String) storedProcedureQuery.getOutputParameterValue("Mesaj_JSON");
        sqlProcedureMessage = (String) storedProcedureQuery.getOutputParameterValue("Cevap_SQL");

        if (sqlProcedureMessage.length() > 0) {
            procedure = sqlProcedureMessage.substring(5, 16);
            olayID = Integer.parseInt((sqlProcedureMessage.substring(17)));

            setTelegram(olayID, procedure);
            accessInfo = StringUtils.substringBetween(StringUtils.substringBetween(jsonMessage, "Mesaj3\":", ",").trim(), "Text\":", "}").trim();
            System.out.println(accessInfo);
            System.out.println("T " + (System.currentTimeMillis() - t0));
            return accessInfo;
        }
        accessInfo = StringUtils.substringBetween(StringUtils.substringBetween(jsonMessage, "Mesaj3\":", ",").trim(), "Text\":", "}").trim();
        System.out.println(accessInfo);
        System.out.println("T " + (System.currentTimeMillis() - t0));
        return accessInfo;
    }

    public String setTelegram(int olayID, String procedure) {
        //telegram mesaj gönderir
        StoredProcedureQuery storedProcedureQuery2 = em2.createStoredProcedureQuery(procedure);
        storedProcedureQuery2.registerStoredProcedureParameter("OLAY_ID", Integer.class, ParameterMode.IN);
        storedProcedureQuery2.setParameter("OLAY_ID", olayID);
        storedProcedureQuery2.execute();
        return null;
    }

    public String sendSelectedDate(String deviceId, String startDate, String endDate) {

        Timestamp basTarih = null, bitTarih = null;

        try {
            DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");

            Date startDatee = formatter.parse(startDate);
            Date endDatee = formatter.parse(endDate);

            basTarih = new Timestamp(startDatee.getTime());
            bitTarih = new Timestamp(endDatee.getTime());

        } catch (ParseException e) {
            System.out.println("Exception :" + e);
        }

        //Procedure'e gönderilen parametreler
        StoredProcedureQuery storedProcedureQuery = em.createStoredProcedureQuery("Hareketlerim");
        storedProcedureQuery.registerStoredProcedureParameter("DeviceID", String.class, ParameterMode.IN);
        storedProcedureQuery.registerStoredProcedureParameter("BasTrh", Timestamp.class, ParameterMode.IN);
        storedProcedureQuery.registerStoredProcedureParameter("BitTrh", Timestamp.class, ParameterMode.IN);
        storedProcedureQuery.setParameter("DeviceID", deviceId);
        storedProcedureQuery.setParameter("BasTrh", basTarih);
        storedProcedureQuery.setParameter("BitTrh", bitTarih);
        //Procedure'den gelen mesaj
        storedProcedureQuery.registerStoredProcedureParameter("MsgSTR", String.class, ParameterMode.OUT);
        storedProcedureQuery.execute();

        System.out.println("DeviceID: " + deviceId + " StartDate: " + startDate + " EndDate: " + endDate);
        System.out.println("************* \n" + (String) storedProcedureQuery.getOutputParameterValue("MsgSTR"));

        String msg = (String) storedProcedureQuery.getOutputParameterValue("MsgSTR");
//
//        StringBuilder builder = new StringBuilder(msg);
//        builder.deleteCharAt(msg.length() - 2);
//        System.out.println("************* \n" +builder);

        return msg;


    }

    public Item save(Item Item) {
        return itemRepository.save(Item);
    }

    public List<Item> findAll() {
        return itemRepository.findAll();
    }
}
