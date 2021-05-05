package com.devsuperior.dsvendas.service;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.devsuperior.dsvendas.dto.SellerDTO;
import com.devsuperior.dsvendas.etities.Seller;
import com.devsuperior.dsvendas.repositories.SellerRepository;

@Service
public class SellerService {
	
	//declarando uma dependencia com "SellerRepository"
	@Autowired
	private SellerRepository repository;
	
	public List<SellerDTO> findAll() {
		List<Seller> result = repository.findAll();  
		return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());    //expressao lambda
	}
}