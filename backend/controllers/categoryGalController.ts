import axios from 'axios';
class CategoryGalController{
  async getCategories(route: string) {
    const response = await axios.get(
      route
    );
    return response;
  }
}
export default new CategoryGalController;
