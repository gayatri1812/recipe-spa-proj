import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from './../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' }) // Alternative to add it in providers in appModule
export class DataStorageService {
        constructor(private httpClient: HttpClient,
                    private recipeService: RecipeService) {
        }

        public storeRecipes() {
                const recipes = this.recipeService.getRecipes();
                this.httpClient.put('https://recipe-spa-178c8.firebaseio.com/recipes.json', recipes)
                        .subscribe(response => {
                                console.log(response);
                        });
        }

        public fetchRecipes() {
               return this.httpClient.get<Recipe[]>('https://recipe-spa-178c8.firebaseio.com/recipes.json')
                .pipe(map((recipes) => {
                        return recipes.map(recipe => {
                           return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
                        });
                }),
                tap((recipes: Recipe[]) => {
                        this.recipeService.setRecipes(recipes);
                }));
        }
}
