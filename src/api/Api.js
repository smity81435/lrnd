/* eslint-disable */
import firebase from 'firebase'

var db;

export function initialize() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAxHgqsqhrt8D8aknRI4hSQsDt7ztZR2bI",
        authDomain: "lrnd-5aa72.firebaseapp.com",
        databaseURL: "https://lrnd-5aa72.firebaseio.com",
        projectId: "lrnd-5aa72",
        storageBucket: "lrnd-5aa72.appspot.com",
        messagingSenderId: "126091426672"
    };

    firebase.initializeApp(config);

    db = firebase.firestore();
    db.settings({
        timestampsInSnapshots: true,
    });
}
export function killChildren(deckId){
    console.log("Searching the water for her crew, take no prisoners!!!");
    var ref = db.collection("cards").where("parentId","==", deckId).get();
    console.log(ref);
}

export function getDecks() {
    return db.collection("decks").get();
}
export function deleteCard(cardId){
    return db.collection("cards").doc(cardId).delete();
}


export function deleteDeck(deckId){
    console.log("Direct Hit Captain! Deck Sunk! Crew Overboards!");
    return db.collection("decks").doc(deckId).delete();
}


export function addDeck(deck){
    return db.collection("decks").add(deck)
    .then(function(docRef){
        console.log("New Deck setting sail! ID: " , docRef.id);
    })
    .catch(function(error){
        console.error("Error adding deck: ", error);
    })
}
export function addCard(card){
    return db.collection("cards").add(card)
        /* .then(function(docRef){
            console.log("New Card has been added to! ID: " , docRef.id);
        })
        .catch(function(error){
            console.error("Error adding card to deck!: ", error);
        }) */
}

export function getCards(deckId) {
    return db.collection("cards").where("parentId", "==", deckId)
        .get();
}