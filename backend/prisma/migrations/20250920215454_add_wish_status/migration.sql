-- CreateEnum
CREATE TYPE "WishStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "Wish" ADD COLUMN     "status" "WishStatus" NOT NULL DEFAULT 'PENDING';
