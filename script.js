// Firebase Configuration (Replace with your actual Firebase Config)
const firebaseConfig = {
    apiKey: "AIzaSyDML6GtoH_BcDHDT9wDUzY4TIMtmg2dmpk",
    authDomain: "chosen-i-558cf.firebaseapp.com",
    projectId: "chosen-i-558cf",
    storageBucket: "chosen-i-558cf.appspot.com",
    messagingSenderId: "687394288608",
    appId: "1:687394288608:web:b58776d67991364b52b185"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Function to Add New Articles
function addArticle() {
    const title = prompt("Enter article title:");
    const content = prompt("Enter article content:");

    if (title && content) {
        db.collection("articles").add({
            title: title,
            content: content,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            alert("Article published successfully!");
            location.reload();
        }).catch(error => {
            console.error("Error adding article: ", error);
        });
    }
}

// Load Articles
document.addEventListener("DOMContentLoaded", function() {
    const articleContainer = document.getElementById("article-container");
    db.collection("articles").orderBy("timestamp", "desc").onSnapshot(snapshot => {
        articleContainer.innerHTML = "";
        snapshot.forEach(doc => {
            const article = doc.data();
            const articleElement = document.createElement("div");
            articleElement.innerHTML = <h3>${article.title}</h3><p>${article.content}</p><small>Published on: ${article.timestamp?.toDate().toLocaleString()}</small>;
            articleContainer.appendChild(articleElement);
        });
    });
});

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    window.open(https://wa.me/254755703469?text=Message from ${name}: ${message}, "_blank");
});