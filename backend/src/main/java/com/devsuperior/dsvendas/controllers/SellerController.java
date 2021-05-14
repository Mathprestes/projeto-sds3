package com.devsuperior.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsvendas.dto.SellerDTO;
import com.devsuperior.dsvendas.etities.Seller;
import com.devsuperior.dsvendas.repositories.SellerRepository;
import com.devsuperior.dsvendas.service.SellerService;

@RestController
@RequestMapping (value = "/sellers")
public class SellerController {
	
	@Autowired
	private SellerService service;
	
	@Autowired
	private SellerRepository sellerRepository;
	
	@PostMapping (value = "/cadastro")
	public Seller cadSeller (@RequestBody Seller seller) {
		return sellerRepository.save(seller);
	}
	
	@GetMapping
	public ResponseEntity<List<SellerDTO>> findAll() {
		List<SellerDTO> list = service.findAll();
		return ResponseEntity.ok(list);
	}
}
