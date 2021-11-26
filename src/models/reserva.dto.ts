import { ClienteDTO } from "./cliente.dto";
import { PagamentoDTO } from "./pagamento.dto";
import { QuartoDTO } from "./quarto.dto";

export interface ReservaDTO{

    id: number;
    dataReserva: string;
    dataSaida: string;
    tempoEstadia: number;
    valor: number;
    cliente: ClienteDTO;
    pagamento: PagamentoDTO;
    quarto: QuartoDTO;



}