DROP DATABASE IF EXISTS `db_bitfeather`;
CREATE DATABASE `db_bitfeather`;
USE `db_bitfeather`;


DROP TABLE IF EXISTS `categoria`;
DROP TABLE IF EXISTS `autor`;
DROP TABLE IF EXISTS `comentario`;
DROP TABLE IF EXISTS `post`;
DROP TABLE IF EXISTS `tags`;
DROP TABLE IF EXISTS `role`;
DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `user_role`;

CREATE TABLE  `categoria`(
    `id` INT AUTO_INCREMENT NOT NULL,
    `nombre` VARCHAR(60) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `autor` (
	`id` INT AUTO_INCREMENT NOT NULL,
	`nombre` VARCHAR(100) NOT NULL,
	`apellido` VARCHAR(100) NOT NULL,
    `avatar` VARCHAR(255),
	PRIMARY KEY (`id`)
	
);

CREATE TABLE `comentario` (
	`id` INT AUTO_INCREMENT NOT NULL,
	`cuerpo` TEXT NOT NULL,
	`fecha_creacion` TIMESTAMP NOT NULL,
	`autor_id` INT,
	PRIMARY KEY (`id`),
    FOREIGN KEY (`autor_id`) REFERENCES `autor`(`id`)
);
CREATE TABLE `post` (
	`id` INT AUTO_INCREMENT NOT NULL,
	`titulo` VARCHAR(100) NOT NULL,
	`cuerpo` TEXT NOT NULL,
	`fecha_creacion` TIMESTAMP NOT NULL,
    `categoria_id` INT NOT NULL,
	`autor_id` INT,
    `comentario_id` INT,
	PRIMARY KEY (`id`),
    FOREIGN KEY (`categoria_id`) REFERENCES `categoria`(`id`),
    FOREIGN KEY (`autor_id`) REFERENCES `autor`(`id`),
    FOREIGN KEY (`comentario_id`) REFERENCES `comentario`(`id`)
);

CREATE TABLE `tags`(
	`post_id` INT, 
    `tag` VARCHAR(50),
     KEY `fk_postID` (`post_id`),
     CONSTRAINT `fk_postID` FOREIGN KEY (`post_id`) REFERENCES `post`(`id`)
);


CREATE TABLE `role` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `rol` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);


CREATE TABLE  `user`(
    `id` INT AUTO_INCREMENT NOT NULL,
    `email` VARCHAR(100) UNIQUE NOT NULL,
    `user_name` VARCHAR(30) UNIQUE NOT NULL, 
    `password` VARCHAR(80) NOT NULL,
    `is_activo` BOOLEAN DEFAULT FALSE,
    `autor_id` INT, 
    PRIMARY KEY (`id`),
    KEY `fk_idautor` (`autor_id`),
    CONSTRAINT `fk_idautor` FOREIGN KEY (`autor_id`) REFERENCES `autor`(`id`)

);  

CREATE TABLE `user_role` (
  `user_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `fk_iduser` (`user_id`),
  KEY `fk_idrole` (`role_id`),
  CONSTRAINT `fk_iduser` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`),
  CONSTRAINT `fk_idrole` FOREIGN KEY (`role_id`) REFERENCES `role`(`id`)
); 

