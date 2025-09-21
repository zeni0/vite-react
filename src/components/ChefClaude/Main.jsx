import { useState, useEffect, useRef } from "react"
import ReactMarkdown from "react-markdown"
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import recipeCode from "../../recipeMarkdown.md?raw"
import { getRecipeFromMistral } from "../../ai"

export default function Main() {
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState("");
    const recipeSection = useRef(null)

    function addIngredientSubmit(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        console.log(ingredients)
    }

    async function getRecipe() {
        //setRecipe(recipeCode);
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
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
