import { EventoAgenda } from "./EventoAgenda"

class AgendaConcrete implements EventoAgenda {
    name: string;
    deadline: string;
    status: string;

    constructor(pName: string, pDeadLine: string, pStatus: string){
        this.name = pName;
        this.deadline = pDeadLine;
        this.status = pStatus;
    };
    
    public getInfo(): Record<string, any> {
        return {name: this.name, deadLine: this.deadline, status: this.status};
    }
;
}
export {AgendaConcrete}