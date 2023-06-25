package com.example.NotificationManagement.Controller;

import com.example.NotificationManagement.Model.Notification;
import com.example.NotificationManagement.Service.NotificationServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/notification")


public class NotificationController {

    @Autowired
    private NotificationServices notificationServices;

    @PostMapping(value="/save")
    public String SaveNotification(@RequestBody Notification notifications)
    {

        notificationServices.saveorUpdate(notifications);
        return notifications.getId();
    }
    @GetMapping(value="/getAll")
    public Iterable<Notification>getNotifications()
    {


        return notificationServices.listAll();
    }
    @PutMapping(value="/edit/{id}")
    public Notification update(@RequestBody Notification notification,@PathVariable(name="id")String id)
    {
        notification.setId(id);
        notificationServices.saveorUpdate(notification);
        return notification;
    }
    @DeleteMapping("/delete/{id}")
    public void deleteNotification(@PathVariable("id") String id)
    {
        notificationServices.deleteNotification(id);
    }
    @RequestMapping("/search/{id}")
    public Notification getNotifications(@PathVariable(name="id")String notificationid)
    {
        return notificationServices.getNotificationByID(notificationid);
    }
}
