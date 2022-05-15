
INSERT INTO `author` (`id`, `name`) VALUES
(1, 'David'),
(3, 'Adam');

INSERT INTO `post` (`id`, `author_id`, `name`, `note`, `status`, `created_at`) VALUES
(1, 1, 'Test article xyz 1', '', 1, '2022-05-15 18:43:58'),
(2, 1, 'Test article xyz 2', '', 1, '2022-05-15 18:44:30'),
(3, 3, 'Test article xyz 3', '', 1, '2022-05-15 18:45:04'),
(4, 1, 'Test article xyz 4', '', 1, '2022-05-15 18:45:10'),
(5, 1, 'Test article xyz 5', '', 0, '2022-05-15 18:45:15'),
(6, 1, 'Test article xyz 6', '', 1, '2022-05-15 18:45:22'),
(7, 1, 'Test article xyz 7', '', 0, '2022-05-15 18:45:30'),
(8, 3, 'Test article xyz 8', '', 1, '2022-05-15 18:45:32'),
(9, 1, 'Test article xyz 9', '', 1, '2022-05-15 18:45:42'),
(10, 1, 'Test article xyz 10', '', 0, '2022-05-15 18:45:44'),
(11, 1, 'Test article xyz 11', '', 1, '2022-05-15 18:45:56'),
(12, 1, 'Test article xyz 12', '', 1, '2022-05-15 18:45:57');
