package com.apuro.ecommerce.service;



import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.lenient;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.invocation.InvocationOnMock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.stubbing.Answer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.apuro.ecommerce.model.Usuario;
import com.apuro.ecommerce.model.UsuarioLogin;
import com.apuro.ecommerce.repository.UsuarioRepository;


@ExtendWith(MockitoExtension.class)
public class UsuarioServiceTest {

	@Mock 
	UsuarioRepository usuarioRepository = mock(UsuarioRepository.class);;
	
	UsuarioService usuarioService;
	
		@BeforeEach
		public void setUp() {
		}
	
		@Test 
		public void deveCadastrarUsuario() {
			 
			// Arrange
			usuarioService = new UsuarioService(usuarioRepository);
			String senhaEsperada = "1234";
			Usuario usuario = new Usuario();
			usuario.setId(0);
			usuario.setNome(null);
			usuario.setDataDeNascimento(null);
			usuario.setEndereco(null);
			usuario.setCpf(null);
			usuario.setSenha(senhaEsperada);
			
			when(usuarioRepository.save(any(Usuario.class))).thenReturn(usuario);
			
			// Act
			Optional<Usuario> usuarioRetornado = usuarioService.cadastrarUsuario(usuario);
			
			// Assert
			
			assertEquals(usuario.getNome(), usuarioRetornado.get().getNome());
			assertEquals(usuario.getDataDeNascimento(), usuarioRetornado.get().getDataDeNascimento());
			assertEquals(usuario.getEndereco(), usuarioRetornado.get().getEndereco());
			assertEquals(usuario.getCpf(), usuarioRetornado.get().getCpf());
			assertNotEquals(senhaEsperada, usuarioRetornado.get().getSenha());
		}
		
		@Test
		public void deveLogarUsuario() {
			
	
			// Arrange -> Organizar
			usuarioService = new UsuarioService(usuarioRepository);
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
			
			UsuarioLogin usuarioLogin = new UsuarioLogin();
			usuarioLogin.setId(0);
			usuarioLogin.setNome(null);
			usuarioLogin.setUsuario("Thay");
			usuarioLogin.setSenha("1234");
			usuarioLogin.setFoto("jpg");
			
			Usuario usuario = new Usuario();
			usuario.setId(0);
			usuario.setNome("Thayna");
			usuario.setDataDeNascimento(null);
			usuario.setEndereco(null);
			usuario.setSenha(encoder.encode("1234"));
			
			when(usuarioRepository.findByUsuario(any(String.class))).thenReturn(Optional.of(usuario));
			// Act -> Agir
			Optional<UsuarioLogin> usuarioLogado = usuarioService.logarUsuario(Optional.of(usuarioLogin));
			
			// Assert -> Validar se uma premissa é verdadeira
			assertEquals(usuario.getNome(), usuarioLogado.get().getNome());
			assertNotNull(usuarioLogado.get().getToken());
			
		}
}


// Triple AAA
// Arrange -> Organizar
// Act -> Agir
// Assert -> Validar se uma premissa é verdadeira

