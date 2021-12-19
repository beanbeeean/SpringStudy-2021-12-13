package com.spring.study.web.dto;

import lombok.Data;

import org.mybatis.spring.mapper.MapperScannerConfigurer;

@Data
public class SignupReqDto {
	private String username;
	private String password;
	private String name;
	private String email;
}
