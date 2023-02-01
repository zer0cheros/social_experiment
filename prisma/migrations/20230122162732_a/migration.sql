/*
  Warnings:

  - You are about to drop the column `content` on the `followers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `followers` DROP COLUMN `content`,
    ADD COLUMN `followId` INTEGER NULL;
