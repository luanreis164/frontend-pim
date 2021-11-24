import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { API_CONFIG } from '../../config/api.config';
import { CategoriaDTO } from '../../models/categoria.dto';
import { QuartoDTO } from '../../models/quarto.dto';
import { QuartoService } from '../../services/domain/quarto.service';


@IonicPage()
@Component({
  selector: 'page-quartos',
  templateUrl: 'quartos.html',
})
export class QuartosPage {

  items: QuartoDTO[];
  items2: CategoriaDTO[];

  bucketUrl : string = API_CONFIG.bucketBaseUrl;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public quartoService: QuartoService,
     ) {
  }

  ionViewDidLoad() {
    let categoria_id = this.navParams.get('categoria_id');
    this.quartoService.findByCategoria(categoria_id)
    .subscribe(response =>{
      this.items = response['content']; 
      this.items2 = response['content:[{id}]'];
    },
    error => {});

  }

}
