// vieille dame
let vieille_dame = {
    age : 89,
    nom : {prénom : 'marie',Nom_De_Famile:'juste'
    },
    moral : 'mal',
    objet : 'cane',
    parler(nom){
        if(this.moral === 'mal'){
            alert(`vous me derangez et elle le frappe avec sa ${this.objet}`)
        } else {
            alert(`Bonjour ${nom}`)
        }
    }
};

// viel homme
let viel_homme = {
    nom : "jean-louis",
    adoucir(){
        vieille_dame.moral = 'bien'
    }
}
// affichage avec adoucir
vieille_dame.parler('monsieur jean-louis')
viel_homme.adoucir()
vieille_dame.parler('monsieur jean-louis')