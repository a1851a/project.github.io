-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2022-04-02 16:56:02
-- 伺服器版本： 10.4.22-MariaDB
-- PHP 版本： 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `simpleml1`
--

-- --------------------------------------------------------

--
-- 資料表結構 `record1`
--

CREATE TABLE `record1` (
  `code` int(4) NOT NULL,
  `mr` double NOT NULL,
  `lmr` double NOT NULL,
  `ymr` double NOT NULL,
  `mc` double NOT NULL,
  `yc` double NOT NULL,
  `ym` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `lmc` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `kmeans_cluster` int(10) NOT NULL,
  `kmeans_pep` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `knn_id` int(10) NOT NULL,
  `knn_pep` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `ca_pep` varchar(10) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
