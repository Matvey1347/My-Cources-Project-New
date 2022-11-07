import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipesService } from 'src/app/shared/services/recipesService/recipes.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
id: any;
editMode = false;
editResipeForm: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private recipeService: RecipesService,
    ) {
    
  }

  ngOnInit(): void {
    this.route.params
    .subscribe((params: Params) => {
      this.id = +params['id'] - 1;
      this.editMode = params['id'] != null;
    })
    this.initForm();

  }

  initForm() {
    const recipe = this.recipeService.getRecipe(this.id)
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);
    if(this.editMode) {
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']) {
        for(let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup(
              {
                name: this.fb.control(ingredient.name),
                amount: this.fb.control(ingredient.amount),
              }
            )
          );
        }
      }
    }

    const fb = this.fb;
    this.editResipeForm = fb.group({
      name: fb.control(recipeName, Validators.required),
      description: fb.control(recipeDescription, Validators.required),
      imagePath: fb.control(recipeImagePath, Validators.required),
      ingredients: recipeIngredients,
    })
  }

  get controls() {
    return (<FormArray>this.editResipeForm.get('ingredients'))?.controls;
  }

  onAddIngredient() {
    (<FormArray>this.editResipeForm.get('ingredients')).push(
      new FormGroup({
        name: this.fb.control(''),
        amount: this.fb.control(''),
      })
    )
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.editResipeForm.get('ingredients')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  onSubmit() {
    if(this.editMode) {
      this.recipeService.updateRecipe(this.id, this.editResipeForm.value)
    } else {
      this.recipeService.addRecipe(this.editResipeForm.value)
    }
    this.onCancel();
  }
}
