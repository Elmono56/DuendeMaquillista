import axios from 'axios';
class SubCatagoryGalController {
    async getSubCategoriesFromCategory(route: string, categoryName: any) {
        const response = await axios.get(route, categoryName);
        return response;
    }
}
export default new SubCatagoryGalController;