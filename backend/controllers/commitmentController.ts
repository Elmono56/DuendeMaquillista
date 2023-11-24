import axios from "axios";

class CommitmentController{
  async createCommitment(route: string, data: any){
    const response = await axios.post(route, data);
    return response;
  }
  async getCommitments(route: string){
    const response = await axios.get(route);
    return response;
  }
  async changeVisibility(route: string, data: any){
    const response = await axios.put(route, data);
    return response;
  }
  async updateCommitment(route: string, data: any){
    const response = await axios.put(route, data);
    return response;
  }
}
export default new CommitmentController;