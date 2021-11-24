import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteService } from '../../services/domain/cliente.service';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public formBuilder: FormBuilder,
     public clienteService: ClienteService,
     public alertCtrl: AlertController,
     ) {  
       this.formGroup = formBuilder.group({
        nome:['Kaio',[Validators.required,Validators.minLength(5),Validators.maxLength(25)]],
        email:['naulo@gmail.com',[Validators.required,Validators.minLength(5),Validators.maxLength(25)]],
        senha:['321',[Validators.required]],
        cpf:['41703325800',[Validators.required,Validators.minLength(11),Validators.maxLength(45)]],
        rua:['rua Para',[Validators.required,Validators.minLength(5),Validators.maxLength(35)]],
        bairro:['Jardim Esmeralda',[Validators.required,Validators.minLength(5),Validators.maxLength(35)]],
        numero:['1221',[Validators.required,Validators.minLength(1),Validators.maxLength(25)]],
        cep:['11711554',[Validators.required]],
        cidade:['Praia Grande',[Validators.required,Validators.minLength(5),Validators.maxLength(35)]],
        estado:['SP',[Validators.required,Validators.minLength(1),Validators.maxLength(45)]],
        telefone:['1399977788',[Validators.required,Validators.minLength(10),Validators.maxLength(17)]],
        rg:['5564441150',[Validators.required,Validators.minLength(10),Validators.maxLength(17)]],
        dataNasc:['',[Validators.required]],
       })
  }

  signupUser(){
    this.clienteService.insert(this.formGroup.value)
    .subscribe(response => {
      this.showInsertOk();
    },
      error => {});
  }

  showInsertOk(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso',
      message: 'Cadastro efetuado com sucesso!',
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
