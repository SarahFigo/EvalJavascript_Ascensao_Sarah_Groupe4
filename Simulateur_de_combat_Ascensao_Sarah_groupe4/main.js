class guerrier {
    constructor( name, pv, attaquer, precision){
        this.name = name;
        this.pv = pv;
        this.attaquer = attaquer;
        this.precision = precision;
    }
    
    getAttack() {
        console.log(this.name + " attaque avec " + this.attaquer + " de dégâts et " + this.precision + "% de précision.");
    }
}

const leon = new guerrier("Leon", 100, 30, 20);
const marc = new guerrier("Marc", 100, 10, 50);


leon.getAttack();
marc.getAttack();

function attaqueGuerrier(attaquant, defenseur) {
    
    let precision = Math.random() * 50;
    
    let degats = attaquant.attaquer;
    defenseur.pv -= degats;
    console.log(attaquant.name + " attaque " + defenseur.name + " et lui inflige " + degats + " dégâts.");
    
    if (precision <= attaquant.precision) {
        defenseur.pv -= attaquant.attaquer;
        console.log(attaquant.name + " attaque " + defenseur.name + " et lui inflige " + attaquant.attaquer + " dégâts. L'attaque a réussi !");
    } else{
        console.log(attaquant.name + " attaque " + defenseur.name + " mais manque son attaque. L'attaque a échoué.");
    }
}


function attaquer(guerrier1, guerrier2) {
    while (guerrier1.pv > 0 && guerrier2.pv > 0) {
        
        attaqueGuerrier(guerrier1, guerrier2);
        if (guerrier2.pv <= 0) {
            console.log(guerrier2.name + " est vaincu ! " + guerrier1.name + " gagne ! ");
            return;
        }

        
        attaqueGuerrier(guerrier2, guerrier1);
        if (guerrier1.pv <= 0) {
            console.log(guerrier1.name + " est vaincu ! " + guerrier2.name + " gagne ! ");
            return;
        }
    }
}


attaquer(leon, marc);

