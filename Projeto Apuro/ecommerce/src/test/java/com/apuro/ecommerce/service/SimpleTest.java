package com.apuro.ecommerce.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

public class SimpleTest {

	@Test
    void deveSomarCorretamente() {
		// Arrange
		Calculadora calculadora = new Calculadora();
		
		// Act
		int esperado = calculadora.Soma(2, 2);
		
		// Assert
        assertEquals(4, esperado);
    }
}

class Calculadora {
	int Soma(int valor1, int valor2) {
		return valor1 + valor2;
	}
}