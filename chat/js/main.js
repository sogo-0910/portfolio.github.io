
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCk1qTM3XOmqG56vNLISUDb8uElUMo7daQ",
    authDomain: "komatsuchat.firebaseapp.com",
    projectId: "komatsuchat",
    storageBucket: "komatsuchat.appspot.com",
        messagingSenderId: "457526514808",
    appId: "1:457526514808:web:a49b16717d519c6c29498d",
    measurementId: "G-WW6CWL4EY0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

//Msg送信準備
const newPostRef = firebase.database();
let room = "room1";
const send = document.getElementById("send");
const username = document.getElementById("username");
const text = document.getElementById("text");
const output = document.getElementById("output");
//Msg送信処理
send.addEventListener('click', function(){
if(text.value) {
    newPostRef.ref(room).push({
        username: username.value,
        text: text.value
    });
        text.value = "";
        document.getElementsByClassName('message')[0].style.display = "none";

} else {
    document.getElementsByClassName('message')[0].style.display = "block";
}
});
//Msg受信処理
newPostRef.ref(room).on("child_added",function(data){
const v = data.val();
const k = data.key;
let str ="";
str += '<div class="name">'+ v.username +'</div>';
str += '<div class="text">'+ v.text +'</div>';
output.innerHTML += str;
});
