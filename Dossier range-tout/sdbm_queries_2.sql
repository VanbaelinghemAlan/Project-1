-- 1/ Récupérer toutes les bières les plus alcoolisées de chaque continent
-- afficher le nom du contient , le nom de la bière, le degrès d'alcool et le volume 


SELECT continent_name, article_name, alcohol, volume
FROM continent co
    JOIN country USING (id_continent)
    JOIN brand USING (id_country)
    JOIN article USING (id_brand)
WHERE alcohol = (
    SELECT MAX(alcohol)
    FROM article
        JOIN brand USING (id_brand)
        JOIN country USING (id_country)
    WHERE id_continent = co.id_continent
);

-------------------
-- Plus performante à priori

SELECT continent_name, article_name, alcohol, volume
FROM continent co
    JOIN country USING (id_continent)
    JOIN brand USING (id_country)
    JOIN article USING (id_brand)
WHERE alcohol = (
    SELECT alcohol
    FROM article
        JOIN brand USING (id_brand)
        JOIN country USING (id_country)
    WHERE id_continent = co.id_continent
    ORDER BY alcohol DESC
    LIMIT 1
);


-- 2/ Récupérer le volume de bières vendu en litres pour chaque mois
-- et pour chaque type de bière
-- classés par années, mois et type de bière

SELECT YEAR(ticket_date) AS year, MONTH(ticket_date) AS month, type_name, SUM(volume * quantity) / 100 AS total_volume
FROM article
    JOIN type USING (id_type)
    JOIN sale USING (id_article)
    JOIN ticket USING (id_ticket)
GROUP BY year, month, id_type
ORDER BY year, month, type_name;


-- 3/ Récupérer le nom et le volume des bières allemandes achetées en même temps
-- que des bières françaises (achetées sur le même ticket de caisse)
-- classés par nom de bière

SELECT article_name, volume
FROM sale
    JOIN article USING (id_article)
    JOIN brand USING (id_brand)
    JOIN country USING (id_country)
WHERE country_name = "ALLEMAGNE"
    AND id_ticket IN (
        SELECT id_ticket
        FROM sale
            JOIN article USING (id_article)
            JOIN brand USING (id_brand)
            JOIN country USING (id_country)
        WHERE country_name = "FRANCE"
    )
GROUP BY id_article
ORDER BY article_name;

--------------------

SELECT article_name, volume
FROM sale s
    JOIN article USING (id_article)
    JOIN brand USING (id_brand)
    JOIN country USING (id_country)
WHERE country_name = "ALLEMAGNE"
    AND EXISTS (
        SELECT id_ticket
        FROM sale
            JOIN article USING (id_article)
            JOIN brand USING (id_brand)
            JOIN country USING (id_country)
        WHERE country_name = "FRANCE"
            AND id_ticket = s.id_ticket
    )
GROUP BY id_article
ORDER BY article_name;


-- 4/ Récupérer la liste des bières pour lequelles les ventes ont agumentées entre 2015 et 2016

-- Récupérer la liste des bières vendues en 2015 avec la quantité total vendue

-- 44 secondes

SELECT article_name
FROM article a
    JOIN sale USING (id_article)
    JOIN ticket USING (id_ticket)
WHERE ticket_date LIKE "2016-%"
GROUP BY id_article
HAVING SUM(quantity) > (
    SELECT SUM(quantity)
    FROM sale
        JOIN ticket USING (id_ticket)
    WHERE ticket_date LIKE "2015-%"
        AND id_article = a.id_article
);

-------------

SELECT article_name
FROM article a
WHERE (
        SELECT SUM(quantity)
        FROM sale
            JOIN ticket USING (id_ticket)
        WHERE YEAR(ticket_date) = 2015
            AND id_article = a.id_article
    ) < (
        SELECT SUM(quantity)
        FROM sale
            JOIN ticket USING (id_ticket)
        WHERE YEAR(ticket_date) = 2016
            AND id_article = a.id_article
    );

-------------

SELECT article_name
FROM article
    JOIN (
        SELECT id_article, SUM(quantity) AS total_quantity
        FROM sale
            JOIN ticket USING (id_ticket)
        WHERE ticket_date LIKE "2015-%"
        GROUP BY id_article
    ) a USING (id_article)
    JOIN (
        SELECT id_article, SUM(quantity) AS total_quantity
        FROM sale
            JOIN ticket USING (id_ticket)
        WHERE ticket_date LIKE "2016-%"
        GROUP BY id_article
    ) b USING (id_article)
WHERE a.total_quantity < b.total_quantity
GROUP BY id_article;


-- 5/ Récupérer les bières pour lesquelles le volume de bières
-- vendus est d'au moins 200 litres pour toutes les années

-- Récupérer pour chaque bière et pour chaque année le volume total vendu en litre





-- 6/ Récupérer pour chaque pays la ou les marques de bière dont le degrès d'alcool moyen est le plus élevé en affichant le degré d'alcool moyen



