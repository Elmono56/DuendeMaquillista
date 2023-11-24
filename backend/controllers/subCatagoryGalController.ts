import axios from 'axios';
class SubCatagoryGalController {
    async getSubCategoriesFromCategory(route: string, categoryName: any) {
        const response = await axios.get(route, categoryName);
        return response;
    };
    async createSubCategory(route: string, data: any) {
        const response = await axios.post(route, data);
        return;
    };
    async getSubCategories(route: string) {
        const response = await axios.get(route);
        return response;
    };
}
export default new SubCatagoryGalController;