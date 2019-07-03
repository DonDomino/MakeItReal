import './style.scss';
document.addEventListener("DOMContentLoaded", () => {
  // Firebase Script
  let firebaseConfig = {
    apiKey: "AIzaSyCy4XdpVWTx6-gwMALsoNTgG9QA1ntki2E",
    authDomain: "chat-58c65.firebaseapp.com",
    databaseURL: "https://chat-58c65.firebaseio.com",
    projectId: "chat-58c65",
    storageBucket: "chat-58c65.appspot.com",
    messagingSenderId: "574191972101",
    appId: "1:574191972101:web:1dcf3fd7bcae2ddb"
  };

  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();

  // Guardando la variable global    
  let modal = document.querySelector('#login');
  let saveUser = document.querySelector('#save-user');
  let inputName = document.querySelector('#user-name');

  const addUserFB = () => {
    let inputText = document.querySelector("#chatInput");
    db.collection("usuarios").add({
      name: localStorage.userName,
    })
    inputText.value = " ";
  }

  const checkUser = () => {
    let user = inputName.value;
    db.collection("usuarios")
      .where("name", "==", user)
      .get()
      .then(querySnapshot => querySnapshot.empty)
      .then(empty => {
        if (empty) {
          addUserFB();
        }
      });
  };

  const usersRender = (userId, person) => {
    let newUser = document.createElement('li');
    newUser.innerHTML =
      `<div id="${userId}" class="users">
        <i class="fas fa-circle"></i>
        <span>${person.name}</span>
        <i class="fas fa-ellipsis-v"></i>
      </div>`;
    let sideBar = document.querySelector("ul");
    sideBar.appendChild(newUser);
    newUser.onclick = userSelect;
    userOnline();
  }

  const requestUserFbLive = () => {
    db.collection("usuarios")
    .orderBy("name", "asc")
    .onSnapshot(snapshot => {
      snapshot.docChanges.forEach(change => {
        let dataFb = change.doc.data();
        let userId = change.doc.id;
        if (change.type === "added") {          
          usersRender(userId, dataFb);
        }
        if(dataFb.name === localStorage.userName){
          localStorage.setItem("userActive", userId);
        }
      });
    });
  }

  const login = () => {
    if (!localStorage.userName) {
      modal.style.display = "block";
      saveUser.addEventListener("click", () => {
        localStorage.setItem("userName", inputName.value);
        modal.style.display = "none";
        checkUser();
        requestUserFbLive();
      });
    } else {
      requestUserFbLive();
    }
  }  

  const requestChats = (id) => {
    db.collection("chats")
    .where("sendBy", "==", id)
    .where("sendTo", "==", localStorage.userActive)
    .orderBy("date", "asc")
    .onSnapshot(snapshot => {
      snapshot.docChanges.forEach(change => {
        if (change.type === "added") {
          let dataFb = change.doc.data();
          chatRender(dataFb);
        }
      });
    });
  }

  const chatRender = (person) => {
    let newChat = document.createElement('div');
    newChat.classList.add("chats");

    newChat.innerHTML = `<h3>${person.name}</h3><span>${person.date}</span><p>${person.body}</p>`;

    let windows = document.querySelector(".window");
    windows.appendChild(newChat);
  }

  const sendMessage = () => {
    let inputText = document.querySelector("#chatInput");
    db.collection("chats").add({
      name: localStorage.userName,
      sendBy: localStorage.userActive,
      date: dateNow(),
      body: inputText.value,
      sendTo: localStorage.userId
    })    
    inputText.value = " ";
  }

  const dateNow = () => {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let d = new Date;
    let month = months[d.getMonth()];
    let day = d.getDate();
    let hour = d.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    })
    let fecha = month.concat(" ", day, " ", hour);
    return fecha;
  }

  const clean = () => {
    let window = document.querySelector(".window");
    if (window.childElementCount > 0) {
      while (window.firstChild) {
        window.firstChild.remove();
      }
    }
  }

  const autoScroll = () => {
    let windowChat = document.querySelector(".window")
    windowChat.scrollBy(0, 100);
  }

  const newMsg = () => {
    let inputMsg = document.querySelector("#chatInput");
    inputMsg.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        let person = {name: localStorage.userName, date: dateNow(), body: inputMsg.value}
        chatRender(person);
        sendMessage();
        autoScroll();
      }
    });
  }

  function userSelect(){
    for(let item of document.querySelectorAll('li')){
      item.classList.remove("active");
    } 
    this.classList.add("active");    
    let id = this.firstChild.id;
    localStorage.setItem("userId", id);  
    requestChats(id);
    clean();
  }

  const userOnline = () => {
    for(let user of document.querySelectorAll('.users')){
      if (user.id === localStorage.userActive){
        user.querySelector(".fa-circle").classList.add("online");
      }  
    }    
  }

  const bindEvents = () => {
    login();   
    newMsg();
  }

  bindEvents();

});
// FIN DEL CODIGO
