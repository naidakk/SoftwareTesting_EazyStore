package com.eazybytes.eazystore.repository;

import com.eazybytes.eazystore.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {
  }