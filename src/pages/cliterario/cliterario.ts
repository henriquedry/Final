import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CliterarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliterario',
  templateUrl: 'cliterario.html',
})
export class CliterarioPage {

  personagem: String;

  public segmentos: any = [
    {
      nome: 'personagem',
      status: false
    },
    {
      nome: 'resumos',
      status: false
    },
    {
      nome: 'locais',
      status: false
    },
    {
      nome: 'classes',
      status: false
    },
    {
      nome: 'itens',
      status: false
    },

  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  mudarSegmentos(seg) {
    this.segmentos.filter(el => {
      if (el.nome == seg) { el.status = !el.status }
    })
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CliterarioPage');
  }
}
