// firebase-config.js
// ⚠️  Tambahkan file ini ke .gitignore agar tidak ter-upload ke GitHub.
//
// Catatan keamanan:
//  - API Key Firebase untuk web bersifat publik secara teknis, NAMUN
//    pastikan kamu sudah mengaktifkan HTTP Referrers restriction di
//    Google Cloud Console agar key hanya bisa dipakai dari domain kamu.
//  - Aturan keamanan Firestore & Firebase Auth adalah lapisan perlindungan utama.

export const firebaseConfig = {
  apiKey:            "AIzaSyAtqRpOWHkP7iPQMyiebujRQsz_Jpv7uoo",
  authDomain:        "my-pastel-diary.firebaseapp.com",
  projectId:         "my-pastel-diary",
  storageBucket:     "my-pastel-diary.firebasestorage.app",
  messagingSenderId: "488057189037",
  appId:             "1:488057189037:web:aee61fd37851b109340c24",
  measurementId:     "G-KYKS0ZN2JF"
};
