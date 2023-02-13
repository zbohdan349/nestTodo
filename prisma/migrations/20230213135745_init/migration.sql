-- CreateEnum
CREATE TYPE "Status" AS ENUM ('NotStarted', 'InProgress', 'Done');

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
