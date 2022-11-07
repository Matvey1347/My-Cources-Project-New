import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from 'src/app/shared/services/recipesService/recipes.service';

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
    private fb: FormBuilder,
    private recipeService: RecipesService,
    ) {
    this.editResipeForm = fb.group({
      name: fb.control('', Validators.required),
      imagePath: fb.control('', Validators.required),
      description: fb.control('', Validators.required),
      number: fb.control('', Validators.required),
    })
  }

  ngOnInit(): void {
    this.route.params
    .subscribe((params: Params) => {
      this.id = +params['id'] - 1;
      this.editMode = params['id'] != null;
      this.setOurForm();
    })

  }

  setOurForm() {
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
          recipeIngredients.push(new FormGroup({
            name: this.fb.control(ingredient.name),
            amount: this.fb.control(ingredient.amount),
          }));
        }
      }
    }

    this.editResipeForm.setValue({
      name: recipeName,
      imagePath: recipeImagePath,
      description: recipeDescription,
      ingredients: recipeIngredients,
      number: ''
    })
  }

  get controls() {
    return (<FormArray>this.editResipeForm.get('ingredients'))?.controls;
  }
}
