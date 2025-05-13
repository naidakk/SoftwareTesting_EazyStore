package com.eazybytes.eazystore.dto;

public record LoginResponseDto(String message, UserDto user, String jwtToken) {
}
