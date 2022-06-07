package com.apuro.ecommerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_produtos")
public class Produtos {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull
	@Size(min = 3, max = 255)
	private String nome;
	
	@Size(min = 3, max = 255)
	private String descricao;
	
	@NotNull
	private long quantidade;
	
	@NotNull
	@Column(scale = 2) // Scale: Number of digits to the right of the decimal point
	private double preco;
	
	@NotNull
	@Size(max = 255)
	private String foto;
	
	@NotNull
	private int sustentabilidade;
	
	@NotNull
	@Size(min = 2, max = 255)
	private String regiao;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public long getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(long quantidade) {
		this.quantidade = quantidade;
	}

	public double getPreco() {
		return preco;
	}

	public void setPreco(double preco) {
		this.preco = preco;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public int getSustentabilidade() {
		return sustentabilidade;
	}

	public void setSustentabilidade(int sustentabilidade) {
		this.sustentabilidade = sustentabilidade;
	}

	public String getRegiao() {
		return regiao;
	}

	public void setRegiao(String regiao) {
		this.regiao = regiao;
	}
	
}
