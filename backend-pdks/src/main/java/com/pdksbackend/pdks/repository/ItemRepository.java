package com.pdksbackend.pdks.repository;


import com.pdksbackend.pdks.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
@EnableJpaRepositories
public interface ItemRepository extends JpaRepository<Item, String> {
    @Procedure(name = "QRKodKaydet2")
    Object saveWithProcedure(

            @Param("QRKod") String qrcode_str,
            @Param("DeviceID") String deviceid,
            @Param("Status") Boolean acces_state);

    @Query(value = "{call :procedure}", nativeQuery = true)
    void callProcedure(@Param("procedure") String procedure);
}
