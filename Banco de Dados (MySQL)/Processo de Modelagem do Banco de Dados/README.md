# Modelagem do Banco de Dados
#### Roteiro de Referência do nosso processo de modelagem: https://github.com/rafaelq80/MySQL/tree/main/aula_04

## O que é um Diagrama Entidade Relacionamento ?

<section align="justify"> Um Diagrama de Entidade Relacionamento (DER) é uma representação gráfica associada a um Modelo Entidade Relacionamento (MER, ou à uma parte dele), expressando graficamente a estrutura lógica de um banco de dados. </section>

<br>

<section align="justify"> O MER foi desenvolvido pelo cientista da computação Peter Chen e publicado em um artigo em 1976. </section>

<br>

<section align="justify"> Os objetos componentes de um diagrama entidade-relacionamento são graficamente representados por figuras geométricas simples, conectadas por linhas. São elas: </section>

    Retângulos: Representam entidades
    Elipses: Representam atributos
    Losangos: Representam relacionamentos
    Linhas: Conectam os atributos às entidades e as entidades aos relacionamentos

<section align="justify"> Portanto, um DER é um fluxograma que ilustra como as “Entidades” (Usuários, Produtos, Postagens), se relacionam entre si dentro de um Sistema de Banco de Dados Relacional. Os Diagramas DER são usados principalmente para modelar e criar bancos de dados relacionais, em termos de regras lógicas e regras de negócio dentro de um modelo lógico de dados. </section>

<br> 

Referências: 
<br>(1) http://www.bosontreinamentos.com.br/modelagem-de-dados/o-modelo-entidade-relacionamento-introducao/
<br>(2) https://github.com/rafaelq80/MySQL/tree/main/aula_04

## Componentes do DER (Entidades e Relacionamentos)

### Entidades e Atributos

Neste tópico vamos descrever sobre os componentes do nosso Diagrama Entidade Relacionamento do nosso e-commerce sustentável. 
Serão três entidades: Produtos, Categoria de Produtos e Usuários. Elas serão representadas pelas tabelas **tb_produtos**, **tb_categorias** e **tb_usuarios**.

Atributos da tabela **tb_usuario**:

<br>

<section align="center"><img src="https://raw.githubusercontent.com/dimitrimarinho/Apuro--ProjetoIntegradorT52--Generation/main/Banco%20de%20Dados%20(MySQL)/Processo%20de%20Modelagem%20do%20Banco%20de%20Dados/imgs/tb_usuario.png" title="tb_usuario" /></section>

<br>

<section align="justify">Na tabela <b>tb_usuario</b> utilizaremos como chave primária o <b>id</b>, que será atualizado por incremento automático. Teremos o atributo <b>usuário</b> que será o login que o usuário utilizará para acessar o sistema, juntamente com o atributo <b>senha</b>. O usuário ao cadastrar deverá informar o seu <b>nome</b>, seu <b>cpf</b>, seu <b>endereço</b>, sua <b>data de nascimento</b> e opcionalmente é possível inserir uma <b>foto</b>. </section>

<br>

Atributos da tabela **tb_produtos**:

<br>

<section align="center"><img src="https://raw.githubusercontent.com/dimitrimarinho/Apuro--ProjetoIntegradorT52--Generation/main/Banco%20de%20Dados%20(MySQL)/Processo%20de%20Modelagem%20do%20Banco%20de%20Dados/imgs/tb_produtos.png" title="tb_produtos" /></section>

<br>

<section align="justify"> Na tabela <b>tb_produtos</b> temos o atributo <b>id</b> que será incrementado automaticamente. Temos também o atributo <b>nome</b> para inserir o nome do produto que será vendido. No atributo <b>descrição</b> a mercadoria será descrita pelo fornecedor. Deverá ser informado o <b>preço</b> do produto, a <b>região</b> na qual está armazenado o estoque do produto, a <b>quantidade</b> do produto em estoque e também será avaliado pela equipe da Apuro o quão sustentável o produto é através do índice <b>sustentabilidade</b> que varia de 1 a 10. Além disso, todos os produtos devem apresentar <b>foto</b> de apresentação. A tabela <b>tb_produtos</b> contém duas chaves estrangeiras, <b>tb_categorias_id</b> para conseguir classificar os produtos dentro de categoria para filtragem e a chave estrangeira <b>tb_usuario_id</b> para que os pedidos dos usuários estejam associados aos produtos que serão adquiridos. </section>
 
<br>

Atributos da tabela tb_categorias:

<br>

<section align="center"><img src="https://github.com/dimitrimarinho/Apuro--ProjetoIntegradorT52--Generation/blob/main/Banco%20de%20Dados%20(MySQL)/Processo%20de%20Modelagem%20do%20Banco%20de%20Dados/imgs/tb_categorias.png" title="tb_categorias" /></section>

<br>

<section align="justify"> O atributo <b>tipo</b> serve para agrupar os produtos em tipos de categorias parecidas (por exemplo: carteira, bolsa, vaso de planta, ...). O atributo <b>artistas</b> serve para agrupar os produtos e classificá-los pelos artistas/artesãos fornecedores, enquanto o atributo <b>tutorial</b> tem o intuito de classificar os produtos que possuem tutoriais mostrando como se faz o produto, caso não tenha tutorial o atributo será nulo. </section>
 
<br>

### Relacionamentos

<br>

<section align="center"><img src="https://github.com/dimitrimarinho/Apuro--ProjetoIntegradorT52--Generation/blob/main/Banco%20de%20Dados%20(MySQL)/Processo%20de%20Modelagem%20do%20Banco%20de%20Dados/imgs/modelagem.png" title="Relacionamentos" /></section>

<br>

<section align="justify"> A tabela <b>tb_produtos</b> se relaciona com a tabela <b>tb_categorias** e também com a tabela <b>tb_usuario</b>. A cardinalidade destes relacionamentos é de <b>um-para-muitos (1:N)</b>, isto porque um usuário pode realizar um pedido com muitos produtos, mas o produto específico (id único) pode estar atrelado a apenas um usuário. Da mesma forma, um produto pode está atrelado a apenas uma categoria, mas uma categoria pode conter diversos produtos. </section>

