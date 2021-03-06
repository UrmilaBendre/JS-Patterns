module Westeros.Food{
  export interface IIngredient{
    GetName(): string;
    GetCalories():number;
    GetIronContent():number;
    GetVitaminCContent():number;
  }

  export class SimpleIngredient{

    constructor(public name, public calories, public ironContent, public vitaminCContent){}
    GetName(): string
    {
      return this.name;
    }
    GetCalories():number{
      return this.calories;
    }
    GetIronContent():number{
      return this.ironContent;
    }
    GetVitaminCContent():number
    {
      return this.vitaminCContent;
    }
  }

  export class CompoundIngredient{

    ingredients:IIngredient[] = new Array();
    constructor(public name){

    }

    AddIngredient(ingredient:IIngredient)
    {
      this.ingredients.push(ingredient);
    }

    GetName(): string{
      return this.name;
    }
    GetCalories():number{
      var total = 0;
      for(var i = 0; i< this.ingredients.length; i++)
      {
        total+=this.ingredients[i].GetCalories();
      }
      return total;
    }
    GetIronContent():number{
      var total = 0;
      for(var i = 0; i< this.ingredients.length; i++)
      {
        total+=this.ingredients[i].GetIronContent();
      }
      return total;
    }
    GetVitaminCContent():number{
      var total = 0;
      for(var i = 0; i< this.ingredients.length; i++)
      {
        total+=this.ingredients[i].GetVitaminCContent();
      }
      return total;
    }
  }
}

var egg = new Westeros.Food.SimpleIngredient("Egg", 155, 6, 0);
var milk = new Westeros.Food.SimpleIngredient("Milk", 42, 0, 0);
var sugar = new Westeros.Food.SimpleIngredient("Sugar", 387, 0,0);
var rice = new Westeros.Food.SimpleIngredient("Rice", 370, 8, 0);

var ricePudding = new Westeros.Food.CompoundIngredient("Rice Pudding");
ricePudding.AddIngredient(egg);
ricePudding.AddIngredient(rice);
ricePudding.AddIngredient(milk);
ricePudding.AddIngredient(sugar);

console.log("A serving of rice pudding contains:");
console.log(ricePudding.GetCalories() + " calories");