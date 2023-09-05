package com.diaytiproject.todoapp.repository;

import com.diaytiproject.todoapp.entity.UserApp;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UserAppRepository extends CrudRepository<UserApp, UUID> {

    UserApp findByUsername(String username);

}