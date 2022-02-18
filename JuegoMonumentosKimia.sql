-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 18-02-2022 a las 17:56:58
-- Versión del servidor: 8.0.27-0ubuntu0.20.04.1
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `JuegoMonumentos`
--
CREATE DATABASE IF NOT EXISTS `JuegoMonumentos` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `JuegoMonumentos`;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `finalResultado`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `finalResultado` (
`id` int
,`mote` text
,`puntos` int
,`tiempo` time
,`vida` int
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partidas`
--

CREATE TABLE `partidas` (
  `id` int NOT NULL,
  `mote` text NOT NULL,
  `puntos` int NOT NULL,
  `vida` int NOT NULL,
  `tiempo` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `partidas`
--

INSERT INTO `partidas` (`id`, `mote`, `puntos`, `vida`, `tiempo`) VALUES
(1, 'Kimia', 0, 0, '00:00:00'),
(2, 'Kimia', 0, 0, '00:00:00'),
(3, 'Kimia', 0, 0, '00:00:00'),
(4, 'Kimia', 0, 0, '00:00:00'),
(5, 'f', 0, 6, '00:00:40'),
(6, 'e', 4, 1, '24:42:52'),
(7, 'y', 4, 3, '18:56:12'),
(8, 'rrrr', 4, 3, '08:58:08'),
(9, 'Kimiaaa', 0, 0, '00:00:00'),
(10, 'Kimiaaa', 0, 0, '00:00:00'),
(11, 'Kimiaaa', 0, 0, '00:00:00'),
(12, 'Kimiaaa', 0, 0, '00:00:00'),
(13, 'Kimiaaannnnn', 0, 0, '00:00:00'),
(14, 'Kimiaaannnnnas', 0, 0, '00:00:00'),
(15, 'h', 0, 0, '00:00:00'),
(16, 'Beeb', 0, 0, '00:00:00'),
(17, 'Beeb', 0, 0, '00:00:00'),
(18, 'Beeb', 0, 0, '00:00:00'),
(19, 'Beeb', 0, 0, '00:00:00'),
(20, 'heyyou', 0, 0, '00:00:00'),
(21, 's', 0, 0, '00:00:00'),
(22, 'dd', 0, 0, '00:00:00'),
(23, 'Kimiaaa', 0, 0, '00:00:00'),
(24, 'Kimiaaa', 0, 0, '00:00:00'),
(25, 'ff', 0, 0, '00:00:00'),
(26, 'ss', 0, 0, '00:00:00'),
(27, 'dcd', 0, 0, '00:00:00'),
(28, 'd', 0, 0, '00:00:00'),
(29, 'dhhh', 0, 0, '00:00:00'),
(30, 's', 0, 0, '00:00:00'),
(31, 'fdf', 0, 0, '00:00:00'),
(32, 'dd', 0, 0, '00:00:00'),
(33, 'Kimiaaa', 0, 6, '00:00:18'),
(34, 'Kimiaaa', 100, 5, '00:00:21'),
(35, 'Kimiaaa', 100, 5, '00:00:21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

CREATE TABLE `preguntas` (
  `id` int NOT NULL,
  `idProvincia` int NOT NULL,
  `nombre` text NOT NULL,
  `pregunta` text NOT NULL,
  `respuestaCorrecta` text NOT NULL,
  `respuesta1` text NOT NULL,
  `respuesta2` text NOT NULL,
  `respuesta3` text NOT NULL,
  `descripcion` text NOT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`id`, `idProvincia`, `nombre`, `pregunta`, `respuestaCorrecta`, `respuesta1`, `respuesta2`, `respuesta3`, `descripcion`, `img`) VALUES
(1, 1, 'Sevilla', '¿En qué año se comenzó a edificar la Giralda?', '1000', '1234', '1593', '1492', '5t5', 'giralda-bovedas.jpg'),
(2, 2, 'Córdoba', '¿Qué nombre tuvo La Mezquita de Córdoba tras ser construida una catedral cristiana en su interior?', 'Asunción de Nuestra Señora', 'Nuestra Señora de Badaín', 'Catedral de San Isidro', 'Nuestra Señora de los Milagros', '', ''),
(3, 3, 'Granada', '¿Es la Alhambra el monumento más visitado de España?', 'Sí', 'No, es la Sagrada Familia de Barcelona', 'No, es la Catedral de Santiago de Compostela', 'No, es el Teatro Romano de Mérida', '', ''),
(4, 4, 'Huelva', '¿Por qué recibe el nombre de Muelle del Tinto el puente onubense?', 'Porque está situado encima del Río Tinto', 'Porque descargaban los trenes de la Rio Tinto Company Limited procedentes de las minas de cobre del norte de la provincia.', 'Porque allí se festejaba una fiesta tradicional antigua, en la cuál se bebía el tinto de la cosecha del año', 'Reciba tal nombre ya que la ciudad era famosa por su vino tinto especial llamado Tinto Onubo', '', ''),
(5, 5, 'Málaga', '¿En qué año fue construida la fortaleza La Alcazaba?', 'Entre 1057 y 1063', 'Entre 1042 y 1065', 'Entre 1034 y 1048', 'Entre 1068 y 1074', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincias`
--

CREATE TABLE `provincias` (
  `id` int NOT NULL,
  `nombre` text NOT NULL,
  `imagen` text NOT NULL,
  `fondo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `provincias`
--

INSERT INTO `provincias` (`id`, `nombre`, `imagen`, `fondo`) VALUES
(1, 'archivoIndias', 'archivo-indias-1.jpg', 'Bandera_de_Andalucia.svg.png'),
(2, 'plazaEspania', 'plazaesp.jpg', 'maxresdefault.jpg');

-- --------------------------------------------------------

--
-- Estructura para la vista `finalResultado`
--
DROP TABLE IF EXISTS `finalResultado`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `finalResultado`  AS  select `partidas`.`id` AS `id`,`partidas`.`mote` AS `mote`,`partidas`.`puntos` AS `puntos`,`partidas`.`vida` AS `vida`,`partidas`.`tiempo` AS `tiempo` from `partidas` where (`partidas`.`id` = 1) ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `partidas`
--
ALTER TABLE `partidas`
  ADD KEY `id` (`id`);

--
-- Indices de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `provincias`
--
ALTER TABLE `provincias`
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `partidas`
--
ALTER TABLE `partidas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `provincias`
--
ALTER TABLE `provincias`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
