-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'CLIENT');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CLIENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoffeeShop" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "logoUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CoffeeShop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bean" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "farm" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "process" TEXT NOT NULL,
    "altitude" INTEGER NOT NULL,
    "cupScore" DOUBLE PRECISION,
    "imageUrl" TEXT,
    "shopId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bean_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tasting" (
    "id" TEXT NOT NULL,
    "body" DOUBLE PRECISION NOT NULL,
    "acidity" DOUBLE PRECISION NOT NULL,
    "sweetness" DOUBLE PRECISION NOT NULL,
    "aroma" DOUBLE PRECISION NOT NULL,
    "bitterness" DOUBLE PRECISION NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "beanId" TEXT NOT NULL,

    CONSTRAINT "Tasting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Bean" ADD CONSTRAINT "Bean_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "CoffeeShop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tasting" ADD CONSTRAINT "Tasting_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tasting" ADD CONSTRAINT "Tasting_beanId_fkey" FOREIGN KEY ("beanId") REFERENCES "Bean"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
