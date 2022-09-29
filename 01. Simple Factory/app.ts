import { CoffeeType, IngredientType } from "./coffee.enum";

class Coffee {
  public static Create(coffeType: CoffeeType) {
    const CoffeeTypeReflect = {};
    if (!Reflect.has(CoffeeTypeReflect, coffeType)) {
      
    }
    switch (coffeType) {
      case CoffeeType.Americano:
        return this.NewAmericano();
      case CoffeeType.Cappucino:
        return this.NewCappucino();
      //   case CoffeType.Espresso:
      //     return NewEspresso();
      //   case CoffeType.FlatWhite:
      //     return NewFlatWhite();
      //   case CoffeType.Latte:
      //     return NewLatte();
      //   case CoffeType.Macchiato:
      //     return NewMacchiato();
      //   case CoffeType.Mocha:
      //     return NewMocha();
      default:
        throw new Error("Unknown Coffee Type");
    }
  }

  private static NewAmericano() {
    var coffeeParams = new Array();
    coffeeParams.push(new this.Parameters(IngredientType.Espresso, 1, 1));
    return this.Coffee(coffeeParams);
  }
  private static NewCappucino() {
    var coffeeParams = new Array();
    coffeeParams.push(new this.Parameters(IngredientType.MilkFoam, 1, 1));
    return this.Coffee(coffeeParams);
  }
  private static Coffee(parameters: object[]) {
    return parameters;
  }
  private static Parameters = class {
    public IngredientType: IngredientType;
    public Count: number;
    public Order: number;
    constructor(IngredientType: IngredientType, Count: number, Order: number) {
      this.IngredientType = IngredientType;
      this.Count = Count;
      this.Order = Order;
    }
  };
}

const myMorningCoffee = Coffee.Create(CoffeeType.Americano);
console.log(myMorningCoffee);
console.log(myMorningCoffee);
