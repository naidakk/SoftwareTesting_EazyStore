package com.eazybytes.eazystore.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "contacts")
@NamedQuery(name = "Contact.findByStatus",
        query = "SELECT c FROM Contact c WHERE c.status = :status")
@NamedNativeQuery(name = "Contact.findByStatusWithNativeQuery",
        query = "SELECT * FROM contacts WHERE status = :status",
        resultClass = Contact.class)
public class Contact extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "contact_id", nullable = false)
    private Long contactId;

    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @Column(name = "email", nullable = false, length = 100)
    private String email;

    @Column(name = "mobile_number", nullable = false, length = 15)
    private String mobileNumber;

    @Column(name = "message", nullable = false, length = 500)
    private String message;

    @Column(name = "status", nullable = false, length = 50)
    private String status;

}