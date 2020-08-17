CREATE DATABASE  IF NOT EXISTS `polimeros` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `polimeros`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: polimeros
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `empaque`
--

DROP TABLE IF EXISTS `empaque`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empaque` (
  `id` int NOT NULL,
  `semana` int DEFAULT NULL,
  `mes` varchar(50) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `operador_id` varchar(50) DEFAULT NULL,
  `producto_id` int DEFAULT NULL,
  `total_prod` int DEFAULT NULL,
  `total_peso` decimal(10,0) DEFAULT NULL,
  `primeras` int DEFAULT NULL,
  `peso_prod_prim` decimal(10,0) DEFAULT NULL,
  `cumplimiento_prim` float DEFAULT NULL,
  `segundas` int DEFAULT NULL,
  `peso_prod_seg` decimal(10,0) DEFAULT NULL,
  `cumplimiento_seg` float DEFAULT NULL,
  `terceras` int DEFAULT NULL,
  `peso_prod_ter` decimal(10,0) DEFAULT NULL,
  `cumplimiento_ter` float DEFAULT NULL,
  `paro_id` varchar(50) DEFAULT NULL,
  `no_diario` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `operador_id` (`operador_id`),
  KEY `producto_id` (`producto_id`),
  KEY `paro_id` (`paro_id`),
  CONSTRAINT `empaque_ibfk_1` FOREIGN KEY (`operador_id`) REFERENCES `operador` (`id`),
  CONSTRAINT `empaque_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `producto` (`id`),
  CONSTRAINT `empaque_ibfk_3` FOREIGN KEY (`paro_id`) REFERENCES `paro` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empaque`
--

LOCK TABLES `empaque` WRITE;
/*!40000 ALTER TABLE `empaque` DISABLE KEYS */;
/*!40000 ALTER TABLE `empaque` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `operador`
--

DROP TABLE IF EXISTS `operador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `operador` (
  `id` varchar(50) NOT NULL,
  `nombre` varchar(150) DEFAULT NULL,
  `turno` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operador`
--

LOCK TABLES `operador` WRITE;
/*!40000 ALTER TABLE `operador` DISABLE KEYS */;
/*!40000 ALTER TABLE `operador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paro`
--

DROP TABLE IF EXISTS `paro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paro` (
  `id` varchar(50) NOT NULL,
  `motivo` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paro`
--

LOCK TABLES `paro` WRITE;
/*!40000 ALTER TABLE `paro` DISABLE KEYS */;
/*!40000 ALTER TABLE `paro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `id` int NOT NULL,
  `nombre` varchar(150) DEFAULT NULL,
  `familia` varchar(50) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `grupo` varchar(50) DEFAULT NULL,
  `talla` int DEFAULT NULL,
  `unidad_inventario` varchar(50) DEFAULT NULL,
  `peso_prod` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-29 18:14:16
