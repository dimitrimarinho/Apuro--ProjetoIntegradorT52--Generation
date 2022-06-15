package com.apuro.ecommerce.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apuro.ecommerce.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	
	public List<Usuario> findAllByUsuarioContainingIgnoreCase(String usuario);
	public Optional<Usuario> findByUsuario(String usuario);
	
}
