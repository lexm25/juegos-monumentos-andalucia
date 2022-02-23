-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 23-02-2022 a las 20:23:33
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
-- Base de datos: `JuegoMonumentos`
--
CREATE DATABASE IF NOT EXISTS `JuegoMonumentos` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `JuegoMonumentos`;

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
(1, 'Eddy', 300, 5, '00:03:59'),
(2, 'Kimia', 300, 2, '00:02:32'),
(3, 'Jose Pablo', 500, 3, '00:03:02'),
(4, 'Alejandro', 500, 4, '00:03:02');

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
(1, 1, 'Sevilla', '¿En qué año se comenzó a edificar la Giralda?', '1000', '1234', '1593', '1492', 'El primer cuerpo de la torre de la Catedral, se comenzó a edificar en el año 1000 de la Era cristiana como minarete de la gran mezquita, y al mismo tiempo como observatorio astronómico, uno de los primeros levantados por los árabes después del erigido en Bagdad, en el mismo palacio del califa.', 'giralda-bovedas.jpg'),
(2, 2, 'Córdoba', '¿Qué nombre tuvo La Mezquita de Córdoba tras ser construida una catedral cristiana en su interior?', 'Asunción de Nuestra Señora', 'Nuestra Señora de Badaín', 'Catedral de San Isidro', 'Nuestra Señora de los Milagros', 'A partir del siglo XVI la catedral cordobesa, construida en el interior de la mezquita musulmana, pasó a ser llamada de la “Asunción de Nuestra Señora” (antes era conocida como “Santa María Madre de Dios”).', 'mezquita-cordoba.jpg'),
(3, 3, 'Granada', '¿Es la Alhambra el monumento más visitado de España?', 'Sí', 'No, es la Sagrada Familia de Barcelona', 'No, es la Catedral de Santiago de Compostela', 'No, es el Teatro Romano de Mérida', 'Cada año, pasan por sus palacios y jardines más de 2 millones y medio de personas, siendo el monumento más visitado de España.', 'alhambra.jpg'),
(4, 4, 'Huelva', '¿Por qué recibe el nombre de Muelle del Tinto el puente onubense?', 'Porque descargaban los trenes de la Rio Tinto Company Limited', 'Porque está situado encima del Río Tinto', 'Porque allí se festejaba una fiesta tradicional antigua, en la cuál se bebía el tinto de la cosecha del año', 'Reciba tal nombre ya que la ciudad era famosa por su vino tinto especial llamado Tinto Onubo', 'El Muelle descargadero de minerales, propiedad de la Compañía de Minas de Riotinto, de ahí su nombre.', 'muelle-del-tinto.jpg'),
(5, 5, 'Málaga', '¿En qué año fue construida la fortaleza La Alcazaba?', 'Entre 1057 y 1063', 'Entre 1042 y 1065', 'Entre 1034 y 1048', 'Entre 1068 y 1074', 'Construida entre 1057 y 1063 según los historiadores musulmanes a instancias del rey de taifas bereber de Granada, Badis. En su construcción se emplearon materiales de acarreo y se reutilizaron piezas del anexo teatro romano, como columnas y capiteles', 'alcazaba.jpg'),
(6, 6, 'Almería', '¿Para qué se usó el Cable Inglés?', 'Fue un muelle-cargadero de minerales', 'Fue un mirador muy moderno para su época', 'Fue un puente que se quedó a medio construir', 'Fue una construcción para demostrar poder', 'Data del año 1812 y sirvió de muelle-cargadero de minerales en los años prósperos de la industria minera de aquella época.', 'cable-ingles.jpg'),
(7, 7, 'Jaén', '¿En qué siglo se construyó el Castillo de Santa Catalina?', 'Siglos XIII y XIV', 'Siglos XII Y XIII', 'Siglos XV Y XVI', 'Siglos XVI Y XVII', 'Mucha es la historia que tiene a sus espaldas esta construcción, ya que podríamos remontarnos a los asentamientos iberos, y a las construcciones que en la época de Aníbal se construyeron por los cartagineses, pero fue con la llegada de los musulmanes cuando esta construcción tomó relevancia, construyéndose fortificaciones sucesivas hasta llegar a su diseño actual, construido en la Edad Media aproximadamente en los siglos XII y XIII', 'santa-catalina.jpg'),
(8, 8, 'Cádiz', '¿Por qué recibe este nombre?', 'Por Manuel de Falla', 'Por las famosas Fallas de Cádiz', 'Por José Luis Peréz Falla, arquitecto construyó el teatro', 'Debido a los repetidos fallos a la hora de su construcción', 'Hasta el año 1926, el teatro se conocía como Gran Teatro de Cádiz, pero fue rebautizado como Gran Teatro Falla en honor al famoso músico gaditano, Manuel de Falla, ciudadano de honor de la ciudad.', 'falla.jpg');

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
(1, 'sevilla', 'plazaesp.jpg', 'Torre-del-Oro-Sevilla.jpg'),
(2, 'cordoba', 'mezquita-cordoba.jpg', 'cordoba.jpg'),
(3, 'granada', 'alhambra.jpg', 'maxresdefault.jpg'),
(4, 'huelva', 'muelle-del-tinto.jpg', 'huelva.jpg'),
(5, 'malaga', 'alcazaba.jpg', 'malaga.jpg'),
(6, 'almeria', 'cable-ingles.jpg', 'almeria.jpg'),
(7, 'jaen', 'santa-catalina.jpg', 'jaen.jpg'),
(8, 'cadiz', 'falla.jpg', 'cadiz.jpg');

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `partidas`
--
ALTER TABLE `partidas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `provincias`
--
ALTER TABLE `provincias`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;