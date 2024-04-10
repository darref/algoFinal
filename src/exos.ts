

export function bonjour(name:string) : void {
    console.log("Bonjour " , name , " !");
}

export function square(num:number) : number {
    return num*num;
}

export function isPair(num:number) : boolean{
    return num % 2 ===0;
}

export function minTwoNumbers(num1:number , num2:number) : number{
    if(num1>num2)
        return num2;
    else
        return num1;
}

export function minTab(nums: number[]): number {
    let tmp = Infinity; 
    for (let n of nums) { 
        if (n < tmp)
            tmp = n;
    }
    return tmp;
}

export let tabEleves:string[] = ["jeremi" , "jeremo" , "jerema"];
export let tabEleves2:string[] = ["jeremi" , "jeremo" , "jerema"];
export let tabEleves3:string[][] = [["jeremi", "ferrari"] , ["jeremi", "ferraro"] , ["jeremi", "ferrara"]];

export interface IEleve{
    prenom:string,
    nom:string,
    notesParMatieres:INote[]
}
export interface INote{
    matiere : string,
    notes : number[]
}
export let elevesTab:IEleve[] = 
[
    {prenom : "jeremi",nom : "ferrari",
    notesParMatieres : 
    [
        {matiere : "math" , notes:[12,5,20,13,17,2,4]},
        {matiere : "anglais" , notes:[12,5,20,13,17,2,4]}
    ]
    },
    {prenom : "jeremo",nom : "ferraro",
    notesParMatieres : 
    [
        {matiere : "espagnol" , notes:[12,5,20,13,17,2,4]},
        {matiere : "français" , notes:[4,1,3,5,6,4,8,2,3]}
    ]
    },
    {prenom : "jeremun",nom : "ferrarun",
    notesParMatieres : 
    [
        {matiere : "algo" , notes:[12,5,20,13,17,2,4]},
        {matiere : "artPlastique" , notes:[12,5,20,13,17,2,4]}
    ]
    }

]

export function showFirstnames(eleves:IEleve[]){
    eleves.forEach((e,i)=>{
        console.log(e.prenom);
    })
}

export function showAllnames(eleves:IEleve[]){
    eleves.forEach((e,i)=>{
        console.log(e.prenom ," ",  e.nom);
    })
}

export function showMattersnames(eleves:IEleve[]){
    eleves.forEach((e,i)=>{
        console.log(e.notesParMatieres.map(m =>{
            return m.matiere;
        }));
    })
}

export function moyenneAvantDernier(eleves:IEleve[]){
    if (eleves.length < 2) {
        throw new Error("Le tableau des élèves doit contenir au moins deux élèves pour calculer la moyenne de l'avant-dernier.");
    }

    // Récupérer les notes de l'avant-dernier élève
    const avantDernierNotes = eleves[eleves.length - 2].notesParMatieres.map(m => m.notes);

    // Calculer la moyenne des notes de l'avant-dernier élève
    let total = 0;
    let nombreDeNotes = 0;
    for (const notes of avantDernierNotes) {
        for (const note of notes) {
            total += note;
            nombreDeNotes++;
        }
    }

    // Vérifier si l'élève a au moins une note
    if (nombreDeNotes === 0) {
        throw new Error("L'avant-dernier élève n'a pas de notes.");
    }

    // Calculer la moyenne
    const moyenne = total / nombreDeNotes;
    return moyenne;
}
    
export function modifierNotesDesEleves(eleves: IEleve[]): number[][][] {
    for (const eleve of eleves) {
        for (const matiere of eleve.notesParMatieres) {
            for (let i = 0; i < matiere.notes.length; i++) {
                // Incrémenter la note de 1
                matiere.notes[i]++;
                // Si la note dépasse 20, la réduire à 20
                if (matiere.notes[i] > 20) {
                    matiere.notes[i] = 20;
                }
            }
        }
    }
    return eleves.map(e=>e.notesParMatieres.map(k=>k.notes));
}

