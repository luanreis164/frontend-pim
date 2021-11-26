import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "../config/storage_keys.config";
import { LocalUser } from "../models/local_user";
import { ReservaDTO } from "../models/reserva.dto";

@Injectable()
export class StorageService{

    getLocalUser() : LocalUser {
        let usr = localStorage.getItem(STORAGE_KEYS.localUser);
        if(usr ==null){
            return null;
        }
        else{ 
            return JSON.parse(usr);
        }

    }


    setLocalUser(obj : LocalUser) {
        if(obj == null){
            localStorage.removeItem(STORAGE_KEYS.localUser)
        }
        else {
            localStorage.setItem(STORAGE_KEYS.localUser,JSON.stringify(obj));
        }
    }

    getReserva() : ReservaDTO {
        let usr = localStorage.getItem(STORAGE_KEYS.reserva);
        if(usr ==null){
            return null;
        }
        else{ 
            return JSON.parse(usr);
        }

    }


    setReserva(obj : ReservaDTO) {
        if(obj == null){
            localStorage.removeItem(STORAGE_KEYS.reserva)
        }
        else {
            localStorage.setItem(STORAGE_KEYS.reserva,JSON.stringify(obj));
        }
    }


}