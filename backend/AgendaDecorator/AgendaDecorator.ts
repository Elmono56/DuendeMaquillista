import "./EventoAgenda"

export abstract class AgendaDecorator implements EventoAgenda {
    protected evento: EventoAgenda
    protected tipo: String;

    constructor(pEvento: EventoAgenda, pTipo: String){
        this.evento = pEvento,
        this.tipo = pTipo
    }
    public getInfo(): String {
        return this.evento.getInfo();
    }

    public permitirColision():boolean{
        return true;
    }
  }
