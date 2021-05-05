package com.devsuperior.dsvendas.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsvendas.dto.SaleSumDTO;
import com.devsuperior.dsvendas.dto.SaleSucessDTO;

import com.devsuperior.dsvendas.etities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
	//fazendo uma busca agrupada para trazer o nomes dos vendedores e o total das vendas
	@Query("SELECT new com.devsuperior.dsvendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount)) "
			+ " FROM Sale AS obj GROUP BY obj.seller")
	List<SaleSumDTO> amountGroupedBySeller();
	
	//fazendo uma busca agrupada para trazer o nomes dos vendedores e a taxa de sucesso
	@Query("SELECT new com.devsuperior.dsvendas.dto.SaleSucessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals)) "
			+ " FROM Sale AS obj GROUP BY obj.seller")
	List<SaleSucessDTO> sucessGroupedBySeller();
}