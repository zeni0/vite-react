
export default function IngredientsList(props) {

    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul>
                {ingredientsListItems}
            </ul>
            {props.ingredients.length > 3 && 
            <div className="get-recipe-container">
                <div ref={props.ref}>
                    <h2>Ready to get a recipe?</h2>
                    <p>Click the button below to get a recipe based on your ingredients!</p>
                </div>
                <button onClick={props.getRecipe} className="get-recipe-button">Get Recipe</button>
            </div>}
        </section>
    );
}