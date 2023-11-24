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
  async changeSCstatus(route: string, data: any) {
    await axios.put(route, data);
    return;
  }
}
export default new ShopCartController();
