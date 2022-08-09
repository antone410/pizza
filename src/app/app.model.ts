

export interface Pizza {
  id: number,
  title: string,
  ingredients: Ingredients[],
  cost: number
  size: PizzaSize
}

export enum Ingredients {
  Cheese = 'CHEESE',
  Tomatoes = 'TOMATOES',
  Mushrooms = 'MUSHROOMS',
  Chicken = 'CHICKEN',
  WhiteSauce = 'WHITE_SAUCE',
  Mozzarella = 'MOZZARELLA',
  Onion = 'ONION'
}


export interface PizzaSize {
  std: number,
  lg: number
}

export interface Drink {
  id: number,
  title: string,
  cost: number,
  size: number,
}


