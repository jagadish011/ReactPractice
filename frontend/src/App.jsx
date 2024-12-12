import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // IIFE Function inside the uesEffect to use asnc and await
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("request canceled", error);
          return;
        }
        console.error("error in fetcing the products ", error);
        setLoading(false);
      }
    })();
    // clean up function
    return () => controller.abort();
  }, [search]);

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <h1>Search api calling in react</h1>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h2>Number of products: {products.length}</h2>
    </>
  );
}

export default App;
