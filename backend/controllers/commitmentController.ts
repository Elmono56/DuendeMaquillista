import axios from "axios";
import { EventoAgenda } from "../AgendaDecorator/EventoAgenda";

function convertToDateObject(dateString: string): Date {
  console.log(dateString);
  const [year, month, day] = dateString.match(/\d+/g)!.map(Number);
  return new Date(year, month - 1, day);
}

class CommitmentController {
  async createCommitment(route: string, data: EventoAgenda) {
    const info = data.getInfo();
    console.log(typeof info.type);
    if (info.type == "Maquillaje") {
      const dateObject = convertToDateObject(info.deadline);
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
      const dateObject = convertToDateObject(info.deadline);
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
      const dateObject = convertToDateObject(info.deadline);
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
