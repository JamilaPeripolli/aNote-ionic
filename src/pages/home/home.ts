import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AddNotePage } from '../add-note/add-note';
import { Note } from '../../model/note';
import { NotePage } from '../note/note';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  notes: Note[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public events: Events, public modalCtrl: ModalController) {
    this.listenToEvents();
    this.findNotes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  listenToEvents() {
    this.events.subscribe('note:created', (note, time) => {
      this.findNotes();
    });
    this.events.subscribe('note:deleted', (note, time) => {
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
        if(value.isImportant) {
          importantNotes.push(value);
        } else {
          simpleNotes.push(value);
        }

        if(index == size) {
          this.notes = importantNotes.concat(simpleNotes);
        }
      });

    });
  }

  openNote(note) {
    let noteModal = this.modalCtrl.create(NotePage, {note : note});
    noteModal.present();
  }

}
