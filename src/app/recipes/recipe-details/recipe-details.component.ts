import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  public recipeSelected: Recipe;
  public id: number;

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.recipeSelected = this.recipeService.getRecipe(this.id);
    });
  }

  public onAddToList(): void {
    this.recipeService.addIngredientsToList(this.recipeSelected.ingredients);
  }

  public onEditRecipe() {
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
    // we are going one level back to recipes, then passing id and then edit in the url
    //  this.router.navigate(['edit'], { relativeTo: this.route });
  }

  public onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
