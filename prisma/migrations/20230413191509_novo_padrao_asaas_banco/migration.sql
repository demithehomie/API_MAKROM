/*
  Warnings:

  - You are about to drop the column `cep` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `users` table. All the data in the column will be lost.

*/

-- AlterTable
ALTER TABLE `users` DROP COLUMN `cep`,
    DROP COLUMN `number`,
    DROP COLUMN `phoneNumber`,
    ADD COLUMN `addressNumber` VARCHAR(5) NOT NULL DEFAULT '00000',
    ADD COLUMN `complement` VARCHAR(50) NOT NULL DEFAULT 'complement',
    ADD COLUMN `mobilePhone` VARCHAR(12) NOT NULL DEFAULT 'mobilePhone',
    ADD COLUMN `municipalInscription` VARCHAR(50) NOT NULL DEFAULT 'municipalinscription',
    ADD COLUMN `observations` VARCHAR(250) NOT NULL DEFAULT 'observations',
    ADD COLUMN `postalCode` VARCHAR(12) NOT NULL DEFAULT 'postalCode',
    ADD COLUMN `province` VARCHAR(50) NOT NULL DEFAULT 'province',
    ADD COLUMN `stateInscription` VARCHAR(50) NOT NULL DEFAULT 'stateinscription';
