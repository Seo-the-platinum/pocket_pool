import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const squareRouter = createTRPCRouter({
  claim: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.square.update({
        where: {
          id: input.id,
        },
        data: {
          status: "claimed",
        },
      });
    }),
  release: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.square.update({
        where: {
          id: input.id,
        },
        data: {
          status: "available",
        },
      });
    }),
  get: publicProcedure.query(({ ctx }) => {
    return ctx.db.square.findMany();
  }),
});
