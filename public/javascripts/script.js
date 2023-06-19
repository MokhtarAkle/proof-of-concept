let colorpicker = document.querySelector("#colorpicker");
let colorpreview = document.querySelector("#colorpreview");
let onswitch = document.querySelector("#switch");
let rangeslider = document.querySelector("#rangeSlider");
let texter = document.querySelector("#textdisplayer");

const client  = mqtt.connect('ws://broker.emqx.io:8083/mqtt')

function updateColor(event) {
      colorpreview.style.backgroundColor = event.target.value;
  }

  client.on('connect', function () {
    client.subscribe('wled/9df798', function (err) {
      if (!err) {
        client.publish('wled/9df798', colorpicker.value)
      }
    })
    client.subscribe('wled/9df798/api', function (err) {
        if (!err) {
          client.publish('wled/9df798/api', 'FX=23')
        }
      })
    client.subscribe('wled/9df798/col', function (err) {
        if (!err) {
          client.publish('wled/9df798/col', colorpicker.value)
        }
      })   
  })
  
  client.on('message', function (topic, message) {
    // message is Buffer
    console.log(topic + " " + message.toString())
  })

function textinChat (element1){
  const textColor = document.createElement("p");
textColor.innerHTML = "User selected: " + element1.value;
document.querySelector("#textdisplayer").appendChild(textColor);
texter.scrollTop = texter.scrollHeight;
}

colorpicker.addEventListener("input", updateColor);
colorpicker.addEventListener("input", () => {client.publish('wled/9df798/col', colorpicker.value);
textinChat(colorpicker);
});
onswitch.addEventListener('change', function() {
  if (this.checked) {
    client.publish('wled/9df798', "ON");
  } else {
    client.publish('wled/9df798', "OFF");
  }
});

rangeslider.addEventListener('change', () => {client.publish('wled/9df798/api', 'bri=' + rangeslider.value)
textinChat(rangeslider);
});
