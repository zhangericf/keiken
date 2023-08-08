SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `app_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `Book`
--

CREATE TABLE `Book` (
  `BookId` int(11) NOT NULL,
  `BookName` varchar(255) NOT NULL,
  `LibraryId` int(11) NOT NULL,
  `MemberId` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `Librarian`
--

CREATE TABLE `Librarian` (
  `LibrarianId` int(11) NOT NULL,
  `LibrarianName` varchar(55) NOT NULL,
  `LibraryId` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `Library`
--

CREATE TABLE `Library` (
  `LibraryId` int(11) NOT NULL,
  `LibraryName` varchar(55) NOT NULL,
  `Location` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `Member`
--

CREATE TABLE `Member` (
  `MemberId` int(11) NOT NULL,
  `MemberName` varchar(55) NOT NULL,
  `MemberAddress` varchar(255) NOT NULL,
  `LibraryId` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `Visitor`
--

CREATE TABLE `Visitor` (
  `VisitorId` int(11) NOT NULL,
  `VisitorName` varchar(55) NOT NULL,
  `LibraryId` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Book`
--
ALTER TABLE `Book`
  ADD PRIMARY KEY (`BookId`),
  ADD KEY `Library_has_book` (`LibraryId`),
  ADD KEY `Member_borrowed_book` (`MemberId`);

--
-- Index pour la table `Librarian`
--
ALTER TABLE `Librarian`
  ADD PRIMARY KEY (`LibrarianId`),
  ADD KEY `Library_has_librarian` (`LibraryId`);

--
-- Index pour la table `Library`
--
ALTER TABLE `Library`
  ADD PRIMARY KEY (`LibraryId`);

--
-- Index pour la table `Member`
--
ALTER TABLE `Member`
  ADD PRIMARY KEY (`MemberId`),
  ADD KEY `Library_has_member` (`LibraryId`);

--
-- Index pour la table `Visitor`
--
ALTER TABLE `Visitor`
  ADD PRIMARY KEY (`VisitorId`),
  ADD KEY `Library_has_visitor` (`LibraryId`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Book`
--
ALTER TABLE `Book`
  MODIFY `BookId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Librarian`
--
ALTER TABLE `Librarian`
  MODIFY `LibrarianId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Library`
--
ALTER TABLE `Library`
  MODIFY `LibraryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Member`
--
ALTER TABLE `Member`
  MODIFY `MemberId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Visitor`
--
ALTER TABLE `Visitor`
  MODIFY `VisitorId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Book`
--
ALTER TABLE `Book`
  ADD CONSTRAINT `Library_has_book` FOREIGN KEY (`LibraryId`) REFERENCES `Library` (`LibraryId`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `Member_borrowed_book` FOREIGN KEY (`MemberId`) REFERENCES `Member` (`MemberId`) ON DELETE SET NULL ON UPDATE NO ACTION;

--
-- Contraintes pour la table `Librarian`
--
ALTER TABLE `Librarian`
  ADD CONSTRAINT `Library_has_librarian` FOREIGN KEY (`LibraryId`) REFERENCES `Library` (`LibraryId`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Contraintes pour la table `Member`
--
ALTER TABLE `Member`
  ADD CONSTRAINT `Library_has_member` FOREIGN KEY (`LibraryId`) REFERENCES `Library` (`LibraryId`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Contraintes pour la table `Visitor`
--
ALTER TABLE `Visitor`
  ADD CONSTRAINT `Library_has_visitor` FOREIGN KEY (`LibraryId`) REFERENCES `Library` (`LibraryId`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
