import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const poolRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ size: z.number() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.pool.create({
        data: {
          size: input.size,
          squares: {
            createMany: {
              data: Array.from({ length: input.size ** 2 }).map((_, index) => ({
                status: "available",
                number: index + 1,
              })),
            },
          },
        },
      });
    }),
});
