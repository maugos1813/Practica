-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 10-06-2024 a las 22:17:50
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `usuarios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) NOT NULL,
  `nombres` varchar(25) DEFAULT NULL,
  `apellidos` varchar(25) DEFAULT NULL,
  `direccion` varchar(25) NOT NULL,
  `correo` varchar(25) NOT NULL,
  `dni` int(8) NOT NULL,
  `edad` int(3) DEFAULT NULL,
  `fechaCreacion` varchar(15) NOT NULL,
  `telefono` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombres`, `apellidos`, `direccion`, `correo`, `dni`, `edad`, `fechaCreacion`, `telefono`) VALUES
(1, 'Mauro', 'Agostinelli', 'Arequipa Mz5 Lt5', 'mauro@gmail.com', 78678987, 21, '2022/02/15', 987654657),
(2, 'Matias', 'Melgar', 'Piura Mz4 Lt4', 'matias@gmail.com', 65768765, 21, '2023/08/25', 976887654),
(3, 'Karla', 'Agostinelli', 'Lima Mz7 Lt7', 'karla@gmail.com', 87586765, 38, '2021/03/12', 987678987),
(4, 'Sebastian', 'Basara', 'moquegua Mz6 Lt6', 'sebastian@gmail.com', 76587643, 17, '2021/03/29', 967564537),
(5, 'Gabriel', 'Avalos', 'Iquitos Mz1 Lt1', 'gabriel@gmail.com', 45657687, 27, '2020/12/31', 978675643),
(6, 'Camila', 'Agostinelli', 'Buenos Aires Mz12 lt12', 'camila@gmail.com', 75687678, 27, '2023/04/23', 968776523),
(7, 'Deysy', 'Gamonal', 'Trujillo Mz9 Lt9', 'deysy@gmail.com', 75687898, 45, '2021/03/18', 978987654),
(8, 'Omar', 'Samanez', 'Mollendo Mz10 Lt10', 'omar@gmail.com', 67765677, 44, '2020/05/23', 978987654),
(9, 'Franchesca', 'Agostinelli', 'Arequipa Mz23 Lt23', 'franchesca@gmail.com', 78765678, 1, '2023/04/10', 987654567),
(10, 'Miguel', 'Rospigliosi', 'Dolores Mz45 Lt45', 'miguel@gmail.com', 45656789, 21, '2019/05/13', 987678987),
(20, 'Mauro', 'Agostinelli', 'Arequipa Mz5 Lt5', 'mauro@gmail.com', 78678987, 21, '2022/02/15', 987654657),
(30, 'Matias', 'Melgar', 'Piura Mz4 Lt4', 'matias@gmail.com', 65768765, 21, '2023/08/25', 976887654),
(40, 'Karla', 'Agostinelli', 'Lima Mz7 Lt7', 'karla@gmail.com', 87586765, 38, '2021/03/12', 987678987),
(50, 'Sebastian', 'Basara', 'moquegua Mz6 Lt6', 'sebastian@gmail.com', 76587643, 17, '2021/03/29', 967564537),
(60, 'Gabriel', 'Avalos', 'Iquitos Mz1 Lt1', 'gabriel@gmail.com', 45657687, 27, '2020/12/31', 978675643),
(70, 'Camila', 'Agostinelli', 'Buenos Aires Mz12 lt12', 'camila@gmail.com', 75687678, 27, '2023/04/23', 968776523),
(80, 'Deysy', 'Gamonal', 'Trujillo Mz9 Lt9', 'deysy@gmail.com', 75687898, 45, '2021/03/18', 978987654),
(90, 'Omar', 'Samanez', 'Mollendo Mz10 Lt10', 'omar@gmail.com', 67765677, 44, '2020/05/23', 978987654),
(100, 'Franchesca', 'Agostinelli', 'Arequipa Mz23 Lt23', 'franchesca@gmail.com', 78765678, 1, '2023/04/10', 987654567),
(110, 'Miguel', 'Rospigliosi', 'Dolores Mz45 Lt45', 'miguel@gmail.com', 45656789, 21, '2019/05/13', 987678987);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_usuario` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
