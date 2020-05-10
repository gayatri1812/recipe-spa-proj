import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Ingredient[] = [
    new Ingredient('Apple', 30),
    new Ingredient('Tomato', 10),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
