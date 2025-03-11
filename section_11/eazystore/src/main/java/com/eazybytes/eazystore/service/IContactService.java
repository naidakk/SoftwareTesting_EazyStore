package com.eazybytes.eazystore.service;

import com.eazybytes.eazystore.dto.ContactRequestDTO;

public interface IContactService {
    boolean saveContact(ContactRequestDTO contactRequest);
}
