import React from "react";
import recipes from "../recipeData";
import RecipePreview from "./recipePreview";

export default function Home() {
    return (
        <div>
            {recipes.map(recipe =>
                <RecipePreview {...recipe}/>    
            )}
        </div>
    );
}