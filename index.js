// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDOTCvzaE32ehZJnXNkm-xCa8lnd9kdCsA",
    authDomain: "testingchess.firebaseapp.com",
    databaseURL: "https://testingchess-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "testingchess",
    storageBucket: "testingchess.appspot.com",
    messagingSenderId: "67205733563",
    appId: "1:67205733563:web:a19a0531c3094552fa5d9e"
  };
  // Initialize Firebase connection
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  // Reference to the specific location in the database for your game state
  const gameRef = database.ref('gameData/room');
  
  // Function to send a message (update the shared variable)
  function sendMessage(message) {
    gameRef.set({ message: message });
  }
  
  // Function to listen for incoming messages (updates from the other player)
  gameRef.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
      // Update your game logic based on the received message
      console.log("Received message:", data.message);
    }
  });
  sendMessage("Hello there !!!");
  