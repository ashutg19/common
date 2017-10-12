import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';


import { Ingredient } from '../../shared/ingredient.model'
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName') nameInput: ElementRef
  @ViewChild('inputAmount') amountInput: ElementRef

  @Output() ingredientsAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addShop() {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    const ingr = new Ingredient(name, amount);
    this.ingredientsAdded

      .emit(ingr);

  }

}
