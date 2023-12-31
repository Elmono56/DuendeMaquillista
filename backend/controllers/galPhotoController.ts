import axios from 'axios';
class GalPhotoController {
    async addGalPhoto(route: string, data: any) {
        const response = await axios.post(route, data);
        return response.data;
    }
    async modifyGalPhoto(route: string, data: any) {
        const response = await axios.put(route, data);
        return;
    }
    async getGalPhoto(route: string, id: any) {
        const response = await axios.get(route, id);
        return response.data;
    }
    async getGalPhotos(route: string) {
        const response = await axios.get(route);
        return response;
    }
    async setimageVisibility(route: string, data: any) {
        const response = await axios.put(route, data);
        return;
    }
}
export default new GalPhotoController;