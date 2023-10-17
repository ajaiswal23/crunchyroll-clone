import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(405).end();
    }

    await serverAuth(req, res);

    const { animeId } = req.query;

    if (typeof animeId !== "string") {
      throw new Error("Invalid Id");
    }

    if (!animeId) {
      throw new Error("Missing Id");
    }

    const anime = await prismadb.anime.findUnique({
      where: {
        id: animeId,
      },
    });

    return res.status(200).json(anime);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
