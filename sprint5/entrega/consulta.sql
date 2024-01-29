SELECT
    categoria.id AS id_categoria,
    categoria.nome AS categoria,
    produto.id AS id_produto,
    produto.nome AS produto,
    produto.preco AS preco
FROM
    categoria
    INNER JOIN produto ON categoria.id = produto.categoria_id
ORDER BY
    categoria.nome,
    produto.nome;

SELECT
    cliente.nome AS cliente,
    categoria.nome AS categoria,
    produto.nome AS produto,
    produto.preco AS preco_unitario,
    item_pedido.quantidade AS quantidade,
    pedido.data_pedido AS datas
FROM
    cliente
    INNER JOIN pedido ON cliente.id = pedido.cliente_id
    INNER JOIN item_pedido ON pedido.id = item_pedido.pedido_id
    INNER JOIN produto ON item_pedido.produto_id = produto.id
    INNER JOIN categoria ON categoria.id = produto.categoria_id
ORDER BY
    cliente.nome,
    categoria.nome;

SELECT
    categoria.nome,
    sum(
        item_pedido.preco_unitario * item_pedido.quantidade
    ) AS total
from
    categoria
    INNER JOIN produto ON categoria.id = produto.categoria_id
    INNER JOIN item_pedido ON item_pedido.produto_id = produto.id
GROUP BY
    categoria.nome
ORDER BY
    sum(
        item_pedido.preco_unitario * item_pedido.quantidade
    ) DESC;