function ImprimeTabuleiro() 
{
    var tab1 = "# # # # ";
    var tab2 = " # # # #";
    var tamTabuleiro;
    tamTabuleiro = prompt ("Tamanho do tabuleiro:")
    console.log (tamTabuleiro);

    for (let index = 0; index < tamTabuleiro; index++) {
        
        if (index % 2 == 0) {
            console.log (tab1);
        } else 
        {
            console.log (tab2);
        }
    }
}

ImprimeTabuleiro ();