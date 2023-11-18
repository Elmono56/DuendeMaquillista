import axios from  'axios';
class ProductController{
    async getProductById(route: string, id: any){
        const response = await axios.get(route, id);
        return response.data;
    }
}
export default new ProductController;