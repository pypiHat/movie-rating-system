-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('ACTION', 'ADVENTURE', 'COMEDY', 'DRAMA', 'HORROR', 'ROMANCE', 'SCIENCE_FICTION');

-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "genres" "Genre"[],
    "rating" INTEGER,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);
