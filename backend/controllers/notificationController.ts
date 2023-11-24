import axios from "axios";

class NotificationController{
  async createNotification(route: string, data: any){
    await axios.post(route, data);
    return;
  }
  async getNotifications(route: string, id: any){
    const response = await axios.get(route, id);
    return response;
  }
}
export default new NotificationController;