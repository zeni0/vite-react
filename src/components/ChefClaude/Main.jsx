import { useState, useEffect, useRef } from "react"
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";

export default function Main() {
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState("");
    const recipeSection = useRef(null)

    function addIngredientSubmit(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        //console.log(ingredients)
    }

    function getRecipe() {
        //setRecipe(recipeCode);
        const data = {
            ingredientsArr: ingredients,
        };
        fetch('https://vite-react-six-ebon-69.vercel.app/api/hf', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setRecipe(data.recipe)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            
    }

    useEffect(() => {
        if ( recipeSection.current && recipe ) {
            recipeSection.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [recipe])

    return (
        <main className="chef-claude-page">
            <section>
                <form action={addIngredientSubmit} className="add-ingredient-form">
                    <input
                        type="text"
                        aria-label="Add ingredient"
                        placeholder="e.g. Tomato"
                        name="ingredient" 
                    />
                    <button>Add ingredient</button>
                </form>
                
                {ingredients.length > 0 &&
                    <IngredientsList 
                        ingredients={ingredients}
                        ref={recipeSection}
                        getRecipe={getRecipe}
                    />
                }

                {recipe && <ClaudeRecipe recipe={recipe} />}
            </section>
        </main>
    );
}
