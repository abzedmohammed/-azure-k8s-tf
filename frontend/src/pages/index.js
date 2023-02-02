import PageContainer from "@/layout/PageContainer";
import { useEffect, useState } from "react";
import Favourites from "./favourites";
import Hero from "./hero/hero";
import Nav from "./nav/Nav";
import Search from "./search/search";
import SingleMovie from "./singlemovie";

const url = process.env.NEXT_PUBLIC_TETFLIX_BACKEND_URL

export default function Home() {
  const [movies, setmovies] = useState([])
  console.log("URL=", url);

  useEffect(() => {
    fetch(url + "/movies")
    .then(res => res.json())
    .then(data => {
      setmovies(data)
    })
  }, [])
  return (
    <>
    <Nav />
    <Search />
    <Hero movies={movies} />
    
    <div className="main-content">
      <Favourites />

      <h2 className="p-3 mb-5">Other updates and sections are coming soon....</h2>
    </div>
    </>
  )
}
