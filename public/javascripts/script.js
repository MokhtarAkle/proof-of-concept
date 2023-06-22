let colorpicker = document.querySelector("#colorpicker");
let colorpreview = document.querySelector("#colorpreview");
let onswitch = document.querySelector("#switch");
let rangeslider = document.querySelector("#rangeSlider");
let texter = document.querySelector("#textdisplayer");
let userDisplay = document.querySelector("#userdisplayer");
let bodyBG = document.querySelector("body")
let listItems = document.querySelectorAll("select")
let numbered = document.querySelector("#numberCount");
let lightSelect = document.querySelector("#lightSelect");
let lightOptions = document.querySelector("#lightOptions");


const clientId = 'User_' + Math.random().toString(16).substr(2, 8)
    const options = {
      keepalive: 60,
      clientId: clientId,
      protocolId: 'MQTT',
      protocolVersion: 4,
      clean: true,
      reconnectPeriod: 1000,
      connectTimeout: 30 * 1000,
    }
const client  = mqtt.connect('ws://broker.emqx.io:8083/mqtt', options)


async function initializeSelects(){
  const requestURL = './exampleapi.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const ledapi = await response.json();
  console.log(ledapi);


}
initializeSelects();


    console.log(clientId)
  client.on('connect', function () {
    client.subscribe('status/client-id', function (err) {
    })
    client.subscribe('wled/9df798', function (err) {

    })
    client.subscribe('wled/9df798/api', function (err) {

      })
    client.subscribe('wled/9df798/col', function (err) {

      })
    client.subscribe('status/client-display', function (err) {
        client.publish('status/client-display', clientId);
      })   
  })
  let dynId;
  let dynerId;
  client.on('message', function (topic, message) {
    // message is Buffer

    console.log(topic + " " + message.toString())
    if(topic == "status/client-display"){
      userSetup(message);
    }
    else{
      textinChat(message);
      colorpreview.style.backgroundColor = message;
    }


  })

function textinChat (color){
  const variableValue = document.createElement("p");
variableValue.innerHTML = color;
document.querySelector("#textdisplayer").appendChild(variableValue);
texter.scrollTop = texter.scrollHeight;
}

function userSetup(user){
  const userD = document.createElement("p");
  userD.innerHTML = user;
  userDisplay.appendChild(userD);
}

colorpicker.addEventListener("change", () => {
  client.publish('status/client-id', clientId + " Selected color: ");
  client.publish('wled/9df798/col', colorpicker.value);
});
onswitch.addEventListener('change', function() {
  if (this.checked) {
    client.publish('status/client-id', clientId + " Selected status: ");
    client.publish('wled/9df798', "ON");
  } else {
    client.publish('status/client-id', clientId + " Selected status: ");
    client.publish('wled/9df798', "OFF");
  }
});

rangeslider.addEventListener('change', () => {
  client.publish('status/client-id', clientId + " Selected brightness: ");
  client.publish('wled/9df798/api', rangeslider.value)
});

for(let i = 0; i < listItems.length; i++){
  listItems[i].addEventListener("change", () =>{
    client.publish('status/client-id', clientId + " Selected: ");
    client.publish('wled/9df798/api', listItems[i].value)

  })
}

numbered.addEventListener('change', () => {
  client.publish('status/client-id', clientId + " Selected transition time: ");
  client.publish('wled/9df798/api', numbered.value)
});

lightOptions.addEventListener('change', () => {
  lightSelect.action = "/" + lightOptions.value;
});
