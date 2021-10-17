import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [series, setSeries] = useState(data);
  const clearItems = () => {
    setSeries([]);
  };

  const resetItems = () => {
    setSeries(data);
  };

  return (
    <main>
      <section className="container">
        <h3>Top {series.length} Series</h3>
        <List series={series} />
        <button className="btn" onClick={clearItems}>
          Clear All
        </button>
        <button className="btn" onClick={resetItems}>
          Reset All
        </button>
      </section>
    </main>
  );
}

export default App;
