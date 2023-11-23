import { AgendaDecorator } from "./AgendaDecorator"

class EventoMaquillaje extends AgendaDecorator{
    //endTime: Date;
    
    public permitirColision():boolean{
        return false;
    }

    setTipo():void{
        this.tipo = "Servicio de Maquillaje"
    }

    //setEndTime(pET: Date):void{
     //   this.endTime = pET,
    //}
};



class EventoTaller extends AgendaDecorator{

    public permitirColision():boolean{
        return true;
    }

    setTipo():void{
        this.tipo = "Taller"
    }
};


class EventoPedido extends AgendaDecorator{

    public permitirColision():boolean{
        return true;
    }

    setTipo():void{
        this.tipo = "Alistar Pedido"
    }
};