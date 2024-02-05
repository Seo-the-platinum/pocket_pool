import { db } from "../src/server/db";

const main = async () => {
  await db.pool.create({
    data: {
      size: 100,
      squares: {
        createMany: {
          data: Array.from({ length: 100 }).map((_, index) => ({
            status: "available",
            number: index + 1,
          })),
        },
      },
    },
  });
};

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
