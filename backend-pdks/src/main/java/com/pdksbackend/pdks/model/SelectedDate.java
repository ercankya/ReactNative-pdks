package com.pdksbackend.pdks.model;


public class SelectedDate {

    private String deviceID;
    private String startDate;
    private String endDate;

    public SelectedDate(String deviceID, String startDate, String endDate) {
        this.deviceID = deviceID;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public SelectedDate() {
    }

    public String getDeviceID() {
        return deviceID;
    }

    public void setDeviceID(String deviceID) {
        this.deviceID = deviceID;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }
}
