import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs';
import { RecipesService } from 'src/app/shared/services/recipesService/recipes.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent implements OnInit {
  recipe!: Recipe;
  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe((params) => {
      this.recipe = this.recipeService.getRecipe(+params['id'] - 1)
    })
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe?.ingredients)
  }
}
