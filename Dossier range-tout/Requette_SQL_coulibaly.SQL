--1.Créer les requêtes pour ajouter les vidéos suivantes à la base Videostar
INSERT INTO video (id_video,title,year_video,id_type)
VALUES ("APOCAL", "Apocalypse à Yarrao VIII",2021,2),
        ("QUIVUN", "Quiv, un monde englouti",2020,5),
        ("VIEENO", "Vie en orbite autour de
Ryverne IV",2022,7);

INSERT INTO video_place(id_video,id_place)
VALUES ("APOCAL",1),
        ("APOCAL",8),
        ("QUIVUN",10),
        ("VIEENO",18),
        ("VIEENO",20);

INSERT INTO video_star(id_video,id_star,role)
VALUES ("APOCAL",17,"Réalisateur")
        ("QUIVUN",8,"Réalisateur")
        ("VIEENO",9,"Réalisateur")
        ("VIEENO",5,"Compositeur");

--2.Créer les requêtes permettant de catégoriser les vidéos suivantes en changeant leur type.
UPDATE video
SET id_type=9
WHERE id_video = "LUCKYN"

UPDATE video
SET id_type=6
WHERE id_video = "SOLDIE"

UPDATE video
SET id_type=6
WHERE id_video = "DEADOF"

UPDATE video
SET id_type=4
WHERE id_video = "ROSETA"

--3.Afficher le titre des vidéos pour lesquelles il n'existe pas encore d'exemplaires.
SELECT id_video,title,id_copy
FROM video
	LEFT JOIN copy USING(id_video)
WHERE id_copy IS NULL

--4.Afficher les vidéos de type New et traitant de la planète Zorbight IX
SELECT title ,place_name,id_type
FROM `video`
	JOIN video_place USING (id_video)
    JOIN place USING(id_place)
WHERE place_name LIKE "Zorbight%" AND id_type=1
--5.Afin de créer l’email de relance aux adhérents, affichez la liste des exemplaires loués depuis plus de 7 jours avec le nom, le prénom, l’email de l’adhérent, le titreet le format de la vidéo.
SELECT firstname,lastname,email,title,format
FROM copy
	JOIN video USING (id_video)
    JOIN rental USING (id_copy)
	JOIN members USING (id_member)
    JOIN format USING (id_format)
WHERE DATEDIFF(NOW(),date_start)>7 AND date_end IS NULL
--6.Afficher pour chaque vidéo le nombre d’exemplaires dans chacun des formats.
SELECT title,format,COUNT(id_copy)
FROM video
 	JOIN copy USING (id_video) 
    JOIN format USING (id_format)
GROUP BY id_video,format
ORDER BY title
--7.Afficher les 10 adhérents ayant le plus payé pour de la location de vidéo en 2020.
SELECT id_member,SUM(DATEDIFF(date_end,date_start)*price_day) as paid
FROM `members` 
	JOIN rental USING(id_member)
    JOIN copy USING(id_copy)
    JOIN format USING(id_format)
GROUP BY id_member
ORDER BY paid DESC
LIMIT 10
--8.Afficher le nom et le prénom des adhérents ayant loué plusieurs fois une même vidéo. Afficher également le titre des vidéos concernées


--9.Afficher les titres de toutes les vidéos pour lesquelles aucun exemplaire physique n'est actuellement disponible à la location.
SELECT id_video,title,state
FROM video v
	JOIN copy USING(id_video)
    JOIN format USING(id_format)
WHERE "L" <> ALL(
	SELECT state 
    FROM copy
    	JOIN video USING(id_video)
    	JOIN format USING(id_format)
    WHERE id_video=v.id_video 
)AND id_format<>3



--10. Catherine Raleigh vient rendre toutes ses vidéos en cours de location.
--a. Afficher la somme due par Catherine Raleigh.
SELECT lastname,firstname,SUM(DATEDIFF(NOW(),date_start)*price_day)
FROM rental 
	JOIN members USING(id_member)
    JOIN copy USING(id_copy)
    JOIN video USING(id_video)
    JOIN format USING(id_format)
WHERE id_member =68
GROUP BY id_member


--b. Créer les requêtes de mise à jour de la base de données correspondant aux retours des vidéos de Catherine Raleigh. (On considère que tous les
--exemplaires sont rendus en bon état.)
SELECT lastname,id_rental,date_end
FROM `rental`
JOIN members USING(id_member)
WHERE id_rental =21

UPDATE rental
SET date_end=UTC_DATE()
WHERE id_rental =21

UPDATE rental
SET date_end=UTC_DATE()
WHERE id_rental =119

UPDATE rental
SET date_end=UTC_DATE()
WHERE id_rental =315

UPDATE rental
SET date_end=UTC_DATE()
WHERE id_rental =366


-- c. Catherine Raleigh emprunte la vidéo “Freezer” au format Blu-Ray. Créer les
-- requêtes de mise à jour de la base de données correspondant à cette
-- nouvelle location.
INSERT INTO rental(date_start,id_copy,id_member)
VALUES (UTC_DATE(),"FREEZE01",68)
-- 11. Afficher les recettes générées pour chacun des formats de vidéo au cours de
-- l’année 2021.

SELECT  format, SUM(DATEDIFF(NOW(),date_start)*price_day) AS 
FROM `format` 
        JOIN copy USING (id_format)
    	JOIN rental USING(id_copy)
WHERE YEAR(date_end) = 2021
GROUP BY format;

--12.Afficher pour chaque type le nombre de vidéos disponibles à la location, quel que soit le format.
SELECT id_type,COUNT(id_copy)
FROM video
    JOIN copy USING (id_video) 
WHERE state ="L"
GROUP BY id_type
--13.Afficher pour chaque année la ou les vidéos qui ont été les plus louées (en nb de
-- location, quel que soit le format)
