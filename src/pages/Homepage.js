import React, { useState } from "react";
import Search from "../component/Search";
import Pictures from "../component/Pictures";

const Homepage = () => {
  const [input, setInput] = useState("");
  let [data, setData] = useState(null);
  const auth = process.env.AUTH;
  const initialURL = "https://api.pexels.com/v1/curated?page=1?per_page=15";
  const search = async () => {
    const dataFetch = await fetch(initialURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parseData = await dataFetch.json();
    setData(parseData.photos);
  };

  const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;
  return (
    <div style={{ minHeight: "100vh" }}>
      <Search search={search} />
      <h1>This is homepage.</h1>
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Pictures data={d} />;
          })}
      </div>
    </div>
  );
};
<div></div>;
export default Homepage;
