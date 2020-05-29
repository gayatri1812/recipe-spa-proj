import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {

    public ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 30),
        new Ingredient('Tomato', 10),
    ];

    public getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    public addIngredient(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    public addIngredientsFromRecipe(ingredients: Ingredient[]): void {
        // for (const ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
