import axios from "axios";

class SubCategoryShopController {
  async getShopSubCategoriesFromCategory(route: string, categoryName: any) {
    const response = await axios.get(route, categoryName);
    return response;
  }
  async createShopSubCategory(route: string, data: any) {
    const response = await axios.post(route, data);
    return;
  }
  async getShopSubCategories(route: string) {
    const response = await axios.get(route);
    return response;
  }
}

export default new SubCategoryShopController();
