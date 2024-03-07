/*
  Warnings:

  - You are about to drop the `_TagToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_TagToUser" DROP CONSTRAINT "_TagToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_TagToUser" DROP CONSTRAINT "_TagToUser_B_fkey";

-- DropTable
DROP TABLE "_TagToUser";

-- CreateTable
CREATE TABLE "_ContributorToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_RequestToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ContributorToTag_AB_unique" ON "_ContributorToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ContributorToTag_B_index" ON "_ContributorToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RequestToTag_AB_unique" ON "_RequestToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_RequestToTag_B_index" ON "_RequestToTag"("B");

-- AddForeignKey
ALTER TABLE "_ContributorToTag" ADD CONSTRAINT "_ContributorToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Contributor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContributorToTag" ADD CONSTRAINT "_ContributorToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RequestToTag" ADD CONSTRAINT "_RequestToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Request"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RequestToTag" ADD CONSTRAINT "_RequestToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
