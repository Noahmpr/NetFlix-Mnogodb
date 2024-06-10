"use server";

import { revalidatePath } from "next/cache";
import prisma from "../lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";

export async function addTowatchlist(formData: FormData) {
  const movieId = formData.get("movieId") as string;
  const pathname = formData.get("pathname") as string;
  const session = await getServerSession(authOptions);

  if (movieId && session?.user?.email) {
    const data = await prisma.watchList.create({
      data: {
        userId: session.user.email,
        movieId: movieId,
      },
    });

    revalidatePath(pathname);
  }
}

export async function deleteFromWatchlist(formData: FormData) {
  "use server";

  const watchlistId = formData.get("watchlistId") as string;
  const pathname = formData.get("pathname") as string;

  const data = await prisma.watchList.delete({
    where: {
      id: watchlistId,
    },
  });

  revalidatePath(pathname);
}
