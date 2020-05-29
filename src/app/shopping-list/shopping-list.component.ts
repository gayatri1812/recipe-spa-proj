import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']

})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // public ingredients: Ingredient[] = [
  //   new Ingredient('Apple', 30),
  //   new Ingredient('Tomato', 10),
  // ];
  public ingredients: Ingredient[] = [];
  private idChanged: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.idChanged = this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  ngOnDestroy(): void {
    this.idChanged.unsubscribe();
  }
}
