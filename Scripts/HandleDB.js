import {initializeApp} from 'firebase/app';
import {
    arrayUnion,
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    serverTimestamp,
    setDoc,
    updateDoc,
    deleteDoc,
    query,
    orderBy,
    limit
} from 'firebase/firestore';

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

async function createRequest(from, to, amount, type, message, transactionID){
    const docRef = collection(db, "users", to, "requests");
    await setDoc(doc(docRef), {
        date: serverTimestamp(),
        amount: amount,
        from: from,
        type: type,
        message: message,
        transactionID: transactionID,

    });
}

async function getSingleRequest(id, docID){
    return await getDoc(doc(db, "users", id, "requests", docID));
}

async function acceptRequest(from, to, amount, type, docID, reqID){
    await addTransaction(to, amount, to, type, true, from, 1)
    await changeTransactionStatus(from, docID, 1)
    await deleteDoc(doc(db, "users", to, "requests", reqID));

}

async function deleteRequest(from, to, amount, type, docID, reqID){
    await addTransaction(to, amount, to, type, true, from, 2)
    await changeTransactionStatus(from, docID, 1)
    await deleteDoc(doc(db, "users", to, "requests", reqID));

}

async function getRequest(id){
    return await getDocs(query((collection(db, "users", id, "requests")), orderBy('date', 'asc')))
}

async function addTransaction(id, price, to, type, recieved, from, status){
    //Payment Type
    // 0 - DuckBills
    // 1 - Dining Dollars
    // 2 - Meal Swipes

    // Status
    // 0 - Pending
    // 1 - Accepted
    // 2 - Rejected

    const collRef = collection(db, "users", id, "transactions");

    const docRef = doc(collRef);

    await setDoc(docRef, {
        date: serverTimestamp(),
        price: price,
        to: to,
        type: type,
        recieved: recieved,
        from: from,
        status: status
    })

    return docRef.id

}

async function getTransactions(id){
    return await getDocs(query((collection(db, "users", id, "transactions")), orderBy('date', 'desc')))
}

async function getTransaction(id, docID){

    return await getDoc(doc(db, "users", id, "transactions", docID));

}

async function deleteTransaction(id, docID){
    await deleteDoc(doc(db, "users", id, "transactions", docID));
}

async function changeTransactionStatus(id, docID, status){
    await updateDoc(doc(db, "users", id, "transactions", docID), {
        status: status
    });
}

async function setQuickPay(id){

    const docRef = collection(db, "users", id, "quickpay");
    if((await getQuickPay(id)).size < 4){
        await setDoc(doc(docRef), {id: id});
    }
}

async function getQuickPay(id){
    return await getDocs(collection(db, "users", id, "quickpay"));
}

async function activeUser(id){

    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);



}

async function getFriends(id){
    return await getDocs(collection(db, "users", id, "friends"));
}

async function addFriend(id, friendID){
    const docRef = collection(db, "users", id, "friends");
        await setDoc(doc(docRef), {id: friendID});
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

    const docRef = doc(db, "users",  id);

    return (await getDoc(docRef)).data().name.toString()
}
export {getSingleRequest, changeTransactionStatus, getTransaction, deleteTransaction, getUser, addFriend, addTransaction, getTransactions, setQuickPay, getQuickPay, getFriends, createRequest, getRequest, acceptRequest, deleteRequest};