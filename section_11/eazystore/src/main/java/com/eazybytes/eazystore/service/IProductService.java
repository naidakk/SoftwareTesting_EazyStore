package com.eazybytes.eazystore.service;

import com.eazybytes.eazystore.dto.ProductDto;

import java.util.List;

public interface IProductService {

    /**
     * Fetch all products from the database.
     *
     * @return A list of Product DTOs.
     */
    List<ProductDto> getProducts();

    /**
     * Fetch product by ID from the database.
     *
     * @return A Product DTO.
     */
    ProductDto getProductById(Long id);
}
