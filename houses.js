// Alle Orte. Koordinaten beziehen sich auf die Kartenfläche (1530 x 934).
// x,y = Punkt · tx,ty = Beginn des Beschriftungstextes · lx,ly = Startpunkt der gepunkteten Linie
// Tipp: index.html?edit öffnen, auf die Karte klicken -> Koordinaten erscheinen unten links.
// Zeilenumbruch in untertitel/adresse: \n · Absätze im text: Leerzeile · foto: z. B. "images/synagoge.jpg"
const P="Hier folgt dein Text.";
window.HOUSES = [
 {id:"samuel", kategorie:"Gewerbe", titel:"Samuel Böttigheimer", untertitel:"Metzgerei und Viehhandel", adresse:"Odenwaldstraße 7", x:710,y:254, tx:472,ty:58, lx:563,ly:155, text:P},
 {id:"synagoge", kategorie:"Gemeinde", titel:"Synagoge", untertitel:"", adresse:"Odenwaldstraße 6", x:759,y:307, tx:1177,ty:37, lx:1168,ly:31, text:P},
 {id:"religionsschule", kategorie:"Gemeinde", titel:"Religionsschule mit Lehrerwohnung", untertitel:"", adresse:"Odenwaldstraße 8", x:753,y:329, tx:1186,ty:142, lx:1180,ly:136, text:P},
 {id:"baer", kategorie:"Gewerbe", titel:"Daniel und Mathilde Bär", untertitel:"Textilwarengeschäft", adresse:"Seckacher Straße 3", x:779,y:360, tx:1231,ty:231, lx:1226,ly:230, text:P},
 {id:"rosenstock", kategorie:"Gewerbe", titel:"Leo Rosenstock", untertitel:"Stoffhandel", adresse:"Seckacher Straße 2", x:779,y:391, tx:1294,ty:376, lx:1290,ly:370, text:P},
 {id:"engel", kategorie:"Gewerbe", titel:"Gasthaus „zum Engel“", untertitel:"Emanuel und Fanny Kahn", adresse:"abgerissen", x:731,y:390, tx:1070,ty:464, lx:1068,ly:458, text:P},
 {id:"lissberger-max", kategorie:"Gewerbe", titel:"Max und Laura Lissberger", untertitel:"Textilwarengeschäft", adresse:"Odenwaldstraße 14", x:749,y:411, tx:1137,ty:578, lx:1135,ly:568, text:P},
 {id:"lissberger-malchen", kategorie:"Gewerbe", titel:"Malchen Lissberger", untertitel:"Gemischtwarenhandel", adresse:"Odenwaldstraße 16", x:725,y:413, tx:1191,ty:698, lx:1187,ly:684, text:P},
 {id:"theodor", kategorie:"Gewerbe", titel:"Theodor Böttigheimer", untertitel:"Pferdehandel", adresse:"Odenwaldstraße 18", x:717,y:430, tx:954,ty:689, lx:952,ly:678, text:P},
 {id:"elise", kategorie:"Wohnhaus", titel:"Elise Böttigheimer", untertitel:"", adresse:"Odenwaldstraße 22\nabgerissen", x:708,y:463, tx:893,ty:799, lx:890,ly:788, text:P},
 {id:"moses", kategorie:"Gewerbe", titel:"Moses Böttigheimer", untertitel:"Gastwirtschaft „zur Krone“\nVieh- und Pferdehandel, Schnapsbrennerei", adresse:"Odenwaldstraße 23", x:676,y:475, tx:120,ty:416, lx:292,ly:412, text:P},
 {id:"elsa-berta", kategorie:"Wohnhaus", titel:"Elsa und Berta Böttigheimer", untertitel:"", adresse:"Odenwaldstraße 27", x:659,y:536, tx:119,ty:583, lx:357,ly:577, text:P},
 {id:"kaufmann", kategorie:"Gewerbe", titel:"Simon Kaufmann und Hedwig Hirschfeld", untertitel:"Seifensiederei", adresse:"Odenwaldstraße 30", x:652,y:564, tx:169,ty:725, lx:350,ly:698, text:P},
 {id:"mikwe", kategorie:"Gemeinde", titel:"Mikwe", untertitel:"", adresse:"", x:643,y:362, tx:284,ty:290, lx:345,ly:286, text:P},
 {id:"westheimer", kategorie:"Wohnhaus", titel:"Westheimer", untertitel:"", adresse:"Teichweg 1", x:619,y:909, tx:654,ty:835, lx:650,ly:835, text:P}
];
