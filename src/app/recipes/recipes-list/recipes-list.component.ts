import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/shared/services/recipesService/recipes.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] | undefined;
  array = [
    {
      name: 'string',
      amount: '1233',
      reason: 'lorem ejdj jdwoijweo',
    },
    {
      name: 'number',
      amount: '4444',
      reason: 'lorem ejdj jdwoijweo',
    }
    ,{
      name: 'string',
      amount: '5555',
      reason: 'lorem ejdj jdwoijweo',
    }
    ,{
      name: 'string',
      amount: '9999',
      reason: 'lorem ejdj jdwoijweo',
    },
  ];
  filterString?: string;

  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.recipesService
    .recipesChanged
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipesService.getRecipes();
  }

  addRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  onAddSomething() {
    this.array.push(
      {
        name: 'string',
        amount: '1233',
        reason: 'lorem ejdj jdwoijweo',
      }
    )
  }
}