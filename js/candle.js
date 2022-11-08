/*
    "Simple Candle click"-easter egg Script
    By Lukas
*/

// Globale ID um so die Kerzen unterscheiden zu können
var globalID = 0;

// Einfache Kerze
class candle
{
    constructor(element) {
        this.id = globalID;
        this.element = element;

        // Globale ID hochzählen, um so die nächste ID zu schaffen!
        globalID++;
    }

    hasElement() {
        if(this.element != null)
        {
            console.log("Candle " + this.id + " %chas an %celement!", "color: green;", "color: white;");
            return true;
        } else {
            console.log("Candle " + this.id + " %chas no %celement", "color: red;", "color: white;");
            return false;
        }
    }

    getElement() {
        return this.element;
    }

    clicked() {
        console.log("Candle " + this.id + " has been clicked!");
        if(kerzenReihenfolge.length > 0)
        {
            if(this.id == kerzenReihenfolge[0].element.id)
            {
                console.log("Kerze wurde erfolgreich gedrückt!");
                
                // Entferne die erste Kerze im Array
                kerzenReihenfolge.shift();

                if(kerzenReihenfolge.length == 0)
                {
                    // Führe Easter Egg aus

                    // Verstecke alles
                    document.getElementsByClassName("name-pfp")[0].style.display = "none";
                    document.getElementsByClassName("candles")[0].style.display = "none";
                    document.getElementsByClassName("gebe-Tribute")[0].style.display = "none";

                    document.body.style.backgroundImage = "url('')";
                    document.body.style.backgroundColor = "black";

                    // Definiere Bild
                    var bild = document.getElementsByClassName("bild-pfp")[0];
                    bild.style.height = '10000px';
                    bild.style.width = '10000px';
                    bild.src = "https://i.ibb.co/rtDN6WS/DARK.png";
                }
            }
        }
    }
}

// Erstelle Kerzen für die eine Emoji-Kerze repräsentiert!
var kerze1 = new candle(document.getElementsByTagName("candle")[0]);
var kerze2 = new candle(document.getElementsByTagName("candle")[1]);
var kerze3 = new candle(document.getElementsByTagName("candle")[2]);
var kerze4 = new candle(document.getElementsByTagName("candle")[3]);
var kerze5 = new candle(document.getElementsByTagName("candle")[4]);

// Kerzen in ein Array hinzufügen
var kerzen = [kerze1, kerze2, kerze3, kerze4, kerze5];

// Kerzen testen
kerzen.forEach(element => {
    element.hasElement();
    element.getElement().addEventListener("click", element.clicked);
});

// Kerzen Code
var kerzenReihenfolge = [kerze1, kerze5, kerze4, kerze3, kerze3];

// Konsolen Nachricht, dass alles geladen ist
console.log("Kerzen Script %cerfolgreich %cgeladen!", "color: green;", "color: white;");