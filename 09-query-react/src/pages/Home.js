import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Home() {
  const { data, isLoading, refetch } = useQuery(["cat"], () => {
    return axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <h1>
      WELCOME TO HOME PAGE
      <p>{data?.fact}</p>
      <button onClick={refetch}> Update Data </button>
    </h1>
  );
}

export default Home;
