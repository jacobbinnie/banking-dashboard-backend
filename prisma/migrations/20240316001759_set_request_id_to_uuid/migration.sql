/*
  Warnings:

  - You are about to drop the column `stateParam` on the `ConnectionRequest` table. All the data in the column will be lost.
  - The required column `requestId` was added to the `ConnectionRequest` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "ConnectionRequest" DROP COLUMN "stateParam",
ADD COLUMN     "requestId" TEXT NOT NULL;
