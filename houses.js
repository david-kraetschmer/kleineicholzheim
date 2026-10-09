// Alle Orte der Karte. Koordinaten gelten für die Kartenfläche (Bildpunkte, siehe viewBox in index.html).
// x,y = Punkt · tx,ty = Beginn des Beschriftungstextes · lx,ly = Startpunkt der gepunkteten Linie
// Tipp: index.html?edit öffnen, auf die Karte klicken -> Koordinaten erscheinen unten links.
// Zeilenumbruch in untertitel/adresse: \n · Absätze im text: Leerzeile · foto: z. B. "images/synagoge.jpg"
const P="Hier folgt dein Text.";
window.HOUSES = [
 {id:"samuel", kategorie:"Gewerbe", titel:"Samuel Böttigheimer", untertitel:"Metzgerei und Viehhandel", adresse:"Odenwaldstraße 7", x:1575,y:547, tx:1290,ty:310, lx:1400,ly:427, text:P},
 {id:"synagoge", kategorie:"Gemeinde", titel:"Synagoge", untertitel:"", adresse:"Odenwaldstraße 6", x:1634,y:610, tx:2137,ty:286, lx:2127,ly:278, text:P},
 {id:"religionsschule", kategorie:"Gemeinde", titel:"Religionsschule mit Lehrerwohnung", untertitel:"", adresse:"Odenwaldstraße 8", x:1627,y:637, tx:2147,ty:413, lx:2137,ly:410, text:P},
 {id:"baer", kategorie:"Gewerbe", titel:"Daniel und Mathilde Bär", untertitel:"Textilwarengeschäft", adresse:"Seckacher Straße 3", x:1658,y:674, tx:2202,ty:519, lx:2193,ly:515, text:P},
 {id:"rosenstock", kategorie:"Gewerbe", titel:"Leo Rosenstock", untertitel:"Stoffhandel", adresse:"Seckacher Straße 2", x:1658,y:710, tx:2277,ty:693, lx:2270,ly:685, text:P},
 {id:"engel", kategorie:"Gewerbe", titel:"Gasthaus „zum Engel“", untertitel:"Emanuel und Fanny Kahn", adresse:"abgerissen", x:1600,y:711, tx:2009,ty:799, lx:2005,ly:790, text:P},
 {id:"lissberger-max", kategorie:"Gewerbe", titel:"Max und Laura Lissberger", untertitel:"Textilwarengeschäft", adresse:"Odenwaldstraße 14", x:1622,y:737, tx:2089,ty:936, lx:2085,ly:920, text:P},
 {id:"lissberger-malchen", kategorie:"Gewerbe", titel:"Malchen Lissberger", untertitel:"Gemischtwarenhandel", adresse:"Odenwaldstraße 16", x:1593,y:738, tx:2153,ty:1080, lx:2150,ly:1070, text:P},
 {id:"theodor", kategorie:"Gewerbe", titel:"Theodor Böttigheimer", untertitel:"Pferdehandel", adresse:"Odenwaldstraße 18", x:1584,y:759, tx:1869,ty:1068, lx:1866,ly:1055, text:P},
 {id:"elise", kategorie:"Wohnhaus", titel:"Elise Böttigheimer", untertitel:"", adresse:"Odenwaldstraße 22\nabgerissen", x:1573,y:798, tx:1796,ty:1201, lx:1793,ly:1185, text:P},
 {id:"moses", kategorie:"Gewerbe", titel:"Moses Böttigheimer", untertitel:"Gastwirtschaft „zur Krone“\nVieh- und Pferdehandel, Schnapsbrennerei", adresse:"Odenwaldstraße 23", x:1535,y:812, tx:869,ty:743, lx:1075,ly:738, text:P},
 {id:"elsa-berta", kategorie:"Wohnhaus", titel:"Elsa und Berta Böttigheimer", untertitel:"", adresse:"Odenwaldstraße 27", x:1515,y:885, tx:866,ty:941, lx:1150,ly:935, text:P},
 {id:"kaufmann", kategorie:"Gewerbe", titel:"Simon Kaufmann und Hedwig Hirschfeld", untertitel:"Seifensiederei", adresse:"Odenwaldstraße 30", x:1505,y:918, tx:926,ty:1112, lx:1143,ly:1083, text:P},
 {id:"mikwe", kategorie:"Gemeinde", titel:"Mikwe", untertitel:"", adresse:"", x:1495,y:678, tx:1064,ty:589, lx:1138,ly:582, text:P},
 {id:"westheimer", kategorie:"Wohnhaus", titel:"Westheimer", untertitel:"", adresse:"Teichweg 1", x:1476,y:1357, tx:1508,ty:1243, lx:1503,ly:1237, text:P}
];
