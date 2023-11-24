import { AgendaDecorator } from "./AgendaDecorator"
import { EventoAgenda } from "./EventoAgenda"

class EventoMaquillaje extends AgendaDecorator{
    private startTime: String;
    private endTime: String;
    private description: String;
    private userDetail: Array<any>;

    constructor(pEvento: EventoAgenda, pTipo: String, pStartTime: String, pEndTime: String, pDesc: String, pUserD: Array<any>){
        super(pEvento,pTipo);
        this.startTime = pStartTime;
        this.endTime = pEndTime;
        this.description = pDesc;
        this.userDetail = pUserD;
        this.setTipo();
    }
    
    public permitirColision():boolean{
        return false;
    }

    public getInfo(): Record<string, any> {
        const generalInfo = this.evento.getInfo(); // Información general del evento
        const maquillajeInfo = {
            type: this.tipo,
            startTime: this.startTime,
            endTime: this.endTime,
            description: this.description,
            userDetail: this.userDetail,
        };
        return { ...generalInfo, ...maquillajeInfo };
    }

    setTipo():void{
        this.tipo = "Maquillaje"
    }
};



class EventoTaller extends AgendaDecorator{
    private startTime: String;
    private endTime: String;
    private description: String;

    constructor(pEvento: EventoAgenda, pTipo: String, pStartTime: String, pEndTime: String, pDesc: String){
        super(pEvento,pTipo);
        this.setTipo();
        this.startTime = pStartTime;
        this.endTime = pEndTime;
        this.description = pDesc;
    }

    public permitirColision():boolean{
        return true;
    }

    public getInfo(): Record<string, any> {
        const generalInfo = this.evento.getInfo(); // Información general del evento
        const tallerInfo = {
            type: this.tipo,
            startTime: this.startTime,
            endTime: this.endTime,
            description: this.description,
        };
        return { ...generalInfo, ...tallerInfo };
    }

    setTipo():void{
        this.tipo = "Curso/Taller"
    }
};


class EventoPedido extends AgendaDecorator{
    private userDetail: Array<any>;

    constructor(pEvento: EventoAgenda, pTipo: String, pUserD: Array<any>,){
        super(pEvento,pTipo);
        this.userDetail = pUserD;
        this.setTipo();
    }

    public permitirColision():boolean{
        return true;
    }

    public getInfo(): Record<string, any> {
        const generalInfo = this.evento.getInfo(); // Información general del evento
        const pedidoInfo = {
            type: this.tipo,
            userDetail: this.userDetail,
        };
        return { ...generalInfo, ...pedidoInfo };
    }

    setTipo():void{
        this.tipo = "Entrega"
    }
};

export {EventoMaquillaje, EventoTaller, EventoPedido}