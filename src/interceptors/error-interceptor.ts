import { Injectable } from "@angular/core/";
import {HttpEvent , HttpInterceptor,HttpHandler , HttpRequest, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Observable } from "rxjs";
import { StorageService } from "../services/storage.service";
import { c } from "@angular/core/src/render3";
import { AlertController } from "ionic-angular";

@Injectable()
export class ErrorInterpector implements HttpInterceptor{

    constructor(public storage: StorageService, public alertController: AlertController){

    }

    intercept(req:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        console.log("Passou")
        return next.handle(req)
        .catch((error,caught) => {
            
            let errorObj = error;
            if(errorObj.error){
                errorObj = errorObj.error;
            }
            if (!errorObj.status){
                errorObj = JSON.parse(errorObj);
            }
            console.log("Erro detectado pelo Interpector:");
            console.log(errorObj);

            switch(errorObj.status){    
                case 401:
                    this.handle401();

                case 403:
                    this.handle403();
                    break;

                default: 
                this.handleDefaultError(errorObj);

            }


            return Observable.throw(errorObj);
        }) as any;
    }

    handle401(){
        let alert = this.alertController.create({
            title:'Erro 401 : Falha de autenticação',
            message: 'Email ou senha incorretos!',
            enableBackdropDismiss: false,
            buttons: [
                { 
                    text:'Ok'
                }
            ]
        });
        alert.present();
    }

    handle403(){
        this.storage.setLocalUser(null);

    }

    handleDefaultError(errorObj){
        let alert = this.alertController.create({
            title:'Erro: ' + errorObj.status + ':' + errorObj.error,
            message: errorObj.message,
            enableBackdropDismiss: false,
            buttons: [
                { 
                    text:'Ok'
                }
            ]
        });
        alert.present();

    }

}

export const ErrorInterpectorProvider = {

    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterpector,
    multi: true,


};