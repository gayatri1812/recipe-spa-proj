import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent implements OnInit {
  @Output() recipeInitialSelected = new EventEmitter<Recipe>();
  public recipes: Recipe[] = [
    new Recipe('Potateese Recipe', 'This is the potateese recipe.', '../../../../assets/Potateese.jpg'),
    new Recipe('Spechizza Recipe', 'This is the spechizza recipe.', '../../../../assets/Spechizza.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {

  }

  public onRecipeSelected(recipeElement: Recipe) {
    this.recipeInitialSelected.emit(recipeElement);
  }
}
