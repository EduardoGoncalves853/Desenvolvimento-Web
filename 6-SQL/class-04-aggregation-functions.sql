SELECT * FROM orders;

 -- organiza orders em ordem alfabética
SELECT * FROM orders ORDER BY pais;

-- retorna somente Brasil
SELECT * FROM orders WHERE pais = 'Brazil';

-- retorna dados que começa|termina|meio que tenha 'ma'
-- %ma% / meio
-- %ma / começo
-- ma% / fim
SELECT * FROM orders WHERE pais LIKE '%zi%';

-- ( DISTINCT ) retorna valores distintos de uma tabela ou coluna
SELECT DISTINCT categoria FROM orders ORDER BY categoria;

SELECT * FROM orders WHERE pais IN ('Brazil','Argentina');
SELECT * FROM orders WHERE total_vendas BETWEEN 1000 AND 2000;

-- conta todas as checagens
SELECT COUNT(*) AS QTD FROM orders;
-- contas checagens existentes apenas do Brazil
SELECT COUNT(*) AS QTD FROM orders WHERE pais = 'Brazil';

-- arredonda e count até 2 casas decimais => Soma todas as vendas
-- retorna o menor valor mínimo de total_vendas
SELECT 
   count(*) AS QTD,
   ROUND(SUM(total_vendas), 2) AS Total,   
   MIN(total_vendas)

FROM orders
WHERE pais = 'Brazil';

-- faz soma dos registros de cada país distitamente
-- agrupa linhas que contém os mesmos valores
SELECT pais, round(SUM(total_vendas)) AS Total
FROM orders
GROUP BY pais
ORDER BY Total Desc LIMIT 10;
-- ordena em decrescente com um limite de 10 países

-- SELECT de id_pedido => COUNT os pedidos 
-- => grupa linhas que tem os mesmos valores
SELECT id_pedido, COUNT(id_pedido)
FROM orders GROUP BY id_pedido;
-- SELECT de orders onde id_pedido é igual a → 'AE-2011-9160'
SELECT * FROM orders WHERE id_pedido = 'AE-2011-9160';