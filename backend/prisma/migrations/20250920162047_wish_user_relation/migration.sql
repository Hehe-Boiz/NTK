/*
  Warnings:

  - You are about to drop the column `name` on the `Wish` table. All the data in the column will be lost.
  - Added the required column `userName` to the `Wish` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Wish" DROP COLUMN "name",
ADD COLUMN     "userName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Wish" ADD CONSTRAINT "Wish_userName_fkey" FOREIGN KEY ("userName") REFERENCES "User"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
