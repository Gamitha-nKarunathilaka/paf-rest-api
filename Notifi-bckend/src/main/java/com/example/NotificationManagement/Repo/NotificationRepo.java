package com.example.NotificationManagement.Repo;

import com.example.NotificationManagement.Model.Notification;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface NotificationRepo extends MongoRepository<Notification,String> {
}
