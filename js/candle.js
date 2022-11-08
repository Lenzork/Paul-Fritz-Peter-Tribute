/*
    "Simple Candle click"-easter egg Script
    By Lukas
*/

var globalID = 0;

// Einfache Kerze
class candle
{
    constructor() {
        this.id = globalID;
        
        globalID++;
    }
}