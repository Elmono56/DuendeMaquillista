import axios from "axios";
class ShopCartController {
  async updateShopCart(route: string, data: any) {
    const response = await axios.post(route, data);
    return response;
  }
  async getShopCart(route: string, id: any) {
    const response = await axios.get(route, id);
    return response;
  }
}
export default new ShopCartController();
