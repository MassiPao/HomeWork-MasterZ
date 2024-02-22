

//Array giorni della settimana
var GiorniSettimana = [ "Lunedì", "Martedì", "Mercoledì" , "Giovedì", "Venerdì", "Sabato", "Domenica"]

//Variabile mele rimanenti
var MeleRimanenti = 5;


//Ciclo FOR (definito il contatore i=0; SE i < dei giorni della settimana; ALLORA incrementa i di +1) {inizio operazioni}
for (i = 0; i < GiorniSettimana.length; i++  ) {

      
    console.log(GiorniSettimana[i] + "  " +  (i + 1));                //Stampa (il primo giorno della settimana[i] + "spazio" + (il numero associato));   
                                                                       // () + "" + .... concatenazione stinghe
    //Ordini esecuzione ciclo                                        
    if (MeleRimanenti > 2) {                                         // SE  (mele rimanenti > 2() ALLORA {
    console.log(" Ho "+ MeleRimanenti + " mele ");                   // stampa ("stringa" + variabile + stringa);
    
    if (GiorniSettimana[i] == "Mercoledì") {                         // SE (i è uguale a Mercoledì) {
        console.log(" oggi non ho voglia di mela");                  // stampa (" oggi non ho voglia di mela");
        console.log(" mi rimangono " + MeleRimanenti + " mele ");    // stampa (" mi rimangono " + MeleRimanenti + " mele ");
        console.log("--------");                                     // stampa stringa per separazione
        MeleRimanenti= MeleRimanenti                                 // variabile mele rimanenti resta ugale

    } else  {                                                         // ALTRIMENTI (se non i non é uguale a Mercoledì)
        MeleRimanenti--;                                              // Variabile mele rimanenti decrementa di -1:
            console.log (" mangio una mela ");                        // stampa stringa;
            console.log(" mi rimangono " + MeleRimanenti + " mele ");  //stampa stringa con decremento mele;
            console.log("--------");                                   // stampa stringa per separazione
        }
    } else if (MeleRimanenti = 2) {                                   //ALTRIMENTI (SE mele rimanenti NON è > di 2 e SE NON è mercoledi) {
        console.log(" Ho "+ MeleRimanenti + " mele ");                // stampa stringhe
        console.log(" Da oggi non posso mangiare mele");  
        console.log("--------");
        console.log("Ho 2 mele e non posso più mangiarle");
        break;                                                         //Interrompi il ciclo FOR

    }
            
    }
   
    
