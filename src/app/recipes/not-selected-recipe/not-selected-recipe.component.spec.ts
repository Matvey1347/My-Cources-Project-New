import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotSelectedRecipeComponent } from './not-selected-recipe.component';

describe('NotSelectedRecipeComponent', () => {
  let component: NotSelectedRecipeComponent;
  let fixture: ComponentFixture<NotSelectedRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotSelectedRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotSelectedRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
