package com.pdksbackend.pdks.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;


@Entity
@Table(name = "item")
@NamedStoredProcedureQuery(
        name = "QRKodKaydet2",
        procedureName = "QRKodKaydet2",
        parameters = {
                @StoredProcedureParameter(mode = ParameterMode.IN, type = String.class, name = "QRKod"),
                @StoredProcedureParameter(mode = ParameterMode.IN, type = String.class, name = "DeviceID"),
                @StoredProcedureParameter(mode = ParameterMode.IN, type = Boolean.class, name = "Status")
        }
)
public class Item {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private String _id;
    @Column(name = "deviceid")
    private String deviceID;
    @Column(name = "qrcode_str")
    private String qrcodeStr;
    @Column(name = "acces_state")
    private Boolean accesState;

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getQrcodeStr() {
        return qrcodeStr;
    }

    public void setQrcodeStr(String qrcodeStr) {
        this.qrcodeStr = qrcodeStr;
    }

    public String getDeviceID() {
        return deviceID;
    }

    public void setDeviceID(String deviceID) {
        this.deviceID = deviceID;
    }

    public Boolean getAccesState() {
        return accesState;
    }

    public void setAccesState(Boolean accesState) {
        this.accesState = accesState;
    }
}
