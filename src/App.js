import { useEffect, useState } from 'react';
import Form from './components/Form';
import GlobalStyle from './GlobalStyle';
import Recipe from './pages/Recipe';

function App() {
  const APP_ID = 'c087c96c';
  const APP_KEY = 'a5220ba06d6086af8d8a01bc68e55d37';

  const [recipes, setRecipes] = useState([]);
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = response.json();
    setRecipes(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
      <GlobalStyle />
      <div>My Recipes</div>
      <Form />
      {recipes?.map((recipe) => (
        <Recipe
          title={recipe.title}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </>
  );
}

export default App;
