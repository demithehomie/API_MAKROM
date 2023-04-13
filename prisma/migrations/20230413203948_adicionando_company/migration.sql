/*
  Warnings:

  - Added the required column `company` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `company` VARCHAR(50) NOT NULL;
