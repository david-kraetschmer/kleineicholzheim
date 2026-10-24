// Inhalte der Textseiten. Jede Seite hat: titel, untertitel (optional) und eine Liste von Blöcken.
// Blocktypen:
//   {typ:"text", text:"Absatz 1\n\nAbsatz 2"}
//   {typ:"ueberschrift", text:"Zwischenüberschrift"}
//   {typ:"bild", src:"images/beispiel.jpg", alt:"Beschreibung", unterschrift:"Quelle / Jahr"}
//   {typ:"info", titel:"Auf einen Blick", zeilen:["1820: …","1933: …"]}
window.PAGES = {
 "juedische-geschichte-in-sueddeutschland": {
  titel:"Jüdische Geschichte in Süddeutschland", untertitel:"Ein Überblick",
  bloecke:[
   {typ:"text", text:"Jüdisches Leben in Süddeutschland reicht bis in die Spätantike und das frühe Mittelalter zurück. Mit den Städten Speyer, Worms und Mainz am Rhein entstanden im Hochmittelalter bedeutende Zentren jüdischer Gelehrsamkeit, deren Gemeinden später unter dem Namen SchUM bekannt wurden."},
   {typ:"ueberschrift", text:"Mittelalter: Ansiedlung und Verfolgung"},
   {typ:"text", text:"Jüdische Gemeinden bestanden in vielen Städten der Region. Ihre Lage war unsicher: Immer wieder kam es zu Verfolgungen, besonders zur Zeit der Kreuzzüge (1096) und während der Pestpogrome (1348–1350). Viele Gemeinden wurden vernichtet oder vertrieben."},
   {typ:"ueberschrift", text:"Frühe Neuzeit: Leben auf dem Land"},
   {typ:"text", text:"Nach den Vertreibungen aus den Städten ließen sich Jüdinnen und Juden vielfach in Dörfern und Kleinstädten nieder. So entstand das Landjudentum, das für Süddeutschland, auch für Baden, Württemberg und Franken, prägend wurde. Viele Familien lebten vom Vieh-, Pferde- und Warenhandel und standen im engen Austausch mit ihren christlichen Nachbarn."},
   {typ:"ueberschrift", text:"19. Jahrhundert: Rechtliche Gleichstellung"},
   {typ:"text", text:"Im 19. Jahrhundert erhielten Jüdinnen und Juden schrittweise bürgerliche Rechte. In Baden wurde die rechtliche Gleichstellung 1862 erreicht. Viele zogen in der Folge in die Städte, die Dorfgemeinden wurden kleiner. Wer blieb, war oft als Händler, Metzger oder Gastwirt tätig."},
   {typ:"ueberschrift", text:"1933 bis 1945: Entrechtung und Vernichtung"},
   {typ:"text", text:"Nach 1933 wurden Jüdinnen und Juden aus dem öffentlichen Leben ausgeschlossen und entrechtet. Beim Novemberpogrom 1938 wurden auch in Süddeutschland Synagogen zerstört oder geschändet. 1940 wurden die badischen Jüdinnen und Juden nach Gurs in Südfrankreich deportiert, später folgten weitere Deportationen in die Vernichtungslager im Osten. Viele Gemeinden wurden ausgelöscht."},
   {typ:"info", titel:"Auf einen Blick", zeilen:["1096: Verfolgungen in Speyer, Worms und Mainz","1348–1350: Pestpogrome","1862: Rechtliche Gleichstellung in Baden","1938: Novemberpogrom","1940: Deportation der badischen Juden nach Gurs"]}
  ]
 },
 "juedische-gemeinde-in-kleineicholzheim": {
  titel:"Jüdische Gemeinde in Kleineicholzheim", untertitel:"",
  bloecke:[{typ:"text", text:"Hier folgt dein Text."}]
 },
 "impressum": {
  titel:"Impressum", untertitel:"",
  bloecke:[{typ:"text", text:"Angaben gemäß § 5 DDG\n\nName: [Vor- und Nachname eintragen]\nAnschrift: [Straße, PLZ Ort eintragen]\nE-Mail: [E-Mail-Adresse eintragen]"}]
 },
 "ns-zeit-und-das-ende-der-gemeinde": {
  titel:"NS-Zeit und das Ende der Gemeinde", untertitel:"",
  bloecke:[{typ:"text", text:"Hier folgt dein Text."}]
 }
};
