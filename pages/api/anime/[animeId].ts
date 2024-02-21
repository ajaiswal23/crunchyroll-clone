import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

import { toastConfig } from "@/libs/notification";
import { toast } from "react-toastify"; 

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
      toast.error("Invalid Id", toastConfig);
      throw new Error("Invalid Id");
    }

    if (!animeId) {
      toast.error("Missing Id", toastConfig);
      throw new Error("Missing Id");
    }

    const anime = await prismadb.anime.findUnique({
      where: {
        id: animeId,
      },
    });

    return res.status(200).json(anime);
  } catch (error) {
    toast.error("Error fetching Anime", toastConfig);
    console.log(error);
    return res.status(500).end();
  }
}
