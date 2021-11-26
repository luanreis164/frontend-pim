import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../../config/api.config";
import { ReservaDTO } from "../../models/reserva.dto";
import { StorageService } from "../storage.service";


@Injectable()
export class ReservaService{

    constructor(public storage: StorageService,public http: HttpClient){
    }

    insert(obj: ReservaDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/reservas`,
            obj,
            {
                observe:'response',
                responseType: 'text'
            }
        );
    }

}