import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { API_CONFIG } from '../../config/api.config';
import { QuartoDTO } from '../../models/quarto.dto';


@IonicPage()
@Component({
  selector: 'page-quartos',
  templateUrl: 'quartos.html',
})
export class QuartosPage {

  items: QuartoDTO[];

  bucketUrl : string = API_CONFIG.bucketBaseUrl;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
    {
      id:"1",
      numero:"2525",
      andar:"2",
  
    }

    ]





  };

}
