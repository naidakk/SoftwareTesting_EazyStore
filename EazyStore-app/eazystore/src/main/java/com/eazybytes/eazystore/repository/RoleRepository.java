package com.eazybytes.eazystore.repository;

import com.eazybytes.eazystore.entity.Role;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {

    @Cacheable("roles")
    // ROLE_USER -> CACHE MISS -> DB call -> Cache Store (ROLE_USER -> Role record) -> Customer 1
    // ROLE_USER -> CACHE HIT -> Customer 2
    // ROLE_ADMIN -> CACHE MISS -> DB call -> Cache Store (ROLE_ADMIN -> Role record) -> Customer X
    Optional<Role> findByName(String name);
}