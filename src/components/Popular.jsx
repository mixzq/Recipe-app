import React, { useEffect, useState } from "react";

function Popular() {
  useEffect(() => {
    getPopular();
  }, []);

  const [Popular, setPopular] = useState();
  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );

    const data = await api.json();
    console.log(data);
    setPopular(data.recipes);
  };

  return (
    <div>
      <h1>Popular</h1>
      {Popular &&
        Popular.map((recipe) => {
          return (
            <div key={recipe.id}>
              <p>{recipe.title}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Popular;
