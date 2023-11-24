import axios from  'axios';
class ProductController{
    async addProduct(route: string, data: any){
        const response = await axios.post(route, data);
        return response;
    }
    async getProductById(route: string, id: any){
        const response = await axios.get(route, id);
        return response;
    }
    async modifyProduct(route: string, data: any){
        const response = await axios.put(route, data);
        return response;
    }
    async getProduct(route: string, data: any){
        const response = await axios.get(route, data);
        return response;
    }
    async getProducts(route: string){
        const response = await axios.get(route);
        return response;
    }
    async setProductVisible(route: string, data: any){
        const response = await axios.put(route, data);
        return;
    }
}
export default new ProductController;