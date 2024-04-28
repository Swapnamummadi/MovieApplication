import React, { useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";

const MovieList = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [search, setSearch] = useState(false);

  const searchHandler = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filter = data.filter((show) => {
      const titleMatch = show.movietitle.toLowerCase().includes(query);
      const languageMatch = show.movielanguages.some((lang) =>
        lang.toLowerCase().includes(query)
      );
      const countryMatch = show.moviecountries.some((country) =>
        country.toLowerCase().includes(query)
      );
      const genreMatch = show.moviegenres.some((genre) =>
        genre.toLowerCase().includes(query)
      );

      return titleMatch || languageMatch || countryMatch || genreMatch;
    });

    setFilteredData(filter);
    setSearch(true);
  };

  return (
    <div>
      <Navbar searchHandler={searchHandler} searchQuery={searchQuery} />
      <div className="movies-container">
        <h1 style={{ paddingTop: "30px" }}>Movies</h1>

        <div className="movie-list">
          {search
            ? filteredData.map((item) => (
                <Card key={item.imdbmovieid} data={item} />
              ))
            : data.map((item) => {
                return <Card key={item.imdbmovieid} data={item} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
