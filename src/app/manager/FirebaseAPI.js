import FirebaseAPI from 'firebase'
import { FIREBASE_CONFIG } from '../constants/configs'

FirebaseAPI.initializeApp(FIREBASE_CONFIG)

export default FirebaseAPI