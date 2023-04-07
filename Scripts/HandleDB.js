import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc, getDoc, doc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCJqLNu9CVSv-eTtz5vesvnCeFvDh6P8TE",
    authDomain: "duckpay-f1221.firebaseapp.com",
    projectId: "duckpay-f1221",
    storageBucket: "duckpay-f1221.appspot.com",
    messagingSenderId: '973544241416',
    appId: '1:973544241416:web:4dfde9670efa2325b394bd',
    measurementId: 'G-Y850K0XNN1',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()

const usersRef = collection(db, "users");


async function activeUser(id){

    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }

}

async function getFriends(id){

    const docRef = doc(db, "users", "20011188");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data().friends);
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }

}

async function addFriend(id){
    await updateDoc(doc(usersRef, "20011188"), {
        friends: arrayUnion(id) });
}

async function isFriend(id){
    await getFriends(id)
}

async function createUser(id, name){
    await setDoc(doc(usersRef, id), {
        ID: id, name: name,
        friends: [] });
}

async function getUser(id) {


// Add a new document with a generated id.

    const docRef = doc(db, "users",  id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}
export {getUser, addFriend};