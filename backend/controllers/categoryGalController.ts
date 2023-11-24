import axios from 'axios';
class CategoryGalController{
  async getCategories(route: string) {
    const response = await axios.get(
      route
    );
    return response;
  };
  async createCategory(route: string, data: any) {
    const response = await axios.post(
      route,
      data
    );
    return;
  };
}
export default new CategoryGalController;
