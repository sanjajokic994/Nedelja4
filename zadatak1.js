let pokemon1={
name: 'Bulbasaur',
type:'grass',
abilities:'overgrow',
image:'https://img.pokemondb.net/artwork/large/bulbasaur.jpg',
stats:{attack:49,
     defense:49,
     speed:45
 }}

let pokemon2={
name: 'Charizard',
type:'fire',
abilities:'blaze',
image:'https://img.pokemondb.net/artwork/large/charizard.jpg',
stats:{
    attack:84,
    defense:78,
    speed: 100
}}

let pokemon3={
name: 'Jigglypuff',
type:'fairy',
abilities:'cute charm, competitive',
image:'https://img.pokemondb.net/artwork/large/jigglypuff.jpg',
stats:{
    attack:45,
    defense:20,
    speed:20
}}

let pokemon4={
name: 'Chikorita',
type:'grass',
abilities:'overgrow',
image:'https://img.pokemondb.net/artwork/large/chikorita.jpg',
stats:{
    attack:49,
    defense:65,
    speed:45
}}

let pokemon5={
name: 'Totodile',
type:'water',
abilities:'torrent',
image:'https://img.pokemondb.net/artwork/large/totodile.jpg',
stats:{
    attack:65,
    defense:64,
    speed:43
}}

let pokemon6={
name: 'Nidoran',
type:'poision',
abilities:'poision point, rivalry',
image:'https://img.pokemondb.net/artwork/large/nidoran-m.jpg',
stats:{
    attack:57,
    defense:40,
    speed:50
}}

let sviPokemoni=[pokemon1,pokemon2,pokemon3,pokemon4,pokemon5,pokemon6];

function pokemoni(arr){
    let niz=[];
   for(let i=0; i<arr.length; i++){
let el=arr[i].abilities;
niz.push(arr[i].abilities);

   }
   return niz;
}
console.log(pokemoni(sviPokemoni))
console.log('-----------------------------------')

sviPokemoni.sort((a,b) =>{
return a.stats.speed-b.stats.speed
})    
console.log(sviPokemoni)
console.log('-------------------------------------')

 function najjaciPokemon(sviPokemoni){
     sviPokemoni.sort((a,b)=>{
         return b.stats.attack-a.stats.attack
     })
     
 return pobednik= sviPokemoni[0].name
 }
console.log(najjaciPokemon(sviPokemoni))

console.log('------------------------------------------------------------------------------')
let container=document.querySelector(".wrapper");
let dugmic1=document.querySelector('#prikaz');
let dugmic2=document.querySelector('#pobednik');
let pokemon=document.createElement('div');
let pOpis=document.createElement('p');
let pPobednik=document.createElement('p');

dugmic1.addEventListener('click',()=>{
    for(let i=0;i<sviPokemoni.length;i++){     
      pOpis.innerHTML+='Name: '+sviPokemoni[i].name+';   Type:  '+sviPokemoni[i].type+';  Abilities:  '+sviPokemoni[i].abilities+ '<br/>'+
       '<img src=" '+ sviPokemoni[i].image+' " style: width=110px, height=100px > '+'<br/>'
   
    }

    
})


dugmic2.addEventListener('click',()=>{
    pPobednik.innerHTML=najjaciPokemon(sviPokemoni).toUpperCase()
})


container.appendChild(dugmic1);
container.appendChild(dugmic2);
container.appendChild(pokemon);
pokemon.appendChild(pOpis);
container.appendChild(pPobednik);

