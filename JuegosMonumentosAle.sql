-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 18-02-2022 a las 10:42:37
-- Versión del servidor: 8.0.28-0ubuntu0.20.04.3
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
-- Base de datos: `JuegosMonumentos`
--
CREATE DATABASE IF NOT EXISTS `JuegosMonumentos` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `JuegosMonumentos`;

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
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `partidas`
--
ALTER TABLE `partidas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
