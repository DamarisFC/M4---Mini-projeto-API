/*
  Warnings:

  - You are about to drop the column `latitude` on the `Unidade` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `Unidade` table. All the data in the column will be lost.
  - Added the required column `servico` to the `Unidade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Unidade" DROP COLUMN "latitude",
DROP COLUMN "longitude",
ADD COLUMN     "servico" TEXT NOT NULL;
