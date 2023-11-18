import axios from 'axios';
class GalPhotoController {
  async getGalPhoto(route: string, id: any) {
    const response = await axios.get(route, id);
    return response.data;
  }
}
export default new GalPhotoController;