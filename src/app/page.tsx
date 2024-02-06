import { unstable_noStore as noStore } from "next/cache";
import { api } from "~/trpc/server";
import Square from './_components/square'

export default async function Home() {
  noStore();
  const pool = await api.pool.get.query()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1>
        Rays Pool
      </h1>
      <div className='grid grid-rows-10 grid-cols-10'>
        {
          pool?.squares.map((square) => {
            return (
              <Square key={square.id} {...square} />
            )
          })
        }
      </div>
    </main>
  );
}

