CREATE DATABASE  IF NOT EXISTS `prensas` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `prensas`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: prensas
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
-- Table structure for table `operador`
--

DROP TABLE IF EXISTS `operador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `operador` (
  `id` int NOT NULL,
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
-- Table structure for table `paros`
--

DROP TABLE IF EXISTS `paros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paros` (
  `id` varchar(50) NOT NULL,
  `motivo` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paros`
--

LOCK TABLES `paros` WRITE;
/*!40000 ALTER TABLE `paros` DISABLE KEYS */;
/*!40000 ALTER TABLE `paros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prensa`
--

DROP TABLE IF EXISTS `prensa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prensa` (
  `id` varchar(50) NOT NULL,
  `linea` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prensa`
--

LOCK TABLES `prensa` WRITE;
/*!40000 ALTER TABLE `prensa` DISABLE KEYS */;
/*!40000 ALTER TABLE `prensa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `id` int NOT NULL,
  `descripcion` varchar(150) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `grupo` varchar(50) DEFAULT NULL,
  `unidad_inventario` varchar(50) DEFAULT NULL,
  `familia` varchar(50) DEFAULT NULL,
  `peso` decimal(10,0) DEFAULT NULL,
  `talla` varchar(50) DEFAULT NULL,
  `tiempo_carga` float DEFAULT NULL,
  `tiempo_capacidad` int DEFAULT NULL,
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

--
-- Table structure for table `vulcanizado`
--

DROP TABLE IF EXISTS `vulcanizado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vulcanizado` (
  `id` int NOT NULL,
  `semana` int DEFAULT NULL,
  `mes` varchar(50) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `operador_id` int DEFAULT NULL,
  `prensa_id` varchar(50) DEFAULT NULL,
  `producto_id` int DEFAULT NULL,
  `cargas_program` int DEFAULT NULL,
  `producto_defecto` int DEFAULT NULL,
  `buen_estado` int DEFAULT NULL,
  `total_cargas` int DEFAULT NULL,
  `faltante_cargas` int DEFAULT NULL,
  `porcentaje_cump_total` double DEFAULT NULL,
  `porcentaje_buen_estado` double DEFAULT NULL,
  `paro_id` varchar(50) DEFAULT NULL,
  `peso_producir` decimal(10,0) DEFAULT NULL,
  `peso_producido` decimal(10,0) DEFAULT NULL,
  `faltante` decimal(10,0) DEFAULT NULL,
  `rebaba` decimal(10,0) DEFAULT NULL,
  `cumplimiento_kg` double DEFAULT NULL,
  `porcentaje_rebaba` double DEFAULT NULL,
  `tiempo_real` int DEFAULT NULL,
  `tiempo_no_utilizado` int DEFAULT NULL,
  `kwh` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `operador_id` (`operador_id`),
  KEY `prensa_id` (`prensa_id`),
  KEY `producto_id` (`producto_id`),
  KEY `paro_id` (`paro_id`),
  CONSTRAINT `vulcanizado_ibfk_1` FOREIGN KEY (`operador_id`) REFERENCES `operador` (`id`),
  CONSTRAINT `vulcanizado_ibfk_2` FOREIGN KEY (`prensa_id`) REFERENCES `prensa` (`id`),
  CONSTRAINT `vulcanizado_ibfk_3` FOREIGN KEY (`producto_id`) REFERENCES `producto` (`id`),
  CONSTRAINT `vulcanizado_ibfk_4` FOREIGN KEY (`paro_id`) REFERENCES `paros` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vulcanizado`
--

LOCK TABLES `vulcanizado` WRITE;
/*!40000 ALTER TABLE `vulcanizado` DISABLE KEYS */;
/*!40000 ALTER TABLE `vulcanizado` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-29 18:13:35
