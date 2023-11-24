import axios from "axios";
import { EventoAgenda } from "../AgendaDecorator/EventoAgenda";

class CommitmentController {
  async createCommitment(route: string, data: EventoAgenda) {
    const info = data.getInfo();
    console.log(info);
    if (info.type == "Maquillaje") {
      console.log(info.deadline);
      const parts = info.deadline.split("-");
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // Restar 1 porque los meses en JavaScript van de 0 a 11
      const day = parseInt(parts[2], 10);

      const dateObject = new Date(year, month, day);
      console.log(dateObject);
      let dataFormat = {
        name: info.name,
        type: info.type,
        startTime: info.startTime,
        deadline: dateObject,
        endTime: info.endTime,
        description: info.description,
        userDetail: info.userDetail,
        status: "true",
      };
      const response = await axios.post(route, dataFormat);
      return response;
    } else if (info.type == "Curso/Taller") {
      const parts = info.deadline.split("-");
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // Restar 1 porque los meses en JavaScript van de 0 a 11
      const day = parseInt(parts[2], 10);

      const dateObject = new Date(year, month, day);
      console.log(dateObject);
      let dataFormat = {
        name: info.name,
        type: info.type,
        deadline: dateObject,
        description: info.description,
        startTime: info.startTime,
        endTime: info.endTime,
        status: "true",
      };
      const response = await axios.post(route, dataFormat);
      return response;
    } else if (info.type == "Entrega") {
      const parts = info.deadline.split("-");
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // Restar 1 porque los meses en JavaScript van de 0 a 11
      const day = parseInt(parts[2], 10);

      const dateObject = new Date(year, month, day);
      console.log(dateObject);
      let dataFormat = {
        name: info.name,
        type: info.type,
        deadline: dateObject,
        userDetail: info.userDetail,
        status: "true",
      };
      const response = await axios.post(route, dataFormat);
      return response;
    }
  }
  async getCommitments(route: string) {
    const response = await axios.get(route);
    return response;
  }
  async changeVisibility(route: string, data: any) {
    const response = await axios.put(route, data);
    return response;
  }
  async updateCommitment(route: string, data: any) {
    const response = await axios.put(route, data);
    return response;
  }
}
export default new CommitmentController();
