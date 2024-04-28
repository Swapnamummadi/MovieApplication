import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card">
      <img src={data.moviemainphotos} alt={data.movietitle} />

      <div className="movie-info">
        <h1 style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          {data.movietitle}
        </h1>
        <div className="icons">
          <div>
            <i className="fa-regular fa-circle-play" title="play video"></i>
          </div>
          <div>
            <i class="fa-regular fa-thumbs-up" title="Like"></i>
          </div>
          <div>
            <i class="fa-regular fa-thumbs-down" title="DisLike"></i>
          </div>
          <div>
            <i class="fa-solid fa-circle-ellipsis" title="more-details"></i>
          </div>
        </div>
        <div className="movie-info-details">
          <h4>Languages:</h4>
          <ul
            style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
          >
            {data.movielanguages.map((lang) => (
              <li
                style={{
                  marginTop: "1em",
                  fontSize: "13px",
                  paddingRight: "5px",
                  color: "green",
                }}
              >
                {lang}
              </li>
            ))}
          </ul>
        </div>

        <div className="movie-info-details">
          <h4>Genres:</h4>
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
            }}
          >
            {data.moviegenres.map((genre) => (
              <li
                style={{
                  marginTop: "1.7em",
                  fontSize: "13px",
                  paddingRight: "5px",
                  color: "green",
                }}
              >
                {genre}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
