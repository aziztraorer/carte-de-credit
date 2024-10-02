const numcarte=document.querySelector('.numcart')
const nompro=document.querySelector('.nom')
const datedexp = document.querySelector('.dateexp')
const cvc = document.querySelector('.cvc')
const form=document.querySelector('form')
const verifer=document.querySelector('.verifier')
const inputlabel = document.querySelectorAll('.desactive')
const btn=document.querySelector('button')
// variable des input de la carte 
const nomdupro =document.getElementById("nom")
const numerodelacarte =document.getElementById("numero")
const mois=document.querySelector('.mois')
const annee=document.querySelector('.annee')
const cvcinpute =document.getElementById("cvc")
//les varaibale contenant les information saisie
let nom ="";
let numero="";
let moisex="";
let annees="";
let cvcs="";
nomdupro.addEventListener('input',(e)=>{
    nom=e.target.value
})

numerodelacarte.addEventListener('input',(e)=>{
    numero=e.target.value
})
limite(numerodelacarte,16)

mois.addEventListener('input',(e)=>{
    moisex=e.target.value
})
limite(mois,2)
annee.addEventListener('input',(e)=>{
    annees=e.target.value
})
limite(annee,2)
cvcinpute.addEventListener('input',(e)=>{
    cvcs=e.target.value
})
limite(cvcinpute,3)

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(nom=="" || numero=="" || moisex=="" || annees=="" || cvcs==""){
        alert('Tous les champs sont obligatoires')
        return false
        
    }
    if (nom||numero||moisex||annees||cvcs) {
        verifer.style.display='block'
       inputlabel.forEach(label => {
        label.classList.add('ckeckactive')
       });
       btn.innerHTML=`Continue`
       btn.addEventListener('click',()=>{
        window.location.href="index.html"
       })
       
    }
    nompro.textContent=nom
    numcarte.textContent=numero.replace(/(\d{4})(?=\d)/g,'$1 ') //ici j'ajoute les espace apres chaque 4 chiffre saisie
    datedexp.textContent=`${moisex}/${annees}`
    cvc.textContent=cvcs
    return false
})


function limite(v,n) {
    v.addEventListener('keypress',(e)=>{
        if (v.value.length>=n) {
            e.preventDefault()
        }
    })
}

function vide(a) {
    a.addEventListener('input',()=>{
        a.value=a.this.value.remplace(/[a-zA-Z]/g,'')
    })
}