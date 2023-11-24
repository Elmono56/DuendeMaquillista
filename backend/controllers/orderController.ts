import axios from "axios";

class OrderController{
  async createOrder(route: string, data: any){
    const response = await axios.post(route, data);
    return response;
  }
  async getOrders(route: string){
    const response = await axios.get(route);
    return response;
  }
  async getOrder(route: string, id: any){
    const response = await axios.get(route, id);
    return response;
  }
  async getOrdersByUser(route: string, id: any){
    const response = await axios.get(route, id);
    return response;
  }
  async updateOrderStatus(route: string, data: any){
    const response = await axios.put(route, data);
    return response;
  }
}
  export default new OrderController;