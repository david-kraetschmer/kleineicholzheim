// Alle Orte der Karte. Koordinaten gelten für die Kartenfläche (Einheiten der SVG-Zeichnung, siehe viewBox).
// x,y = Lage des Punktes auf der Karte. Beschriftung und gepunktete Linie werden automatisch platziert (tx,ty werden nicht mehr benötigt).
// Zeilenumbruch in untertitel/adresse: \n · Absätze im text: Leerzeile · foto: z. B. "images/synagoge.jpg"
const P="Hier folgt dein Text.";
window.HOUSES = [
 {id:"samuel", kategorie:"Gewerbe", titel:"Samuel und Hermine Böttigheimer", untertitel:"Metzgerei und Viehhandel", adresse:"Odenwaldstraße 7", x:1434,y:653, text:P},
 {id:"synagoge", kategorie:"Gemeinde", titel:"Synagoge", untertitel:"", adresse:"Odenwaldstraße 6", x:1509,y:734, text:P},
 {id:"religionsschule", kategorie:"Gemeinde", titel:"Religionsschule mit Lehrerwohnung", untertitel:"", adresse:"Odenwaldstraße 8", x:1501,y:770, text:P},
 {id:"baer", kategorie:"Gewerbe", titel:"Daniel und Mathilde Bär", untertitel:"Textilwarengeschäft", adresse:"Seckacher Straße 3", x:1541,y:818, text:P},
 {id:"rosenstock", kategorie:"Gewerbe", titel:"Leo Rosenstock", untertitel:"Stoffhandel", adresse:"Seckacher Straße 2", x:1541,y:864, text:P},
 {id:"engel", kategorie:"Gewerbe", titel:"Emanuel und Fanny Kahn", untertitel:"Gasthaus „zum Engel“", adresse:"abgerissen", x:1466,y:864, text:P},
 {id:"lissberger-max", kategorie:"Gewerbe", titel:"Max und Laura Lissberger", untertitel:"Textilwarengeschäft", adresse:"Odenwaldstraße 14", x:1494,y:897, text:P},
 {id:"lissberger-malchen", kategorie:"Gewerbe", titel:"Malchen Lissberger", untertitel:"Gemischtwarenhandel", adresse:"Odenwaldstraße 16", x:1457,y:899, text:P},
 {id:"theodor", kategorie:"Gewerbe", titel:"Theodor Böttigheimer", untertitel:"Pferdehandel", adresse:"Odenwaldstraße 18", x:1445,y:926, text:P},
 {id:"elise", kategorie:"Wohnhaus", titel:"Elise Böttigheimer", untertitel:"", adresse:"Odenwaldstraße 22\nabgerissen", x:1431,y:976, text:P},
 {id:"moses", kategorie:"Gewerbe", titel:"Moses Böttigheimer", untertitel:"Gastwirtschaft „zur Krone“\nVieh- und Pferdehandel, Schnapsbrennerei", adresse:"Odenwaldstraße 23", x:1382,y:996, text:P},
 {id:"elsa-berta", kategorie:"Wohnhaus", titel:"Elsa und Berta Böttigheimer", untertitel:"", adresse:"Odenwaldstraße 27", x:1356,y:1090, text:P},
 {id:"kaufmann", kategorie:"Gewerbe", titel:"Simon Kaufmann und Hedwig Hirschfeld", untertitel:"Seifensiederei", adresse:"Odenwaldstraße 30", x:1343,y:1133, text:P},
 {id:"mikwe", kategorie:"Gemeinde", titel:"Mikwe", untertitel:"", adresse:"", x:1330,y:822, text:P},
 {id:"westheimer", kategorie:"Wohnhaus", titel:"Westheimer", untertitel:"", adresse:"Teichweg 1", x:1306,y:1700, text:P}
];
