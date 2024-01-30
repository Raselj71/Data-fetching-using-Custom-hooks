import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import useFetch from "./CustomHook/useFetch";
import Item from "./components/Item";

function App() {
  const API = "https://fakestoreapi.com/products";
  const [data, loading, error, setData] = useFetch(API);
  const backupdata = data;

  const searching = (search) => {
    if (search.is) {
      const updateData = data.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      });

      setData(updateData);
    } else {
      setData(backupdata);
    }
  };

  return (
    <main className="bg-gray-950 min-h-screen">
      <Header search={searching} />
      <div className="flex gap-2 mt-2 flex-grow flex-wrap p-5">
        {data && data.map((data) => <Item key={data.id} data={data} />)}
      </div>
    </main>
  );
}

export default App;
