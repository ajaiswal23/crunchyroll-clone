import { NextPageContext } from "next";
import { signOut, getSession } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnimeList from "@/components/AnimeList";
import useAnimeList from "@/hooks/useAnimeList";
import useFavorites from "@/hooks/useFavorites";
import InfoModal from "@/components/InfoModal";
import useInfoModalStore from "@/hooks/useInfoModalStore";


export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

const Home = () => {
const {data: anime = []} = useAnimeList();
const {data: favorites = []} = useFavorites();
const {isOpen, closeModal} = useInfoModalStore();

  return (
    <>
      <main className="max-container">
        <title>Crunchyroll Clone</title>
        <link
          rel="icon"
          href="/assets/icons/crunchyroll.svg"
          type="image/svg+xml"
          sizes="32x32"
        />
      </main>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <section className="pt-16 pb-20">
        <Hero />
      </section>
      <div className="pb-40 ">
        <AnimeList title="Top Picks for You" data={anime} />
      </div>
      <div className="pb-40 ">
        <AnimeList title="Your Watchlist" data={favorites} />
      </div>
    </>
  );
}

export default Home;