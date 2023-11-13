import axios from 'axios';
class UserController{
    async login(route: string, email: string, password: string){
        try{
            const response = await axios.post(route,{
                email, password
            });
            const {type, user} = response.data;
            return type;
        }
        catch(error: any){
            return error.response.data.message;
        }
    }

}
export default new UserController();
