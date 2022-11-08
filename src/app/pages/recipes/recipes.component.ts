import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomeValidators } from '../../shared/custome-validators/custome-validators';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: this.fb.control('hello', [Validators.required, CustomeValidators.invalidInput])
    })
  }

  ngOnInit(): void {
    
  }

}
