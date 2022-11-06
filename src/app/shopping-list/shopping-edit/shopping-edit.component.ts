import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingredients } from 'src/app/shared/ingredients/ingredients.model';
import { ShoppingListService } from 'src/app/shared/services/shoppingListService/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  addItemForm: FormGroup;
  editMode = false;
  editedItemIndex?: any;
  editedItem?: Ingredients;

  constructor(private shoppingService: ShoppingListService, private fb: FormBuilder) {
    this.addItemForm = fb.group({
      name: fb.control('', Validators.required),
      amount: fb.control('', [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')]),
    })
  }

  ngOnInit(): void {
    this.shoppingService
    .startedEditing
    .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingService.getIngredient(index);
        this.addItemForm.setValue({
          name: this.editedItem?.name,
          amount: this.editedItem?.amount
        })
      }
    )
  }

  onSubmit() {
    const newIngredient = new Ingredients(
      this.addItemForm.value.name, 
      this.addItemForm.value.amount
    );
    if(this.editMode) {
      this.shoppingService.updateIngredient(this.editedItemIndex, newIngredient);
      this.editMode = false;
    } else {
      this.shoppingService.addIngredient(newIngredient);
    }
    this.addItemForm.reset();
  }

  onClear() {
    this.addItemForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}
