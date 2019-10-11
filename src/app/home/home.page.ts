import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  verificationId:any;
  code: string = "";
  phoneNumber: string = "";
  constructor() {}

  send(){
    this.phoneNumber = "+91"+this.phoneNumber;
    (<any>window).FirebasePlugin.verifyPhoneNumber(this.phoneNumber, 60, (credential) =>{
      alert("SMS sent successfully")
      console.log(credential);
  
      this.verificationId = credential.verificationId;
      
      
  }, (error)=> {
      console.error(error);
  });
  }

  verify(){
    let signInCredential = firebase.auth.PhoneAuthProvider.credential(this.verificationId, this.code);
    firebase.auth().signInWithCredential(signInCredential).then((info)=>{
      console.log(info);
      firebase.auth().currentUser.getIdToken().then((idToken)=>{
        console.log(idToken)
      })
    },(error)=>{
      console.log(error)
    });
  }

}
