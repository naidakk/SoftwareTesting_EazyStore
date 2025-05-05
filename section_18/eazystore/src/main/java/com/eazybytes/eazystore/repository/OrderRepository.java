package com.eazybytes.eazystore.repository;

import com.eazybytes.eazystore.entity.Contact;
import com.eazybytes.eazystore.entity.Customer;
import com.eazybytes.eazystore.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {

  /**
   * Fetch orders for a customer, sorted by creation date in descending order.
   */
  List<Order> findByCustomerOrderByCreatedAtDesc(Customer customer);

  List<Order> findByOrderStatus(String orderStatus);
}