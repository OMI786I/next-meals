import React from "react";
import classes from "../../app/meals/meals-grid.module.css";
import MealItem from "./MealItem";
const MealsGrid = ({ meals }) => {
  console.log(meals);
  return (
    <div className="">
      <ul className={classes.meals}>
        {meals.map((meal) => (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealsGrid;
