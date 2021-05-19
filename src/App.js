import React, { useState } from "react";
import Buttons from "./components/Buttons";
import Food from "./components/Food";
import { data } from "./data";

const App = () => {
  const [menu, setMenu] = useState(data);

  const filter = (category) => {
    if (category === "") {
      setMenu(data);
      return;
    }
    const breakfast = data.filter((m) => m.category === category);
    setMenu(breakfast);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Buttons filter={filter} />
        <div className="section-center">
          {menu.map((m) => {
            return <Food food={m} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default App;
