import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservaDTO } from '../../models/reserva.dto';
import { ClienteService } from '../../services/domain/cliente.service';
import { ReservaService } from '../../services/domain/reserva.service';
import { StorageService } from '../../services/storage.service';


@IonicPage()
@Component({
  selector: 'page-reservas',
  templateUrl: 'reservas.html',
})
export class ReservasPage {
  
  item : ReservaDTO;

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public formBuilder: FormBuilder,
     public clienteService: ClienteService,
     public alertCtrl: AlertController,
     public reservaService: ReservaService,
     ) 
     {
  }

  ionViewDidLoad() {
    this.item ={
        id: 1,
        dataReserva: "22/12/2021 22:30:00",
        dataSaida: "25/11/2021 14:37:00",
        tempoEstadia: 35,
        valor:1221,
        cliente: {
            id: "1",
            nome: "Fulano",
            email: "luanreis2202@gmail.com",
            cpf: "78588738066",
            rua: "Rua Anchieta",
            bairro: "Vila Mirim",
            numero: "5217",
            cep: "11332330",
            cidade: "Praia Grande",
            estado: "São Paulo",
            telefone: "13996735588",
            rg: "556481550",
            dataNasc: "22/02/1999",
        },
        pagamento: {
            
            numeroDeParcelas: 3,
            "@type": "pagamentoComCartao"
        },
        quarto: {
	    id:1,
            numero: 11,
            andar: 1,
            categoria_id:1
        }
       
      }
    

  }


  showInsertOk(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso',
      message: 'Reserva efetuada com sucesso!',
      enableBackdropDismiss: false,
      buttons: [
        {
          text:'Ok',
          handler:() => {
            this.navCtrl.pop();
          }
        }
      ]


    });
    alert.present();

  }

}
