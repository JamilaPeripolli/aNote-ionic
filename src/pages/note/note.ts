import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Note } from '../../model/note';

@IonicPage()
@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})
export class NotePage {
  note: Note;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public events: Events) {
    this.note =  navParams.get('note');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotePage');
  }

  deleteNote() {
    this.storage.remove(this.note.title);
    this.events.publish('note:deleted', Date.now());
    this.close();
  }

  close() {
    this.navCtrl.pop();
  }

}
