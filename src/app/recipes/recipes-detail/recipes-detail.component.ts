import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/shared/services/recipesService/recipes.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent implements OnInit {
  recipe!: Recipe;
  id!: number;
  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe((params) => {
      this.id = +params['id'] - 1;
      this.recipe = this.recipeService.getRecipe(this.id)
    })
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe?.ingredients)
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
