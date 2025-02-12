import React, { useEffect, useState } from "react";
import Maincard from "./Maincard";

const Cards = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const getBookApi = async () => {
    try {
      const res = await fetch(
        "https://potterapi-fedeperin.vercel.app/en/books"
      );
      const bookData = await res.json();
      console.log(bookData);
      setData(bookData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getBookApi();
  }, []);

  //search data 
  const searchData = data.filter((curData) =>
      curData.title.toLowerCase().includes(search.toLowerCase()) 
  )

  return (
    <div className="container-fluid main-div">
      <h1 className="head">List of Books</h1>
      <div className="searchbox">
        <input
          type="text"
          placeholder="search book"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="container">
        <div className="row">
          {searchData &&
            searchData.map((curbook) => {
              return <Maincard key={curbook.index} curbook={curbook} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
