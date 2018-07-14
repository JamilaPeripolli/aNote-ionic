import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNotePage');
  }

  save() {
    this.storage.set(this.note.title, this.note);
    this.events.publish('note:created', this.note, Date.now());
    this.close();
  }

  close() {
    this.navCtrl.pop();
  }

}
