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

}
export default new UserController();
