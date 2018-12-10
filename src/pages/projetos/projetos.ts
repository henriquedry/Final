import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { query } from '@angular/core/src/animation/dsl';
/**
 * Generated class for the ProjetosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projetos',
  templateUrl: 'projetos.html',
})
export class ProjetosPage {
  categoriaProjeto: any[] = new Array();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getlist();
    console.log('ionViewDidLoad ProjetosPage');
  }


  goCriar() {
    this.navCtrl.push('CriarPage');
  }


  getlist() {
    var postRef = firebase.firestore()
      .collection("categoriaProjeto");

    postRef.get().then(query => {
      query.forEach(doc => {
        console.log(this.categoriaProjeto)
        this.categoriaProjeto.push(doc.data());
      });
    });
  }
}