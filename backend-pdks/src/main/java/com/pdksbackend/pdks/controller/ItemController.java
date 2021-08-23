package com.pdksbackend.pdks.controller;

import com.pdksbackend.pdks.model.Item;
import com.pdksbackend.pdks.model.SelectedDate;
import com.pdksbackend.pdks.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping(value = "/item")
public class ItemController {
    @Autowired
    ItemService itemService;

    @PostMapping(value = "/add")
    public String addItem(@Validated @RequestBody Item item) {
        return itemService.saveWithProcedure(item.getQrcodeStr(), item.getDeviceID(), item.getAccesState());
    }

    @PostMapping(value = "/sendDate")
    public String sendDate(@Validated @RequestBody SelectedDate selectedDate) {

        return itemService.sendSelectedDate(selectedDate.getDeviceID(), selectedDate.getStartDate(), selectedDate.getEndDate());

    }

    //get all items
    @GetMapping(value = "/getAll")
    public List<Item> getItems() {
        return itemService.findAll();
    }
}
