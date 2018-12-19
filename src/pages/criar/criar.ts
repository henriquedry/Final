import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CliterarioPage } from '../cliterario/cliterario';
/**
 * Generated class for the CriarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar',
  templateUrl: 'criar.html',
})
export class CriarPage {
  mensagem: string = "";
  mostrarMensagem: boolean = false;
  data: string = "";
  nome: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarPage');
  }

  goEmpresarial() {
    this.navCtrl.push('CempresarialPage');
  }

  goLiterario() {
    this.navCtrl.push('CliterarioPage');
  }

  bifurcacao() {

    if (this.data != "" && this.nome != "") {

      if (this.data.toUpperCase() == "LITERARIO")
        this.goLiterario()
      if (this.data.toUpperCase() == "EMPRESARIAL")
        this.goEmpresarial()
    }
    else{
     this.mensagem = "Preencha todos os campos"
    }
   }
   
  }
