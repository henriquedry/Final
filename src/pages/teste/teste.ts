import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { query } from '@angular/core/src/animation/dsl';
/**
 * Generated class for the TestePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teste',
  templateUrl: 'teste.html',
})
export class TestePage {
  categoriaLiterario: any[] = new Array();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestePage');
  }


  goCriar() {
    this.navCtrl.push('CriarPage');
  }


  getlist() {
    var postRef = firebase.firestore()
      .collection("categoriaLiterario");

    postRef.get().then(query => {
      query.forEach(doc => {
        console.log(this.categoriaLiterario)
        this.categoriaLiterario.push(doc.data());
      });
    });
  }
}
