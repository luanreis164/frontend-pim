import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { QuartoDTO } from "../../models/quarto.dto";

@Injectable()
export class QuartoService{

constructor(public http: HttpClient){
}

    findByCategoria(categoria_id: number){
       
        return this.http.get(`${API_CONFIG.baseUrl}/quartos/busca/?numero=&categoria=${categoria_id}`);
    }


    findById(categoria_id: number){
        return this.http.get<QuartoDTO>(`${API_CONFIG.baseUrl}/quartos/${categoria_id}`);
    }


}

