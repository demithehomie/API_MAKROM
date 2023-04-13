/*
  Warnings:

  - You are about to drop the column `updatedtAt` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpfCnpj` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `updatedtAt`,
    ADD COLUMN `address` VARCHAR(127) NOT NULL,
    ADD COLUMN `cep` VARCHAR(12) NOT NULL,
    ADD COLUMN `city` VARCHAR(50) NOT NULL,
    ADD COLUMN `cpfCnpj` VARCHAR(127) NOT NULL,
    ADD COLUMN `number` VARCHAR(5) NOT NULL,
    ADD COLUMN `phone` VARCHAR(12) NOT NULL,
    ADD COLUMN `phoneNumber` VARCHAR(12) NOT NULL,
    ADD COLUMN `state` VARCHAR(50) NOT NULL,
    ADD COLUMN `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `birthAt` DATETIME(0) NULL,
    ALTER COLUMN `role` DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX `users_email_key` ON `users`(`email`);
