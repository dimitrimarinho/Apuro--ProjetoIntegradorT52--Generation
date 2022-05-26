# Modelagem do Banco de Dados
#### Roteiro de Referência do nosso processo de modelagem: https://github.com/rafaelq80/MySQL/tree/main/aula_04

## O que é um Diagrama Entidade Relacionamento ?

Um Diagrama de Entidade Relacionamento (DER) é uma representação gráfica associada a um Modelo Entidade Relacionamento (MER, ou à uma parte dele), expressando graficamente a estrutura lógica de um banco de dados.
O MER foi desenvolvido pelo cientista da computação Peter Chen e publicado em um artigo em 1976.

Os objetos componentes de um diagrama entidade-relacionamento são graficamente representados por figuras geométricas simples, conectadas por linhas. São elas:

    Retângulos: Representam entidades
    Elipses: Representam atributos
    Losangos: Representam relacionamentos
    Linhas: Conectam os atributos às entidades e as entidades aos relacionamentos

Portanto, um DER é um fluxograma que ilustra como as “Entidades” (Usuários, Produtos, Postagens), se relacionam entre si dentro de um Sistema de Banco de Dados Relacional. Os Diagramas DER são usados principalmente para modelar e criar bancos de dados relacionais, em termos de regras lógicas e regras de negócio dentro de um modelo lógico de dados.

Referências: 
<br>(1) http://www.bosontreinamentos.com.br/modelagem-de-dados/o-modelo-entidade-relacionamento-introducao/
<br>(2) https://github.com/rafaelq80/MySQL/tree/main/aula_04

## Componentes do DER (Entidades e Relacionamentos)

Neste tópico vamos descrever sobre os componentes do nosso Diagrama Entidade Relacionamento do nosso e-commerce sustentável. 
Serão três entidades: Produtos, Categoria de Produtos e Usuários. Elas serão representadas pelas tabelas **tb_produtos**, **tb_categorias** e **tb_usuarios**.

Atributos da tabela **tb_usuario**:

- **id**
- **usuario**
- **nome**
- **senha**
- **foto**
- **data_nascimento**
- **cpf**
- **endereço**

Na tabela **tb_usuario** utilizaremos como chave primária o **id**, que será atualizado por incremento automático. Teremos o atributo **usuário** que será o login que o usuário utilizará para acessar o sistema, juntamente com o atributo **senha**. O usuário ao cadastrar deverá informar o seu **nome**, seu **cpf**, seu **endereço**, sua **data de nascimento** e opcionalmente é possível inserir uma **foto**.

Atributos da tabela **tb_produtos**:

- **id**
- **nome**
- **descricao**
- **quantidade**
- **preco**
- **foto**
- **tb_categorias_id**
- **tb_usuario_id**
- **sustentabilidade**
- **região**

Na tabela **tb_produtos** temos o atributo **id** que será incrementado automaticamente. Temos também o atributo **nome** para inserir o nome do produto que será vendido. No atributo **descrição** a mercadoria será descrita pelo fornecedor. Deverá ser informado o **preço** do produto, a **região** na qual está armazenado o estoque do produto, a **quantidade** do produto em estoque e também será avaliado pela equipe da Apuro o quão sustentável o produto é através do índice **sustentabilidade** que varia de 1 a 10. Além disso, todos os produtos devem apresentar **foto** de apresentação. A tabela **tb_produtos** contém duas chaves estrangeiras, **tb_categorias_id** para conseguir classificar os produtos dentro de categoria para filtragem e a chave estrangeira **tb_usuario_id** para que os pedidos dos usuários estejam associados aos produtos que serão adquiridos.

Atributos da tabela tb_categorias:

- **tipo** 
- **artistas** 
- **tutorial**

O atributo **tipo** serve para agrupar os produtos em tipos de categorias parecidas (por exemplo: carteira, bolsa, vaso de planta, ...). O atributo **artistas** serve para agrupar os produtos e classificá-los pelos artistas/artesãos fornecedores, enquanto o atributo **tutorial** tem o intuito de classificar os produtos que possuem tutoriais mostrando como se faz o produto, caso não tenha tutorial o atributo será nulo.


