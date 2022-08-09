import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from "../../../app.model";

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css']
})
export class PizzaItemComponent implements OnInit {


  @Input()
  pizzaItem!: Pizza

  constructor() { }
  ngOnInit(): void {
  }

}
