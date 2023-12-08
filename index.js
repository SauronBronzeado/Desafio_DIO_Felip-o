
// Desafio Classificador de nível de Herói

// Declaração Variaveis
let NomeHeroi  = "Sauron-Bronzeado";
let NivelAtual = " "
let PontosExperiencia = 10005;

// Declaração Constantes
const NivelFerro        =     0;
const NivelBronze       =     1001;
const NivelPrata        =     2001;
const NivelOuro         =     6001;
const NivelPlatina      =     7001;
const NivelAscendente   =     8001;
const NivelImortal      =     9001;
const NivelRadiante     =     10001;

// Atribuição de Nivel
if(PontosExperiencia >= NivelRadiante) NivelAtual = "Radiante";
else if(PontosExperiencia >= NivelImortal) NivelAtual = "Imortal";
else if(PontosExperiencia >= NivelAscendente) NivelAtual = "Ascendente";
else if(PontosExperiencia >= NivelPlatina) NivelAtual = "Platina";
else if(PontosExperiencia >= NivelOuro) NivelAtual = "Ouro";
else if(PontosExperiencia >= NivelPrata) NivelAtual = "Prata";
else if(PontosExperiencia >= NivelBronze) NivelAtual = "Bronze";
else NivelAtual = "Ferro";

// Saida Terminal
console.log("O Herói de nome " + NomeHeroi + " está no nivel de " + NivelAtual + " [ " + PontosExperiencia + " XP ]" );