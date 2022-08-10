import React from 'react';
import Button from '@mui/material/Button'

const Categories = () => {
  return (
    <div className=".btn-container" align="Center">
       <Button className="filter-btn">All</Button> 
       <Button className="filter-btn">Breakfast</Button> 
       <Button className="filter-btn">Lunch</Button> 
       <Button className="filter-btn">Shakes</Button> 
       
    </div>
  );
};

export default Categories;