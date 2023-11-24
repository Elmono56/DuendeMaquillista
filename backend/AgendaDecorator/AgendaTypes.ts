import { AgendaDecorator } from "./AgendaDecorator"

class EventoMaquillaje extends AgendaDecorator{
    private endTime: Date;
    private address: String;
    private description: String;
    private userDetail: Array<any>;

    constructor(pEvento: EventoAgenda, pTipo: String, pAddres: String, pEndTime: Date, pDesc: String, pUserD: Array<any>){
        super(pEvento,pTipo);
        this.address = pAddres;
        this.endTime = pEndTime;
        this.description = pDesc;
        this.userDetail = pUserD;
        this.setTipo();
    }
    
    public permitirColision():boolean{
        return false;
    }

    setTipo():void{
        this.tipo = "Servicio de Maquillaje"
    }

    getAddres():String{
        return this.address;
    }

    setAddres(pAdd: String){
        this.address = pAdd;
    }
};



class EventoTaller extends AgendaDecorator{
    private addres: String;

    constructor(pEvento: EventoAgenda, pTipo: String, pAddres: String){
        super(pEvento,pTipo);
        this.addres = pAddres;
        this.setTipo();
    }

    public permitirColision():boolean{
        return true;
    }

    setTipo():void{
        this.tipo = "Taller"
    }
};


class EventoPedido extends AgendaDecorator{

    private description: String; //numPedido
    private userDetail: Array<any>;
    private deadline: Date;

    constructor(pEvento: EventoAgenda, pTipo: String, pDesc: String, pUserD: Array<any>, pDeadL: Date){
        super(pEvento,pTipo);
        this.description = pDesc;
        this.userDetail = pUserD;
        this.deadline = pDeadL;
        this.setTipo();
    }

    public permitirColision():boolean{
        return true;
    }

    setTipo():void{
        this.tipo = "Alistar Pedido"
    }
};