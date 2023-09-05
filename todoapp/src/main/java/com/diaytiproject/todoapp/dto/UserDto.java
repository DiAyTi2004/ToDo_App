package com.diaytiproject.todoapp.dto;

import com.diaytiproject.todoapp.entity.User;

import java.util.UUID;

public class UserDto {
    private UUID id;
    private String username;
    private String password;

    public UserDto() {

    }

    public UserDto(User entity) {
        this.id = entity.getId();
        this.username = entity.getUsername();
        this.password = entity.getPassword();
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
