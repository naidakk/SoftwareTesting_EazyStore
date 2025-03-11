package com.eazybytes.eazystore.dto;

import lombok.Data;

@Data
public class ContactRequestDTO {
    private String name;
    private String email;
    private String mobileNumber;
    private String message;
}
