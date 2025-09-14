import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function IngredientPage({recipe}) {
    const navigate = useNavigate();
    const backHandler = () => {
        navigate(-1);
    }
   
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 p-3 border-b">
        <span onClick={backHandler} className="text-xl font-bold cursor-pointer">←</span>
        <h2 className="text-lg font-semibold">Ingredient list</h2>
      </div>

      {/* Recipe Info */}
      <div className="flex gap-3 p-4 border-b">
        <div className="flex-1">
          <h3 className="text-lg font-bold">{recipe.title}</h3>
          <p className="text-sm text-gray-600">{recipe.description}</p>
        </div>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-24 h-24 rounded-md object-cover"
        />
      </div>

      {/* Ingredients */}
      <div className="p-4">
        <h4 className="font-bold text-gray-800">Ingredients</h4>
        <p className="text-sm text-gray-600 mb-2">
          For 2 people
        </p>
        <hr className="mb-2" />
        <ul className="space-y-2">
          {recipe.ingredients.map((item, idx) => (
            <li
              key={idx}
              className="flex justify-between text-gray-800 border-b pb-1"
            >
              <span>{item.name}</span>
              <span>{item.qty}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

