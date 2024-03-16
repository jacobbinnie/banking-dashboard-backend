/*
  Warnings:

  - You are about to drop the `ConnectionRequests` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ConnectionRequests";

-- CreateTable
CREATE TABLE "ConnectionRequest" (
    "id" TEXT NOT NULL,
    "consentId" TEXT NOT NULL,
    "stateParam" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "ConnectionRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ConnectionRequest_consentId_key" ON "ConnectionRequest"("consentId");
