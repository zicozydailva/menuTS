import Categories from "./Categories";
import Menu from "./Menu";
import items from "./data";
import { useState } from "react";
import { Item } from "./models";
import "./App.css";

const allCategories: string[] = [
  "all",
  ...new Set(items.map((item) => item.category)),
];

const App: React.FC = () => {
  const [menuItems, setMenuItems] = useState<Item[]>(items);
  const [categories, setCategories] = useState(allCategories);

  const filteredItem = (category: string) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const tempItem = items.filter((item) => item.category === category);
    setMenuItems(tempItem);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>

        <Categories
          categories={categories}
          setCategories={setCategories}
          filteredItem={filteredItem}
        />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};

export default App;
