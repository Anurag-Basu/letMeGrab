import { ProductsType } from "../../../types";

export const createDataSource = (data: ProductsType[]) => {
  const dataToReturn = data.map((row) => {
    return {
      key: row.id,
      name: row?.title,
      price: row?.price,
      description: row.description,
      category: row?.category,
    };
  });
  return dataToReturn;
};
