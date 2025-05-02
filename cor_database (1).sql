-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 02, 2025 at 07:15 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cor_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `assessed_fees`
--

CREATE TABLE `assessed_fees` (
  `id` int(11) NOT NULL,
  `tuition` decimal(10,2) DEFAULT NULL,
  `athletic_fee` decimal(10,2) DEFAULT NULL,
  `cultural_fee` decimal(10,2) DEFAULT NULL,
  `development_fee` decimal(10,2) DEFAULT NULL,
  `guidance_fee` decimal(10,2) DEFAULT NULL,
  `library_fee` decimal(10,2) DEFAULT NULL,
  `medical_dental_fee` decimal(10,2) DEFAULT NULL,
  `registration_fee` decimal(10,2) DEFAULT NULL,
  `computer_fee` decimal(10,2) DEFAULT NULL,
  `total_assessment` decimal(10,2) DEFAULT NULL,
  `less_financial_aid` decimal(10,2) DEFAULT NULL,
  `net_assessed` decimal(10,2) DEFAULT NULL,
  `credit_memo` decimal(10,2) DEFAULT NULL,
  `total_discount` decimal(10,2) DEFAULT NULL,
  `total_payment` decimal(10,2) DEFAULT NULL,
  `outstanding_balance` decimal(10,2) DEFAULT NULL,
  `first_payment_due` decimal(10,2) DEFAULT NULL,
  `second_payment_due` decimal(10,2) DEFAULT NULL,
  `third_payment_due` decimal(10,2) DEFAULT NULL,
  `payment_validation_date` varchar(255) NOT NULL,
  `official_receipt` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `assessed_fees`
--

INSERT INTO `assessed_fees` (`id`, `tuition`, `athletic_fee`, `cultural_fee`, `development_fee`, `guidance_fee`, `library_fee`, `medical_dental_fee`, `registration_fee`, `computer_fee`, `total_assessment`, `less_financial_aid`, `net_assessed`, `credit_memo`, `total_discount`, `total_payment`, `outstanding_balance`, `first_payment_due`, `second_payment_due`, `third_payment_due`, `payment_validation_date`, `official_receipt`) VALUES
(1, 2000.00, 50.00, 50.00, 80.00, 30.00, 100.00, 130.00, 50.00, 500.00, 2990.00, 2990.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 'February 25, 2025', 'Scholar');

-- --------------------------------------------------------

--
-- Table structure for table `cor`
--

CREATE TABLE `cor` (
  `registration_number` bigint(255) NOT NULL,
  `academic_year_term` varchar(255) NOT NULL,
  `student_number` varchar(255) NOT NULL,
  `assessed_fees_id` int(255) NOT NULL,
  `total_lec_units` int(255) NOT NULL,
  `total_lab_units` int(255) NOT NULL,
  `total_credit_units` int(255) NOT NULL,
  `total_tuition` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cor`
--

INSERT INTO `cor` (`registration_number`, `academic_year_term`, `student_number`, `assessed_fees_id`, `total_lec_units`, `total_lab_units`, `total_credit_units`, `total_tuition`) VALUES
(2425208798, 'Second Semester AY 2024-2025', '234-02141M', 1, 14, 5, 20, 20);

-- --------------------------------------------------------

--
-- Table structure for table `student_information`
--

CREATE TABLE `student_information` (
  `student_no` varchar(255) NOT NULL,
  `student_profile` varchar(255) NOT NULL,
  `student_name` varchar(255) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `age` int(100) NOT NULL,
  `email_address` varchar(255) NOT NULL,
  `college` varchar(255) NOT NULL,
  `program` varchar(255) NOT NULL,
  `major` varchar(255) NOT NULL,
  `year_level` varchar(255) NOT NULL,
  `curriculum` varchar(255) NOT NULL,
  `scholarship_discount` varchar(255) NOT NULL,
  `student_signature` varchar(255) NOT NULL,
  `registrar_signature` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student_information`
--

INSERT INTO `student_information` (`student_no`, `student_profile`, `student_name`, `gender`, `age`, `email_address`, `college`, `program`, `major`, `year_level`, `curriculum`, `scholarship_discount`, `student_signature`, `registrar_signature`) VALUES
('234-02141M', '/lee.PNG', 'LEE, ANGELO PRESENTACION', 'Male', 20, 'angelolee227@gmail.com', 'College of Computing Studies', 'Bachelor of Science in Information Technology', '', 'Second Year-Regular', '2018-2019', 'UNIFAST-FHE', '/lee_signature.png', '/registrar_signature.png');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `subject_code` varchar(255) NOT NULL,
  `student_no` varchar(255) NOT NULL,
  `subject_title` varchar(255) NOT NULL,
  `lec_units` int(10) NOT NULL,
  `lab_units` int(10) NOT NULL,
  `credit_units` int(10) NOT NULL,
  `tuition_units` int(10) NOT NULL,
  `subject_section` varchar(255) NOT NULL,
  `subject_schedule_room` varchar(255) NOT NULL,
  `subject_faculty` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`subject_code`, `student_no`, `subject_title`, `lec_units`, `lab_units`, `credit_units`, `tuition_units`, `subject_section`, `subject_schedule_room`, `subject_faculty`) VALUES
('DBMSLAB2', '234-02141M', 'Database Management System 2 (Laboratory)', 0, 1, 1, 1, 'BSINFOTEC H2B', 'TH 03:00PM-06:00PM', 'Carlos, Emanie'),
('DBMSLEC2', '234-02141M', 'Database Management System 2 (Lecture)', 2, 0, 2, 2, 'BSINFOTEC H2B', 'M 09:00AM-11:00AM', 'Carlos, Emanie'),
('GEELECCP', '234-02141M', 'Communicative Proficiency in Business Correspondence and Research Writing', 3, 0, 3, 3, 'BSINFOTEC H2B', 'T 02:00PM-05:00PM', 'Partido, Ranilo'),
('GEPEHEF2', '234-02141M', 'Physical Activity Towards Health and Fitness II', 2, 0, 2, 2, 'BSINFOTEC H2B', 'T 07:00AM-09:00AM', ''),
('INTHCL1B', '234-02141M', 'Introduction to Human Computer Interaction (Laboratory)', 0, 1, 1, 1, 'BSINFOTEC H2B', 'M 11:00AM-01:00PM', 'Macasil, Ma. Jasmine Rose'),
('INTHCLC', '234-02141M', 'Introduction to Human Computer Interaction (Lecture)', 2, 0, 2, 2, 'BSINFOTEC H2B', 'M 01:00PM-03:00PM', 'Macasil, Ma. Jasmine Rose'),
('IPATLAB1', '234-02141M', 'Integrative Programming and Technologies 1 (Laboratory)', 0, 1, 1, 1, 'BSINFOTEC H2B', 'T 06:00PM-09:00PM', 'San Jose, Dhani'),
('IPATLEC1', '234-02141M', 'Integrative Programming and Technologies 1 (Lecture)', 1, 0, 2, 2, 'BSINFOTEC H2B', 'M 06:00PM-08:00PM', 'San Jose, Dhani'),
('NETWKLAB1', '234-02141M', 'Networking 1 (Laboratory)', 0, 1, 1, 1, 'BSINFOTEC H2B', 'TH 07:00AM-10:00AM', 'Almazan, Edmund'),
('NETWKLC1', '234-02141M', 'Networking 1 (Lecture)', 2, 0, 2, 2, 'BSINFOTEC H2B', 'M 04:00PM-05:00PM', 'Almazan, Edmund'),
('WEBDVLAB2', '234-02141M', 'Web Development 2 (Laboratory)', 0, 1, 1, 1, 'BSINFOTEC H2B', 'T 11:00AM-02:00PM', 'Sison, Edgardo'),
('WEBDVLEC2', '234-02141M', 'Web Development 2 (Lecture)', 2, 0, 2, 2, 'BSINFOTEC H2B', 'M 01:00PM-03:00PM', 'Sison, Edgardo');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assessed_fees`
--
ALTER TABLE `assessed_fees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cor`
--
ALTER TABLE `cor`
  ADD PRIMARY KEY (`registration_number`),
  ADD KEY `student_number` (`student_number`),
  ADD KEY `assessed_fees_id` (`assessed_fees_id`);

--
-- Indexes for table `student_information`
--
ALTER TABLE `student_information`
  ADD PRIMARY KEY (`student_no`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`subject_code`),
  ADD KEY `student_no` (`student_no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assessed_fees`
--
ALTER TABLE `assessed_fees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cor`
--
ALTER TABLE `cor`
  ADD CONSTRAINT `cor_ibfk_1` FOREIGN KEY (`student_number`) REFERENCES `student_information` (`student_no`),
  ADD CONSTRAINT `cor_ibfk_2` FOREIGN KEY (`assessed_fees_id`) REFERENCES `assessed_fees` (`id`);

--
-- Constraints for table `subjects`
--
ALTER TABLE `subjects`
  ADD CONSTRAINT `subjects_ibfk_1` FOREIGN KEY (`student_no`) REFERENCES `student_information` (`student_no`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
