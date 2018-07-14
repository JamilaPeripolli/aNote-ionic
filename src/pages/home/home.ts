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
      this.findNotes();
    });
  }

  goToAddNote() {
    this.navCtrl.push(AddNotePage);
  }

  findNotes() {
    var importantNotes: Note[] = [];
    var simpleNotes: Note[] = [];

    this.storage.length().then(size =>{

      this.storage.forEach( (value, key, index) => {
        console.log("for")
        if(value.isImportant) {
          importantNotes.push(value);
        } else {
          simpleNotes.push(value);
        }

        if(index == size) {
          console.log("fora")
          this.notes = importantNotes.concat(simpleNotes);
        }
      });

    });
  }

}
