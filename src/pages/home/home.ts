import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import { AddNotePage } from '../add-note/add-note';
import { Note } from '../../model/note';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  notes: Note[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public events: Events) {
    this.listenNewNotes();
    this.findNotes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  listenNewNotes() {
    this.events.subscribe('note:created', (note, time) => {
      this.notes.push(note);
    });
  }

  goToAddNote() {
    this.navCtrl.push(AddNotePage);
  }

  findNotes() {
    this.storage.forEach( (value, key, index) => {
      notes.push(value);
      console.log("This is the value", value)
      console.log("from the key", key)
      console.log("Index is", index)
    })
  }

}
