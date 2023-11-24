import axios from "axios";

class AddressController {
  async createAddress(route: string, data: any) {
    await axios.post(route, data);
    return;
  }
  async getAddress(route: string, id: any) {
    const response = await axios.get(route, id);
    return response;
  }
}
export default new AddressController;