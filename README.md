Gruppe--17

Design: 
For � pr�ve � vere s� effektiv som mogleg starta vi med � dele oss kvar for oss slik at ein kunne l�re seg tekst rendering, ein svg rendering og den siste audio track bytte. i tillegg begynte vi med � lage ein CSS layout og rendre HTML slik at en kunne bare legg til funksjonalitet senere.  Valgte her � benytte CSS-grid og CSS-flexbox sammen for � lage v�r eigen verson av layouten brukt som eksempel i oppg�ve teksten. Dette fordi vi syns den var oversiktlig nok til dette prosjektet og den er enkel � lage. I tillegg gjer den det enkelt � plassere innhold i kvar sin �boks� n�r funksjonaliteten kom seinare. Vi bestemte oss for � benytte knapper for � sende informasjon om kva tab du er i. for at det skal bli oversikktlig for brukeren bytter knappen farge til svart p� den tabben som er valgt. I kollonna til h�gre lagde vi tre forms med radiobuttons for � velje tema for blide, teksten og lyden. Eit form for kvar kattegori. Vi valgte denne m�ten sidan det er vanleg og forst�eleg for brukaren at radiobuttons held variable over lengre tid. 

Det var krav i oppg�ven � ha responsivt Webdesign. Med krav om viewport, media-queries, skalering av bilder og flexibel layout. Viewport er default i React, men vi la til media-queries slik at for store skjermer har vi eit breidt layout. Med 3 koloner og 3 rader mens for mobil har vi eit smalt layout med 2 koloner og 4 rader. Siden har mobil layout som default men blir st�rre og breiare for st�rre skjermer. For flexibelt layout brukte vi berre ein st�rrelses definisjon i grid som heiter fractions. Denne st�rrelsen tar utgangspunkt i st�rrelsen p� skjermen og gir kvar �boks� i griddet ein st�rrelse utifr� tilgjengelig plass, men lik st�rrelse i forhold til kvarandre.

Implementasjon:

For � vise bilde p� skjerm var planen � kunne konvertere SVG data fra fil over til Jsx data og bruke Ajax for � kalle dette inn i img diven i Img komponenten. Planen for tekst var � parse tekstfiler over til Json objekter for s� � kunne lagre dei og deretter f� det ut p� skjerm. Vi har f�tt til � parse teksten til objekt men, klarte ikkje � f� presentert dei p� sida. Audio elementa var derimot enklare � forholde seg til. Lyden rendra vi som eit vanleg html �objekt� der vi berre bytta ut pathen til lydfila for � bytte song. Alle path�s blei lagra i eit array. Der vi hadde ein array for kvar kategori. N�r ein brukte tabsa gjekk ein fram og tilbake i arrayet og n�r ein bytta tema til lyden s� bytta ein array som ein traverserer.


   





Testing:

For krav til testing skule vi teste at applikasjonen ser godt ut p� b�de mobil horisontalt/vertikalt i tillegg til vanleg pc-skjerm. Vi testet da selvf�lgelig p� PC heile tida undervegs for � skjekke at alt blei som det skulle. I tillegg benytta vi oss av mobile view optionen som er tilgjengelig i konsollet, i alle fall for firefox og chrome. Der fekk vi testa b�de horisontalt og vertikalt for ein del mobil templates i tillegg til pads. S� Sida skal teoretisk sett sj� akseptabel ut p� dei fleste smarttelefonar og nettbrett. 

Materialet som blir/skulle blitt vist er for det meste henta fr� nettet. Lyd er henta fr�: �bensound.com.�, svg filene er henta fr� �publicdomaincvectors.org� og tekstane er henta fr� azlyrics.com.
