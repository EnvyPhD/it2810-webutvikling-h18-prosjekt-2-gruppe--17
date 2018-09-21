Gruppe--17

Design: 
For å prøve å vere så effektiv som mogleg starta vi med å dele oss kvar for oss slik at ein kunne lære seg tekst rendering, ein svg rendering og den siste audio track bytte. i tillegg begynte vi med å lage ein CSS layout og rendre HTML slik at en kunne bare legg til funksjonalitet senere.  Valgte her å benytte CSS-grid og CSS-flexbox sammen for å lage vår eigen verson av layouten brukt som eksempel i oppgåve teksten. Dette fordi vi syns den var oversiktlig nok til dette prosjektet og den er enkel å lage. I tillegg gjer den det enkelt å plassere innhold i kvar sin «boks» når funksjonaliteten kom seinare. Vi bestemte oss for å benytte knapper for å sende informasjon om kva tab du er i. for at det skal bli oversikktlig for brukeren bytter knappen farge til svart på den tabben som er valgt. I kollonna til høgre lagde vi tre forms med radiobuttons for å velje tema for blide, teksten og lyden. Eit form for kvar kattegori. Vi valgte denne måten sidan det er vanleg og forståeleg for brukaren at radiobuttons held variable over lengre tid. 

Det var krav i oppgåven å ha responsivt Webdesign. Med krav om viewport, media-queries, skalering av bilder og flexibel layout. Viewport er default i React, men vi la til media-queries slik at for store skjermer har vi eit breidt layout. Med 3 koloner og 3 rader mens for mobil har vi eit smalt layout med 2 koloner og 4 rader. Siden har mobil layout som default men blir større og breiare for større skjermer. For flexibelt layout brukte vi berre ein størrelses definisjon i grid som heiter fractions. Denne størrelsen tar utgangspunkt i størrelsen på skjermen og gir kvar «boks» i griddet ein størrelse utifrå tilgjengelig plass, men lik størrelse i forhold til kvarandre.

Implementasjon:

For å vise bilde på skjerm var planen å kunne konvertere SVG data fra fil over til Jsx data og bruke Ajax for å kalle dette inn i img diven i Img komponenten. Planen for tekst var å parse tekstfiler over til Json objekter for så å kunne lagre dei og deretter få det ut på skjerm. Vi har fått til å parse teksten til objekt men, klarte ikkje å få presentert dei på sida. Audio elementa var derimot enklare å forholde seg til. Lyden rendra vi som eit vanleg html «objekt» der vi berre bytta ut pathen til lydfila for å bytte song. Alle path’s blei lagra i eit array. Der vi hadde ein array for kvar kategori. Når ein brukte tabsa gjekk ein fram og tilbake i arrayet og når ein bytta tema til lyden så bytta ein array som ein traverserer.


   





Testing:

For krav til testing skule vi teste at applikasjonen ser godt ut på både mobil horisontalt/vertikalt i tillegg til vanleg pc-skjerm. Vi testet da selvfølgelig på PC heile tida undervegs for å skjekke at alt blei som det skulle. I tillegg benytta vi oss av mobile view optionen som er tilgjengelig i konsollet, i alle fall for firefox og chrome. Der fekk vi testa både horisontalt og vertikalt for ein del mobil templates i tillegg til pads. Så Sida skal teoretisk sett sjå akseptabel ut på dei fleste smarttelefonar og nettbrett. 

Materialet som blir/skulle blitt vist er for det meste henta frå nettet. Lyd er henta frå: «bensound.com.», svg filene er henta frå «publicdomaincvectors.org» og tekstane er henta frå azlyrics.com.
