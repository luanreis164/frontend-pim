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
        nome:['',[Validators.required,Validators.minLength(5),Validators.maxLength(25)]],
        email:['',[Validators.required,Validators.minLength(5),Validators.maxLength(25)]],
        senha:['',[Validators.required]],
        cpf:['',[Validators.required,Validators.minLength(11),Validators.maxLength(45)]],
        rua:['',[Validators.required,Validators.minLength(5),Validators.maxLength(35)]],
        bairro:['',[Validators.required,Validators.minLength(5),Validators.maxLength(35)]],
        numero:['',[Validators.required,Validators.minLength(1),Validators.maxLength(25)]],
        cep:['',[Validators.required]],
        cidade:['',[Validators.required,Validators.minLength(5),Validators.maxLength(35)]],
        estado:['',[Validators.required,Validators.minLength(1),Validators.maxLength(45)]],
        telefone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(17)]],
        rg:['',[Validators.required,Validators.minLength(10),Validators.maxLength(17)]],
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
