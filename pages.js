// Inhalte der Textseiten. Jede Seite hat: titel, untertitel (optional) und eine Liste von Blöcken.
// Blocktypen:
//   {typ:"text", text:"Absatz 1\n\nAbsatz 2"}
//   {typ:"ueberschrift", text:"Zwischenüberschrift"}
//   {typ:"bild", src:"images/beispiel.jpg", alt:"Beschreibung", unterschrift:"Quelle / Jahr"}
//   {typ:"info", titel:"Auf einen Blick", zeilen:["1820: …","1933: …"]}
window.PAGES = {
 "juedische-geschichte-in-sueddeutschland": {
  titel:"Jüdische Geschichte in Süddeutschland", untertitel:"",
  bloecke:[{typ:"text", text:"Die jüdische Geschichte in Deutschland reicht bis in die Zeit des Römischen Reiches zurück – jüdisches Leben ist etwa im 4. Jahrhundert in Köln belegt – und setzte sich im Mittelalter ab dem 10. Jahrhundert mit der Gründung zahlreicher Gemeinden fort. Über tausend Jahre lang waren jüdische Gemeinden eng mit der deutschen Geschichte und Kultur verwoben. In vielen ländlichen Regionen wie Baden, Württemberg, der Pfalz und Hessen gab es über Jahrhunderte hinweg jüdisches Leben. Trotz Phasen der Integration und aktiver Mitgestaltung des gesellschaftlichen Lebens waren Juden immer wieder Diskriminierung, Misstrauen und Verfolgung ausgesetzt.\n\nBereits im Mittelalter versuchte die christliche Kirche, sich bewusst vom Judentum abzugrenzen. Juden wurden zur Kennzeichnung gezwungen und von vielen Berufen ausgeschlossen. Im 13. und 14. Jahrhundert verstärkten sich die antijüdischen Ressentiments durch Verleumdungen, etwa den Vorwurf der Hostienschändung (z. B. in Lauda-Königshofen 1235) oder des Ritualmords (Endingen am Kaiserstuhl 1462). Diese Anschuldigungen führten zu gewaltsamen Pogromen und der Ermordung tausender Juden in der Region – besonders verheerend waren die sogenannten Rintfleischpogrome von 1298, bei denen unter dem Vorwand einer Hostienschändung in Rothenburg ob der Tauber über 20.000 Juden in mehr als 140 Ortschaften brutal ermordet wurden.\n\nAuch während der Pestzeit im 14. Jahrhundert gab es Verfolgungen. Juden wurden fälschlicherweise der Brunnenvergiftung beschuldigt, was zu einer der größten Pogromwellen vor dem Holocaust führte. In Freiburg wurden 1349 zahlreiche Juden verbrannt. Viele jüdische Gemeinden entlang des Neckars, in Franken und in der Pfalz wurden ausgelöscht.\n\nNach diesen Verfolgungswellen ließen sich im 17. und 18. Jahrhundert wieder verstärkt jüdische Familien in südwestdeutschen Dörfern nieder. Sie bildeten sogenannte „Landjudenschaften“ und lebten vor allem von Handel, Vieh- und Pferdehandel oder als Hausierer. Doch ihre Existenz war unsicher. Sie mussten Schutzbriefe erwerben, um bleiben zu dürfen, und hohe Abgaben an die Landesherren zahlen. Wer diese nicht aufbringen konnte, verlor seine Ansiedlungsrechte und musste als Betteljuden umherziehen.\n\nMit den Reformen unter Kaiser Joseph II. im 18. Jahrhundert verbesserten sich die Bedingungen für Juden in den habsburgischen Gebieten. Doch in vielen Regionen Südwestdeutschlands blieben sie rechtlich benachteiligt. Erst mit der Gleichstellung im 19. Jahrhundert konnten Juden auch in Städten Berufe ergreifen und ein gesicherteres Leben führen.\n\nTrotz dieser Fortschritte hielt der Antisemitismus in der Bevölkerung an. Der Nationalsozialismus beendete schließlich die jüdische Geschichte in vielen Dörfern Südwestdeutschlands gewaltsam. In Orten wie Kleineicholzheim wurde die jüdische Gemeinde vollständig ausgelöscht – ein Schicksal, das zahlreiche jüdische Gemeinden der Region teilten."}]
 },
 "juedische-gemeinde-in-kleineicholzheim": {
  titel:"Jüdische Gemeinde in Kleineicholzheim", untertitel:"",
  bloecke:[{typ:"text", text:"Hier folgt dein Text."},
   {"typ": "diagramm", "titel": "Bevölkerungsentwicklung der jüdischen Gemeinde", "x": [1853, 1952], "y": [0, 300], "yStep": 50, "xTicks": [1860], "xStep": 20, "serien": [{"name": "Gesamtbevölkerung", "hell": true, "nameX": 1904, "nameDy": -16, "punkte": [[1856, 295], [1874, 258], [1882, 266], [1892, 245], [1902, 198], [1912, 191], [1926, 206], [1934, 201], [1940, 160], [1950, 252]]}, {"name": "Jüdische Bevölkerung", "marken": true, "nameX": 1906, "nameDy": -26, "punkte": [[1855, 119], [1864, 107], [1875, 93], [1880, 98], [1900, 74], [1910, 51], [1925, 38], [1933, 28], [1940.6, 15, "Sept. 1940: 15", "start", "", -8], [1940.9, 0, "Nov. 1940: 0", "start", "ende", -9]]}], "hinweis": "Jüdische Bevölkerung: Einwohnerzahlen der angegebenen Jahre. Gesamtbevölkerung: ungefähre Werte."}]
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