export function moyenne(tab:number[]){
    let sum = tab.reduce((acc,curr)=>{
        return acc+ curr;
    })
    return sum / tab.length;
}

export function nbElevesPlusDixMoy(eleves : IEleve[]) : number
{
    let nbPlus = 0;
    eleves.forEach(e=>{
        e.notesParMatieres.forEach((k)=>{
            if(moyenne(k.notes) > 10)
                nbPlus++;
        })
    })
    return nbPlus;
}

const fruits = ['pomme', 'banane', 'poire', 'fraise', 'orange'];

fruits.map((e,i)=>{
    return e.length;
})

fruits.filter((e)=>{
    return e.length > 5 && e;
})

fruits.reduce((acc,curr)=>{
    return acc.concat(curr)
})

fruits.find(fruit => fruit.includes('a'));

fruits.some(fruit => fruit.includes('z'));

fruits.every(fruit => fruit.includes('e'));

fruits.sort();

const prix = [104, 23.3, 30.1, 240.9, 55];

const prixTVA = prix.map((e)=>{
    return e*1.2;
})

const index = prixTVA.filter(e=>{e>30})

const Centimes = prixTVA.map((e)=>{e.toString().split(".")[1]})
Centimes.reduce((acc,curr)=>{if(acc > curr)
    return acc;
})

const totalSum = prix.reduce((acc,curr)=>{
    return acc + curr;
})

//rugby
const line1 = ["110:37", "100:83", "120:91"];
const line2 = ["99:25", "86:56", "108:47", "100:42"];
const line3 = ["83:95"];

export function impactRugby():number {


    const forceLine1: number = line1.reduce((acc, curr) => {
        const [weight, force] = curr.split(":").map(Number);
        return Math.floor(acc + force * 1.5);
    }, 0);

    const forceLine2: number = line2.reduce((acc, curr) => {
        const [weight, force] = curr.split(":").map(Number);
        return Math.floor(acc + force);
    }, 0);

    const forceLine3: number = line3.reduce((acc, curr) => {
        const [weight, force] = curr.split(":").map(Number);
        return Math.floor(acc + force * 0.75);
    }, 0);

    const poidsLine1: number = line1.reduce((acc, curr) => {
        const [weight, force] = curr.split(":").map(Number);
        return acc + weight;
    }, 0);

    const poidsLine2: number = line2.reduce((acc, curr) => {
        const [weight, force] = curr.split(":").map(Number);
        return acc + weight;
    }, 0);

    const poidsLine3: number = line3.reduce((acc, curr) => {
        const [weight, force] = curr.split(":").map(Number);
        return acc + weight;
    }, 0);

    const impact: number = forceLine1 * poidsLine1 + forceLine2 * poidsLine2 + forceLine3 * poidsLine3;

    return impact;
}

export function rugby2(){
    const actions = "PPPPDPPTTPPDETPTEPEDTTTDPEDTDDT";

    let score = 0;
    let isPreviousActionE = false; // Variable pour suivre si l'action précédente était un essai

    for (let i = 0; i < actions.length; i++) {
        const action = actions[i];
        
        // Si l'action est un essai
        if (action === "E") {
            score += 5;
            isPreviousActionE = true; // Mettre à jour la variable pour indiquer qu'il y a eu un essai
        } 
        // Si l'action est une transformation et la précédente était un essai
        else if (action === "T" && isPreviousActionE) {
            score += 2;
            isPreviousActionE = false; // Réinitialiser la variable pour indiquer que la transformation a été utilisée
        } 
        // Si l'action est une pénalité ou un drop
        else if (action === "P" || action === "D") {
            score += 3;
            isPreviousActionE = false; // Réinitialiser la variable, car une pénalité ou un drop ne suit pas un essai
        }
    }

    console.log("Score total de l'équipe :", score);

}