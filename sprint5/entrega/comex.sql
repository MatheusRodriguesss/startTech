CREATE DATABASE comex;

CREATE TABLE categoria (
    id bigint AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100)
);

CREATE TABLE produto (
    id bigint AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    preco decimal(10, 2),
    categoria_id bigint,
    FOREIGN KEY(categoria_id) references categoria(id)
);

CREATE TABLE cliente (
    id bigint AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255)
);

CREATE TABLE pedido (
    id bigint AUTO_INCREMENT PRIMARY KEY,
    data_pedido DATETIME,
    cliente_id bigint,
    FOREIGN KEY(cliente_id) REFERENCES cliente(id)
);

CREATE TABLE item_pedido (
    id bigint AUTO_INCREMENT PRIMARY KEY,
    pedido_id bigint,
    produto_id bigint,
    preco_unitario decimal(10, 2),
    quantidade integer,
    FOREIGN KEY(pedido_id) REFERENCES pedido(id),
    FOREIGN KEY(produto_id) REFERENCES produto(id)
);