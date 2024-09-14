export interface IRecipe {
  ID: number;
  title: string;
  instructions: string;
  ingredients: IIngredient[];
  image: string;
}

export type IIngredient = {
  ID: string;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string;
  name: string;
  recipes: null;
};
