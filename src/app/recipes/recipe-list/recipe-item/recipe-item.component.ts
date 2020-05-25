import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() public recipe: Recipe;
  @Output() public recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public onSelected() {
    this.recipeSelected.emit();
  }
}
