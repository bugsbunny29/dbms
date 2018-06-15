-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: shubh
-- ------------------------------------------------------
-- Server version	5.7.21-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `artists`
--

DROP TABLE IF EXISTS `artists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `artists` (
  `artist_id` varchar(10) NOT NULL,
  `artist_name` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`artist_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artists`
--

LOCK TABLES `artists` WRITE;
/*!40000 ALTER TABLE `artists` DISABLE KEYS */;
INSERT INTO `artists` VALUES ('aa','Atif Aslam'),('ar','AR Rahman'),('as','Arijit Singh'),('aw','Alan Walker'),('cp','Charlie Puth'),('js','Jagjit Singh'),('lp','Linkin Park'),('sg','Shreya Ghoshal'),('ts','Taylor Swift');
/*!40000 ALTER TABLE `artists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fav`
--

DROP TABLE IF EXISTS `fav`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fav` (
  `id` int(11) NOT NULL,
  `song_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`song_id`),
  KEY `SONGS_KEY` (`song_id`),
  CONSTRAINT `SONGS_KEY` FOREIGN KEY (`song_id`) REFERENCES `songs` (`song_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `USERS_KEY` FOREIGN KEY (`id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fav`
--

LOCK TABLES `fav` WRITE;
/*!40000 ALTER TABLE `fav` DISABLE KEYS */;
INSERT INTO `fav` VALUES (3,1),(3,2),(3,4),(3,5),(4,5),(3,8),(3,19),(3,32),(3,48);
/*!40000 ALTER TABLE `fav` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('-TQ0n6vu4ZVj0_PQuVKbqGpAWDzgcQqk',1523432933,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"username\":\"shubh619\",\"userid\":4,\"user\":{\"id\":4,\"name\":\"Shubhang Verma\",\"age\":20,\"email\":\"shubh@gmail.com\",\"username\":\"shubh619\",\"password\":\"1234\"}}'),('9NQOQ1ow4JFi9IrrjO54-OTdtm8QV2gJ',1523476868,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"username\":\"kritiramps\",\"userid\":3,\"user\":{\"id\":3,\"name\":\"Sukriti Rampal\",\"age\":19,\"email\":\"kriti@gmail.com\",\"username\":\"kritiramps\",\"password\":\"kriti29\"}}'),('QS-26iR1rtE9fN8xbhsSPnZPn4UQO8lU',1523521177,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `songs`
--

DROP TABLE IF EXISTS `songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `songs` (
  `song_id` int(10) NOT NULL AUTO_INCREMENT,
  `song_name` varchar(50) DEFAULT NULL,
  `artist_id` varchar(10) DEFAULT NULL,
  `star` varchar(25) DEFAULT NULL,
  `movie` varchar(25) DEFAULT NULL,
  `year` int(10) DEFAULT NULL,
  `genre` varchar(25) DEFAULT NULL,
  `duration` decimal(10,4) DEFAULT NULL,
  `likes` int(10) DEFAULT '0',
  PRIMARY KEY (`song_id`),
  UNIQUE KEY `song_name` (`song_name`),
  KEY `artist_id` (`artist_id`),
  CONSTRAINT `songs_ibfk_1` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`artist_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `songs`
--

LOCK TABLES `songs` WRITE;
/*!40000 ALTER TABLE `songs` DISABLE KEYS */;
INSERT INTO `songs` VALUES (1,'Piya Aaye Na','as','Aditya Roy Kapoor','Aashiqui2',2013,'Romantic',3.5400,2),(2,'Tum Hi Ho','as','Aditya Roy Kapoor','Aashiqui2',2013,'Romantic',4.3200,4),(3,'Milne hai Mujhse Aayi','as','Aditya Roy Kapoor','Aashiqui2',2013,'Emotional',4.0200,1),(4,'Meri Aashiqui','as','Aditya Roy Kapoor','Aashiqui2',2013,'Emotional',3.9800,0),(5,'Ae Dil Hai Mushkil','as','Ranbir Kapoor','Ae Dil Hai Mushkil',2016,'Emotional',4.1000,3),(6,'Channa Mereya','as','Ranbir Kapoor','Ae Dil Hai Mushkil',2016,'Emotional',4.2100,1),(7,'Illahi','as','Ranbir Kapoor','Ae Dil Hai Mushkil',2016,'Romantic',3.6700,0),(8,'Hawaayein','as','Shahrukh Khan','Raees',2017,'Romantic',4.1500,2),(9,'Safar','as','Shahrukh Khan','Raees',2017,'Pop',4.0000,2),(10,'Zaalima','as','Shahrukh Khan','Raees',2017,'Romantic',4.0100,1),(11,'Bin Tere','aa','Ranbir Kapoor','Ae Dil Hai Mushkil',2016,'Romantic',4.0000,0),(12,'Aadat','aa','NULL','NULL',2003,'Pop',4.1300,2),(13,'Tu Jaane Na','aa','Ranbir Kapoor','Tamasha',2015,'Romantic',4.1400,0),(14,'Darsal','aa','Ranbir Kapoor','Tamasha',2015,'Rock',4.0000,0),(15,'Safarnama','aa','Ranbir Kapoor','Tamasha',2015,'Rock',4.2000,0),(16,'Agar Tum Sath Ho','as','Ranbir Kapoor','Tamasha',2015,'Emotional',4.0000,3),(17,'Tu Koi Aur Hai','ar','Ranbir Kapoor','Tamasha',2015,'Classical',4.2000,2),(18,'Parade De Le Bastille','ar','Ranbir Kapoor','Tamasha',2015,'Rock',4.0000,0),(19,'Attention','cp','Charlie Puth','NULL',2017,'Pop',4.3000,4),(20,'How Long','cp','Charlie Puth','NULL',2017,'Pop',4.1100,2),(21,'Dangerously','cp','Charlie Puth','NULL',2013,'Rock',3.7000,0),(22,'We don\'t talk Anymore','cp','Charlie Puth','NULL',2016,'Emotional',3.5000,4),(23,'Shake It Off','ts','Taylor Swift','NULL',2014,'Pop',3.5200,2),(24,'Blank Space','ts','Taylor Swift','NULL',2017,'Pop',4.0800,2),(25,'Love Story','ts','Taylor Swift','NULL',2015,'Romantic',4.0400,1),(26,'Gorgeous','ts','Taylor Swift','NULL',2015,'Rock',3.5400,0),(27,'I Don\'t Wanna Live Forever','ts','Taylor Swift','NULL',2018,'Romantic',3.5700,3),(28,'Samjhaawan','sg','Alia Bhatt','Badrinath Ki Dulhaniya',2017,'Romantic',4.0100,1),(29,'Aashik Surrender Hua','sg','Alia Bhatt','Badrinath Ki Dulhaniya',2017,'Pop',3.4300,0),(30,'Hamsafar','aa','Alia Bhatt','Badrinath Ki Dulhaniya',2017,'Emotional',4.2000,1),(31,'Mast Magan','as','Alia Bhatt','Badrinath Ki Dulhaniya',2017,'Rock',4.1000,1),(32,'Matargashti','ar','Deepika Padukone','Tamasha',2015,'Pop',3.5000,2),(34,'Dil se Dil','ar','Shahrukh Khan','NULL',2008,'Romantic',3.4900,1),(35,'Tum Ho','ar','Alia Bhatt','Badrinath Ki Dulhaniya',2017,'Pop',4.0000,0),(36,'Heer','ar','Shahrukh Khan','NULL',2009,'Rock',3.3000,1),(37,'Chaiya Chaiya','ar','Shahrukh Khan','NULL',2003,'Rock',4.0800,3),(38,'Teri Fariyad','js','NULL','Tum Bin',2005,'Emotional',5.2000,4),(39,'Jhuki Jhuki Si Nazar','js','NULL','NULL',2003,'Romantic',3.4500,1),(40,'Ghoomar','sg','Deepika Padukone','Padmavat',2018,'Pop',3.4400,4),(41,'Lal Ishq','as','Deepika Padukone','Padmavat',2018,'Romantic',3.5600,2),(42,'Be Intehaan','sg','Deepika Padukone','NULL',2012,'Romantic',4.1100,2),(43,'Numb','lp','chester','NULL',2008,'Rock',4.2000,5),(44,'Castle of Glass','lp','chester','NULL',2010,'Emotional',3.5000,2),(45,'In the End','lp','chester','NULL',2009,'Emotional',4.1000,4),(46,'Somewhere I belong','lp','chester','NULL',2009,'Romantic',3.5900,2),(47,'Heavy','lp','chester','NULL',2012,'Rock',3.5500,1),(48,'Faded','aw','Alan Walker','NULL',2015,'Rock',4.1600,5),(49,'Spectre','aw','Alan Walker','NULL',2017,'Pop',3.4200,3),(50,'Falls Down','aw','Alan Walker','NULL',2017,'Pop',3.5800,2);
/*!40000 ALTER TABLE `songs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `email` varchar(25) DEFAULT NULL,
  `username` varchar(25) DEFAULT NULL,
  `password` varchar(25) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'Sukriti Rampal',19,'kriti@gmail.com','kritiramps','kriti29'),(4,'Shubhang Verma',20,'shubh@gmail.com','shubh619','1234');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-11 13:55:11
