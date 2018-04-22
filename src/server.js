import userModel from './models/user'

export const firebase  = require('firebase')
        require('firebase/firestore')
        require('firebase/auth')

let db
export const init = () => {
  let config = {
    apiKey: "AIzaSyCTXoawGfolxLvERwR6CrPXKbo6Ms1FPfc",
    authDomain: "roomateapp-57fd6.firebaseapp.com",
    databaseURL: "https://roomateapp-57fd6.firebaseio.com",
    projectId: "roomateapp-57fd6",
    storageBucket: "",
    messagingSenderId: "682547868204"
  }
  firebase.initializeApp(config)
  db = firebase.firestore()
  console.log('DB up')
}
/*
export const createUser = (name)=>{
    const docREF = db.doc('users/user')
  let model = userModel(docREF.id,name, firebase.firestore.FieldValue.serverTimestamp() )

  docREF.set(model)

  console.log(`set user ${name}`) 


}

*/

export const createUser = (email,password)=>{

  firebase.auth().createUserWithEmailAndPassword(email,password)
  .catch(function(err){
    console.error(err);
    return err
  })
}

export const getLoggedIn = (email,pass)=>{
  firebase.auth().signInWithEmailAndPassword(email,pass)
}


