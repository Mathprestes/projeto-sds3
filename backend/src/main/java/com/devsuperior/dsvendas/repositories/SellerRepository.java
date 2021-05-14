package com.devsuperior.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.devsuperior.dsvendas.etities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long>{
	
	Seller findById(long id);

}
