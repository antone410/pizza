import { Component } from '@angular/core';
import {Ingredients, Pizza} from "../../app.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  pizzaList: Pizza[] = [
    {
      id: 0,
      title: 'Chicken',
      cost: 520,
      ingredients: [Ingredients.Chicken, Ingredients.Mozzarella, Ingredients.Tomatoes, Ingredients.Onion],
      size: {
        std: 810,
        lg: 1210,
      }
    },
    {
      id: 1,
      title: 'Custom',
      cost: 600,
      ingredients: [Ingredients.Mozzarella, Ingredients.Tomatoes, Ingredients.Onion, Ingredients.Mushrooms,],
      size: {
        std: 810,
        lg: 1210,
      }
    }
  ]

  constructor() { }


}
