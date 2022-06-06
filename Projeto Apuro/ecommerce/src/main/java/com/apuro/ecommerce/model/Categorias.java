package com.apuro.ecommerce.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_categorias")
public class Categorias {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull
	@Size(min = 3, max = 255)
	private String tipo;
	
	@NotNull
	@Size(min = 3, max = 255)
	private String artista;
	
	@Size(min = 3, max = 255)
	private String tutorial;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getArtista() {
		return artista;
	}

	public void setArtista(String artista) {
		this.artista = artista;
	}

	public String getTutorial() {
		return tutorial;
	}

	public void setTutorial(String tutorial) {
		this.tutorial = tutorial;
	}

}