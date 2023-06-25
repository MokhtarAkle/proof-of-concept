# LED collaboration tool voor Random Studio

![image](https://github.com/MokhtarAkle/proof-of-concept/assets/45001009/b995d942-9cd6-406d-a5a6-7cfdbf3cbf03)

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Tijdens deze sprint heb ik voor Random Studio een tool gemaakt waarmee je tussen 2 verschillende locaties kan samenwerken aan een LED. Dit wordt gedaan doormiddel van MQTT waarmee de informatie via een server wordt afgehandeld waardoor je draadloos veranderingen kan maken en terugzien op je aparte LED's.
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

## Gebruik
Het grootste deel van de app heeft een werkende WLED nodig om echt gebruik van te maken maar je kan de verschillende opties uittesten en bevestigen dat deze verstuurd worden. Ook kan je tussen meerdere clients al deze data versturen en de preview aanpassen voor alle verbonden clients tegelijk.

## Kenmerken
### Node
Node is een onderliggend framework dat er voor zorgt dat we server side code kunnen schrijven en gebruik kunnen maken van verschillende modules zoals Express, socket.io en EJS

### Express
We gebruiken Express als framework voor onze projecten. Met express kunnen we verschillende routes aanmaken waarin we content kunnen aanbieden als webpaginas. Ook kunnen we gebruik maken van een view engine door middel van Express om de opmaak van de HTML makkelijker te maken. Verder kan je statische bestanden aanbieden door een statische route aan te geven via express. Door middel van de statische mappen

### EJS
De view engine die we gebruiken is EJS. Hiermee kan je makkelijk templates van HTML maken terwijl je direct in combinatie hiermee JS kan gebruiken.

### MQTT
WebSocket is een netwerk communicatie protocol waarmee je over 1 TCP verbindingen 2 weg communicatie kan hebben. MQTT is een directe verbetering hierop met meer gebruiksvriendelijke opties en makkelijk te gebruiken functies en data.

## Installatie
Gebruik ``` npm install ``` om dependencies te downloaden, maak vervolgens gebruik van ``` npm start ``` om de applicatie te starten of ``` npm run dev ``` om een nodemon enviroment op te starten.

## Bronnen
zie [Analyseren](https://github.com/MokhtarAkle/proof-of-concept/wiki/Analyseren)
## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
