import axios from 'axios';
class UserController{
    async login(route: string, email: string, password: string){
        try{
            const response = await axios.post(route,{
                email: email, password: password
            });
            const { type, user } = response.data;
            console.log(response.data)
            return response.data;
        }
        catch(error: any){
            console.log("Error: ");
            return error;
        }
    }
    async register(route: string, data: any){
        try {
            const response = await axios.post(route, data);
            console.log(response);
            return true;
          } catch (error: any) {
            console.log(error);
            return false;
          }
    }
    async updateUser(route: string, data: any){
        const response = await axios.put(route, data);
        return response;
    }
    async getUser(route: string, id: any){
        try{
            const response = await axios.get(route, id);
            return response.data;
        }
        catch(error: any){
            return error;
        }


    }
    async validateAccess(route: string, data: any){
        try{
            const response = await axios.post(route,{
                email: data.email, password: data.currentPassword
            });
            const { type, user } = response.data;
            console.log(response.data)
            return response.status;
        }
        catch(error: any){
            console.log("Error: ", error.response.status);
            return error.response.status;
        }
    }

}
export default new UserController();
