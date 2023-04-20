-- AlterTable
ALTER TABLE `users` MODIFY `address` VARCHAR(250) NOT NULL,
    MODIFY `state` VARCHAR(250) NOT NULL,
    MODIFY `complement` VARCHAR(250) NOT NULL DEFAULT 'complement',
    MODIFY `province` VARCHAR(250) NOT NULL DEFAULT 'province';
