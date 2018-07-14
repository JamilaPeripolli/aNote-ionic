import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Note } from '../../model/note';

/**
 * Generated class for the AddNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {
  note: Note = new Note();

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNotePage');
  }

  save() {
    storage.set(note.title, note);
    this.close();
  }

  close() {
    this.navCtrl.pop();
  }

}
