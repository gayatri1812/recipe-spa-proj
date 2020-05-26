import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipeSelected: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  public onAddToList(): void{
    this.recipeService.addIngredientsToList(this.recipeSelected.ingredients);
  }

}
