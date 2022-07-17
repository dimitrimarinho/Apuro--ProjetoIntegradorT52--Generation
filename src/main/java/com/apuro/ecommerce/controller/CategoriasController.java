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

import com.apuro.ecommerce.model.Categorias;
import com.apuro.ecommerce.repository.CategoriasRepository;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/categorias")
public class CategoriasController {
	@Autowired
	private CategoriasRepository repository;
	
	@GetMapping
	public ResponseEntity<List<Categorias>> getAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Categorias> getById(@PathVariable Long id){
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/tipo/{tipo}")
	public ResponseEntity<List<Categorias>> getByTipo(@PathVariable String tipo){
		return ResponseEntity.ok(repository.findAllByTipoContainingIgnoreCase(tipo));
	}

	@PostMapping
	public ResponseEntity <Categorias> post (@Valid @RequestBody Categorias categorias){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(categorias));
	}

	 @PutMapping 
	 public ResponseEntity <Categorias> put (@Valid @RequestBody Categorias categorias){
		 return ResponseEntity.ok(repository.save(categorias));
	 }

	 @DeleteMapping("/{id}")
	 public void delete (@PathVariable long id) {
		 repository.deleteById(id);
	 }
	 
}
