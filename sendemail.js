const emailnappi = document.querySelector('.lahetanappi');

emailnappi.addEventListener('click', e => {
  sendJSON();
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
      "EmailMsg": "Azure",
      "EmailAddress": "nella.virtanen@edu.salpaus.fi",
      "EmailTo": "nellu.virtanen@gmail.com",
      "EmailName": "Joku Jokunen"
    }); 

    // Sending data with the request 
    xhr.send(data); 
  } 