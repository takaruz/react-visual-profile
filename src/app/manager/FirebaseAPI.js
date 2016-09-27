
import FirebaseAPI from 'firebase'


var config = {
  apiKey: "AIzaSyDLxs12kFvRRKx8NYLfMaS3rnTF3gS4Jgg",
  databaseURL: "https://profile-ibirdz.firebaseio.com",
}
FirebaseAPI.initializeApp(config)

export default FirebaseAPI