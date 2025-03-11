package com.eazybytes.eazystore.service.impl;

import com.eazybytes.eazystore.dto.ContactRequestDTO;
import com.eazybytes.eazystore.entity.Contact;
import com.eazybytes.eazystore.repository.ContactRepository;
import com.eazybytes.eazystore.service.IContactService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
@RequiredArgsConstructor
@Slf4j
public class ContactServiceImpl implements IContactService {

    private final ContactRepository contactRepository;

    @Override
    public boolean saveContact(ContactRequestDTO contactRequest) {
        try {
            Contact contact = new Contact();
            BeanUtils.copyProperties(contactRequest, contact);
            contact.setCreatedAt(Instant.now());
            contact.setCreatedBy(contactRequest.getName());
            contactRepository.save(contact);
            return true; // Return true only if save is successful
        } catch (Exception ex) {
            // Log the error for debugging
            log.error("Error saving contact: {}", ex.getMessage(), ex);
            return false;
        }
    }
}
