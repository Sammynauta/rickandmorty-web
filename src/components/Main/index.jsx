import React, { useEffect, useState } from "react";
import "../Main/style.css";

export default function Main() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNextPage = () => {
    fetchCharacters(info.next);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    fetchCharacters(info.prev);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  return (
    <>
      <div className="container">
        <nav>
          <ul className="pagination">
            {info.prev ? (
              <li className="page-item">
                <button className="page-link" onClick={handlePreviousPage}>
                  Previous
                </button>
              </li>
            ) : null}
            {info.next ? (
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                  Next
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>

      <main>
        {characters.map((item, index) => (
          <div key={index} className="Card">
            <img src={item.image} />
            <div className="details">
              <strong>Nome: {item.name}</strong>
              <span>Status: {item.status}</span>
              <span>Especie: {item.species}</span>
            </div>
          </div>
        ))}
      </main>

      <div className="container">
        <nav>
          <ul className="pagination">
            {info.prev ? (
              <li className="page-item">
                <button className="page-link" onClick={handlePreviousPage}>
                  Previous
                </button>
              </li>
            ) : null}
            {info.next ? (
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                  Next
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </>
  );
}
