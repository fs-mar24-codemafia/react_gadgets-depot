import { Product } from "../types/Product";
import { ProductDetailed } from "../types/ProductDetailed";
import { getData } from "../utils/httpClient";

const getAllProducts = () => {
  return getData<Product[]>("/products.json");
}

const getPhones = () => {
  return getData<ProductDetailed[]>("/phones.json");
}

const getTablets = () => {
  return getData<ProductDetailed[]>("/tablets.json");
}

const getAccessories = () => {
  return getData<ProductDetailed[]>("/accessories.json");
}

export const service = {
  getAllProducts,
  getPhones,
  getTablets,
  getAccessories,
}
