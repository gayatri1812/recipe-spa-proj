import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Potateese Recipe', 'This is the potateese recipe.', '../../../../assets/Potateese.jpg', [
            new Ingredient('Potato', 2),
            new Ingredient('Cheese', 1)
        ]),
        new Recipe('Spechizza Recipe', 'This is the spechizza recipe.', '../../../../assets/Spechizza.jpg', [
            new Ingredient('Spinach', 2),
            new Ingredient('Cheese', 1)
        ]),
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    public getRecipes(): Recipe[] {
        return this.recipes.slice(); // to get copy of actual array
    }

    public getRecipe(id: number): Recipe {
        return this.recipes[id];
    }

    public addIngredientsToList(ingredients: Ingredient[]): void {
        this.shoppingListService.addIngredientsFromRecipe(ingredients);
    }
}
