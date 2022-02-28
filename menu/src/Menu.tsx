import React from "react";
import { Item } from "./models";

interface Props {
  menuItems: Item[];
}

const Menu = ({ menuItems }: Props) => {
  console.log(menuItems);

  return (
    <div className="section-center">
      {menuItems.map((item) => {
        const { price, title, img, desc, id } = item;
        return (
            <article key={id} className='menu-item'>
              <img src={img} alt={title} className='photo' />
              <div className='item-info'>
                <header>
                  <h4>{title}</h4>
                  <h4 className='price'>${price}</h4>
                </header>
                <p className='item-text'>{desc}</p>
              </div>
            </article>
          );
      })}
    </div>
  );
};

export default Menu;
