package com.apuro.ecommerce.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apuro.ecommerce.model.Produtos;
import com.apuro.ecommerce.repository.ProdutosRepository;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/produtos")
public class ProdutosController {
	
	@Autowired
	private ProdutosRepository repository;
	
	@GetMapping
	public ResponseEntity<List<Produtos>> getAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Produtos> getById(@PathVariable Long id){
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	@GetMapping("/nome/{nome}")
	public ResponseEntity<List<Produtos>> getByName(@PathVariable String nome){
		return ResponseEntity.ok(repository.findAllByNomeContainingIgnoreCase(nome));
	}
	
	@GetMapping("/preco/{preco}")

	public ResponseEntity<List<Produtos>> getByPrice(@PathVariable double preco){
		return ResponseEntity.ok(repository.findAllByPrecoContainingIgnoreCase(preco));
	}
	 @PostMapping
	    public ResponseEntity <Produtos> post (@Valid @RequestBody Produtos produtos){
	        return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(produtos));
	    }

	 @PutMapping 
	    public ResponseEntity <Produtos> put (@Valid @RequestBody Produtos produtos){
	        return ResponseEntity.ok(repository.save(produtos));
	    }

	 @DeleteMapping("/{id}")
	    public void delete (@PathVariable long id) {
	        repository.deleteById(id);
	    }

}
