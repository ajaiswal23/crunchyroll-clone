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

    const anime = await prismadb.anime.findMany();

    return res.status(200).json(anime);
  } catch (error) {
    toast.error("Error fetching any Anime", toastConfig);
    console.log({ error });
    return res.status(500).end();
  }
}
