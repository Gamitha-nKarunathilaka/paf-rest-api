package com.example.NotificationManagement.Service;

import com.example.NotificationManagement.Model.Notification;
import com.example.NotificationManagement.Repo.NotificationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Service
public class NotificationServices {

    @Autowired
    private NotificationRepo notificationRepo;

    public void saveorUpdate(Notification notifications){
        notificationRepo.save(notifications);
    }

    public Iterable<Notification> listAll() {
        return this.notificationRepo.findAll();
    }

    public void deleteNotification(String id) {
        notificationRepo.deleteById(id);
    }

    public Notification getNotificationByID(String notificationid) {
        return notificationRepo.findById(notificationid).get();
    }
}

