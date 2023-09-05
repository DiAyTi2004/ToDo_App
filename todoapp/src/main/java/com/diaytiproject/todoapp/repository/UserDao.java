package com.diaytiproject.todoapp.repository;

import com.diaytiproject.todoapp.entity.DAOUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UserDao extends CrudRepository<DAOUser, UUID> {

    DAOUser findByUsername(String username);

}