import "./EventoAgenda"

class AgendaConcrete implements EventoAgenda {
    name: String;
    deadLine: Date;
    status: String;
    startTime: String;

    constructor(pName: String, pDeadLine: Date, pStatus: String, pStartTime: String, ){
        this.name = pName;
        this.deadLine = pDeadLine;
        this.status = pStatus;
        this.startTime = pStartTime;
    };
    
    public getInfo(): String {
        return ("Nombre del evento: " + this.name + " Estado del evento: " + this.status)
    }
;
  }