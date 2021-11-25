import { RefDTO } from "./ref.dto";

export interface ReservaDTO{

    id: number;
    dataReserva: string;
    dataSaida: string;
    tempoEstadia: number;
    valor: number;
    cliente: RefDTO;
    pagamento: RefDTO;
    quarto: RefDTO;



}