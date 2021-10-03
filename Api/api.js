import * as firebase from "firebase";
import * as network from 'expo-network'
const firebaseConfig = {
    apiKey: "AIzaSyAhdyDuzoPuLfIsc2hefAO1CBUZ5GZZy0o",
    authDomain: "fieldsafety-47193.firebaseapp.com",
    databaseURL: "https://fieldsafety-47193-default-rtdb.firebaseio.com",
    projectId: "fieldsafety-47193",
    storageBucket: "fieldsafety-47193.appspot.com",
    messagingSenderId: "620054468144",
    appId: "1:620054468144:web:a3b0adcc4c4cb77e85bff5",
    measurementId: "G-WFH7VDYTG1",
};

if (firebase.apps.length == 0) {
  try {
    firebase.initializeApp(firebaseConfig);
  } catch (err) {
    console.log(err);
  }
}

const dataBase = firebase.firestore(); 

const userRef = dataBase.collection('user');
const equipmentRef = dataBase.collection('equipement');
const safetyDocsRef = dataBase.collection('safety_documents');
const incidentRef = dataBase.collection('incident'); 
let deviceAPI = ""

export async function addUser(){
    deviceAPI = await network.getIpAddressAsync(); 
    await userRef.doc(deviceAPI).get()
    .then(async(data)=>{
      if(data.data()==undefined){
        await userRef.doc(deviceAPI).set({
          position: 'w',
        })
        .then(()=>{
          console.log("user successfully added");
        })
        .catch((err)=>{
          console.log("error message");
        })
      }
      else{
        console.log("user already exists"); 
      }
    })
    .catch((err)=>{
      console.log(err);  
    });
}


export async function fetchSafetyDocs(RetrievedData){
  try{
    var docList = []; 
    var snapshot = await safetyDocsRef.get(); 
    snapshot.forEach((doc)=>{
      docList.push({
        id: doc.id, 
        name: doc.data().name,
        pdf: "", 
      })
    });
  
    RetrievedData(docList); 
  } catch(err){
    console.log(err); 
  }
}

export async function AddEquipmentToFav(equipement_id){
  /*equipements = []
  var snapshotFave = await userRef.doc(deviceAPI).get(); 
  if(snapshotFave.data().equipements){
    equipements.push(snapshotFave.data().equipements);
  } 
  console.log(equipements);
  equipements.push(equipement_id);
  
  await userRef.doc(deviceAPI).update({
    equipements: equipements
  }).then(()=>{
    console.log('added to fave')
  }).catch((err)=>{
    console.log('err', err); 
  })*/
}


export async function fetchEquipments(RetrievedData){
  try{
    var equipementList = []; 
    
      var snapshot = await equipmentRef.get(); 
      snapshot.forEach((doc)=>{
        var status = false; 
        equipementList.push({
          id: doc.id, 
          name: doc.data().name, 
          status: doc.data().status, 
          fave: status,
        })
      });
   

    RetrievedData(equipementList); 
  } catch(err){
    console.log(err); 
  }
}

export async function postIncident(equipement_id, content){
    await incidentRef.add(
      {
        created_by: deviceAPI,
        equipement_id: equipement_id,
        content: content, 
        status: 'pending',
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
      }
    ).then(()=>{
      console.log('incident successfully added'); 
    }).catch((err)=>{
      console.log(err); 
    })
}

export async function acceptIncident(incidentId){
  await incidentRef.doc(incidentId).update({
    status: 'accepted',
  })
  .then(()=>{
    console.log("incident accepted")
  })
  .catch((err)=>{
    console.log(err)
  });
}

export async function rejectIncident(incidentId){
  await incidentRef.doc(incidentId).update({
    status: 'rejected',
  })
  .then(()=>{
    console.log("incident rejected")
  })
  .catch((err)=>{
    console.log(err)
  });
}

export async function fetchIncidents(RetrievedData){
  try{
    var incidentList = []; 
    var snapshot = await incidentRef.get();
    snapshot.forEach((doc)=>{
      incidentList.push({
        incident_id: doc.id, 
        created_by: doc.data().created_by,
        equipement_id: doc.data().equipement_id,
        content: doc.data().content, 
        status: doc.data().status,
        created_at: doc.data().created_at,
      })
    });
    RetrievedData(incidentList)
  
  } catch(err){
    console.log(err); 
  }
}



