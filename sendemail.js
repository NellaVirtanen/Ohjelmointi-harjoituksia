
const emailnappi = document.querySelector('.lahetanappi');
const nimiSisalto = document.querySelector('#nimi');
const emailSisalto = document.querySelector('#email');
const viestiSisalto = document.querySelector('#viesti');
const virhe = document.querySelector ('.virheilmoitus');

emailnappi.addEventListener('click', e => {
  e.preventDefault();
  sendJSON();

  if(nimiSisalto.value === '' || emailSisalto.value === '' || viestiSisalto.value === ''){
  virhe.classList.add('virhe');
  virhe.innerHTML = 'Täytä kaikki kentät!';
  setTimeout(() => virhe.classList.remove('virhe'), 3000);
  setTimeout(() => virhe.innerHTML = '', 3000);
  }

  else{
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`${nimiSisalto.value}:${emailSisalto.value}:${viestiSisalto.value}`));
  viesti.appendChild(li);
  nimiSisalto.value = '';
  emailSisalto.value = '';
  viestiSisalto.value = '';
  }
});

function sendJSON(){ 
  console.log("sent here");     
  //let result = document.querySelector('.result'); 
    //let name = document.querySelector('#name'); 
    //let email = document.querySelector('#email'); 
        
    // Creating a XHR object 
    let xhr = new XMLHttpRequest(); 
    let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp1?code=lWOELqiU07AqsBviOQYzuNIrQP7xoV7NV7C5W2ctgjIRcf7nXE2biw=="; 

    // open a connection 
    xhr.open("POST", url, true); 

    // Set the request header i.e. which type of content you are sending 
    xhr.setRequestHeader("Content-Type", "application/json"); 

    // Create a state change callback 
    xhr.onreadystatechange = function () { 
        if (xhr.readyState === 4 && xhr.status === 200) { 

            // Print received data from server 
    //        result.innerHTML = this.responseText; 
          console.log("ready");
        } 
    }; 

    // Converting JSON data to string 
    var data = JSON.stringify({
      "EmailMsg": "#viesti", //Viestin sisältö
      "EmailAddress": "#email", //Lähettäjän sähköposti
      "EmailTo": "nellu.virtanen@gmail.com", //Sivun sähköposti
      "EmailName": "#nimi" //Lähettäjän nimi
    }); 

    // Sending data with the request 
    xhr.send(data); 
  } 