/*
  Warnings:

  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ConnectionRequest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_companyId_fkey";

-- DropForeignKey
ALTER TABLE "ConnectionRequest" DROP CONSTRAINT "ConnectionRequest_userId_fkey";

-- DropTable
DROP TABLE "Account";

-- DropTable
DROP TABLE "ConnectionRequest";

-- DropEnum
DROP TYPE "AccountType";

-- CreateTable
CREATE TABLE "Consents" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expiry" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Consents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Consents" ADD CONSTRAINT "Consents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
