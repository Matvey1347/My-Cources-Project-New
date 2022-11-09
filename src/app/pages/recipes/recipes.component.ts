import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PlaceholderDirective } from 'src/app/shared/directives/placeholder/placeholder.directive';
import { CustomeValidators } from '../../shared/custome-validators/custome-validators';
import { SuccessAlertComponent } from '../success-alert/success-alert.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  @ViewChild(PlaceholderDirective) alertHost? : PlaceholderDirective;
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private componentFactoryResolve: ComponentFactoryResolver
    ) {
    this.myForm = this.fb.group({
      name: this.fb.control('hello', [Validators.required, CustomeValidators.invalidInput])
    })
  }

  ngOnInit(): void {
    
  }

  onShowSuccessMessage() {
    const alertSuccess = this.componentFactoryResolve.resolveComponentFactory(
        SuccessAlertComponent
      );

      const hostViewContainerRef = this.alertHost?.viewContainer;
      console.log(this.alertHost);
      
      const componentRef: any = hostViewContainerRef?.createComponent(alertSuccess);

      componentRef.instance.message = 'BBOY LOX'
  }

}
