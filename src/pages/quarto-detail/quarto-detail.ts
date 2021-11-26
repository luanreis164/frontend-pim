import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { API_CONFIG } from '../../config/api.config';
import { QuartoDTO } from '../../models/quarto.dto';
import { ReservaDTO } from '../../models/reserva.dto';
import { QuartoService } from '../../services/domain/quarto.service';
import { ReservaService } from '../../services/domain/reserva.service';

@IonicPage()
@Component({
  selector: 'page-quarto-detail',
  templateUrl: 'quarto-detail.html',
})
export class QuartoDetailPage {
  
  item: QuartoDTO;

  bucketUrl : string = API_CONFIG.bucketBaseUrl;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public quartoService: QuartoService,
  
     ) {
  }

  ionViewDidLoad() {
    let categoria_id = this.navParams.get('categoria_id');
    this.quartoService.findById(categoria_id)
    .subscribe(response =>{
      this.item = response;
    },
    error => {});
  }


}
