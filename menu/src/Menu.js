import React from 'react';
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'

const Menu = ({food}) => {
    return (
        <>
          {food.map((menuItem)=>{
            const {id, title, price, img, desc}=menuItem;
          
            return (
              <article key={id} className="menu-item">
                  <div>
                    <img className="photo" src={img} alt={title}/>
                  </div>
                <div>
                  <div>
                    <header className="item-info" style={{ display: "flex", justifyContent: "space-between" }}>
                      <h4 className="item-info">{title}</h4>
                      <h4 className="price">${price}</h4>
                    </header>
                    <Divider/>
                  </div>
                  <body className="item-text">{desc}</body>
                </div>
            </article>
            );

          })}

          
        </>
      );
};

export default Menu;