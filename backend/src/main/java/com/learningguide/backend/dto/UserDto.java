package com.learningguide.backend.dto;

import lombok.*;

@Data
public class UserDto {
    private String name;
    private String email;
    private String password;
    private String role;
}
