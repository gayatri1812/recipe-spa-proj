import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is to test', '../../../../assets/Potateese.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.recipes[0].imagePath);
  }

}
