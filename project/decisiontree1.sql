-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2022-01-14 07:55:57
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
-- 資料庫: `decisiontree1`
--

-- --------------------------------------------------------

--
-- 資料表結構 `record`
--

CREATE TABLE `record` (
  `id` int(10) NOT NULL,
  `code` int(5) NOT NULL,
  `mr` double NOT NULL,
  `lmr` double NOT NULL,
  `ymr` double NOT NULL,
  `mc` double NOT NULL,
  `yc` double NOT NULL,
  `ym` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `lmc` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `predicted` varchar(5) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 傾印資料表的資料 `record`
--

INSERT INTO `record` (`id`, `code`, `mr`, `lmr`, `ymr`, `mc`, `yc`, `ym`, `lmc`, `predicted`) VALUES
(1, 1101, 9752687, 9565047, 9904802, 96223350, 95805296, '小於0', '大於0', '大於0'),
(2, 1102, 8985672, 9454594, 7923604, 80250990, 69921108, '大於0', '小於0', '大於0'),
(3, 1103, 197773, 193141, 208929, 2046138, 1856092, '小於0', '大於0', '大於0'),
(4, 1104, 592281, 558944, 488513, 5509449, 4870949, '大於0', '大於0', '大於0'),
(5, 4567, 231331, 5445565, 1863724, 4565487, 7656757, '大於0', '大於0', '大於0'),
(6, 1234, 56476567, 87687, 2484358, 2033319, 1863724, '大於0', '大於0', '大於0');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `record`
--
ALTER TABLE `record`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `record`
--
ALTER TABLE `record`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
