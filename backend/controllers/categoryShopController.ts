import axios from "axios";

class CategoryShopController {
  async getShopCategories(route: string) {
    const response = await axios.get(route);
    return response;
  }
  async createShopCategory(route: string, data: any) {
    const response = await axios.post(route, data);
    return;
  }
}

export default new CategoryShopController;