// ./prisma/seed.ts

import { PrismaClient, Genre } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  const actionMovie = await prisma.movie.create({
    data: {
      title: 'Die Hard',
      genres: [Genre.ACTION],
      rating: 4,
    },
  });

  const comedyMovie = await prisma.movie.create({
    data: {
      title: 'The Hangover',
      genres: [Genre.COMEDY],
      rating: 3,
    },
  });

  const dramaMovie = await prisma.movie.create({
    data: {
      title: 'The Shawshank Redemption',
      genres: [Genre.DRAMA],
      rating: 5,
    },
  });

  console.log(`Seeded ${actionMovie.title}, ${comedyMovie.title}, and ${dramaMovie.title}`);
}

seed()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
