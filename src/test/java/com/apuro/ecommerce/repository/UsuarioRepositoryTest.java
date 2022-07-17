/*package com.apuro.ecommerce.repository;

public class UsuarioRepositoryTest {

	package org.generation.blogPessoal.repository;

	import static org.junit.jupiter.api.Assertions.assertEquals;
	import static org.junit.jupiter.api.Assertions.assertTrue;

	import java.util.List;
	import java.util.Optional;

	import org.generation.blogPessoal.model.Usuario;
	import org.junit.jupiter.api.BeforeAll;
	import org.junit.jupiter.api.DisplayName;
	import org.junit.jupiter.api.Test;
	import org.junit.jupiter.api.TestInstance;
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.boot.test.context.SpringBootTest;
	import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;

	@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
	@TestInstance(TestInstance.Lifecycle.PER_CLASS) //Indica que o ciclo de vida de Teste será por classe (um único ciclo de vida enquanto o teste está em execução)
	public class UsuarioRepositoryTest {
		
		@Autowired
		private UsuarioRepository usuarioRepository;
		
		@BeforeAll
		void start() {
			usuarioRepository.deleteAll();
			usuarioRepository.save(new Usuario(0L, "João da Silva", "http://i.imgur.com/h4t8loa.jpg", "joao@gmail.com", "12345678"));
			usuarioRepository.save(new Usuario(0L, "Manuela da Silva", "http://i.imgur.com/h4t8loa.jpg", "manuela@gmail.com", "12345678"));
			usuarioRepository.save(new Usuario(0L, "Adriana da Silva", "http://i.imgur.com/h4t8loa.jpg", "adriana@gmail.com", "12345678"));
			usuarioRepository.save(new Usuario(0L, "Paulo Antunes", "http://i.imgur.com/h4t8loa.jpg", "paulo@gmail.com", "12345678"));
		}
		
		@Test
		@DisplayName("Retorna 1 usuário")
		public void deveRetornarUmUsuario() {
			Optional<Usuario> usuario = usuarioRepository.findByUsuario("joao@gmail.com");
			assertTrue(usuario.get().getUsuario().equals("joao@gmail.com"));
		}
		
		@Test
		@DisplayName("Retorna 3 usuários")
		public void deveRetornarTresUsuarios() {
			List<Usuario> listaDeUsuarios = usuarioRepository.findAllByNomeContainingIgnoreCase("Silva");
			assertEquals(3, listaDeUsuarios.size());
			assertTrue(listaDeUsuarios.get(0).getNome().equals("João da Silva"));
			assertTrue(listaDeUsuarios.get(1).getNome().equals("Manuela da Silva"));
			assertTrue(listaDeUsuarios.get(2).getNome().equals("Adriana da Silva"));		
		}
	}
}
*/