package com.devsuperior.dsvendas.etities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table (name = "tb_sellers")  //mapeamento objeto relacional  (banco H2) e (Postgres)
public class Seller {
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)  //id autoincrementado (geração automatica do id)
	private Long id;
	
	private String name;
	
	@OneToMany (mappedBy = "seller")   //nome do atributo que esta mapeado la no arquivo "Sale.java"
	private List<Sale> sales = new ArrayList<>();
	
	public Seller() {
		
	}

	public Seller(Long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public Long getId() {   //padrao para outras classes nao acessarem os metodos privados
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Sale> getSales() {
		return sales;
	}
}
