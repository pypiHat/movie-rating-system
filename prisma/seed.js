const { PrismaClient, Genre } = require("@prisma/client");

const prisma = new PrismaClient();


// Seed data for User table
const userData = [
  {
    name: "Ali",
    movies: [
      {
        title: "The Dark Knight",
        genres: ["ACTION", "DRAMA"],
        rating: 8,
      },
      {
        title: "The Shawshank Redemption",
        genres: ["DRAMA"],
        rating: 9,
      },
    ],
  },
  {
    name: "hassan gholi",
    movies: [
      {
        title: "Inception",
        genres: ["ACTION", "SCIENCE_FICTION"],
      },
    ],
  },
];

// Seed data for Movie table
const movieData = [];

for (const user of userData) {
  for (const movie of user.movies) {
    movieData.push({
      title: movie.title,
      genres: movie.genres,
      rating: movie.rating,
      user: {
        connect: {
          name: user.name,
        },
      },
    });
  }
}


async function main() {
  const createdUsers = await Promise.all(
    userData.map((user) =>
      prisma.user.create({
        data: {
          name: user.name,
        },
      })
    )
  );

  const createdMovies = await Promise.all(
    movieData.map((movie) =>
      prisma.movie.create({
        data: {
          title: movie.title,
          genres: movie.genres,
          rating: movie.rating,
          user: {
            connect: {
              id: createdUsers.find((u) => u.name === movie.user.connect.name).id,
            },
          },
        },
      })
    )
  );

  console.log(`Created ${createdUsers.length} users and ${createdMovies.length} movies.`);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
