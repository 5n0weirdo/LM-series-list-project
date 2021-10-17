import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [series, setSeries] = useState(data);
  const clearItems = () => {
    setSeries([]);
  };

  return (
    <main>
      <section className="container">
        <h3>Top 10 Series</h3>
        <List />
        <button className="btn" onClick={clearItems}>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
