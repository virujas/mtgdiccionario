const formulario = document.querySelector('#formulario')
const boton = document.querySelector('#boton')
const resultado = document.querySelector('#resultado')

const palabras = [
    {nombre: "Add", significado: "agregar", contexto: "Contexto: nada por ahora"},
    {nombre: "Any", significado: "cualquier", contexto: "Contexto: nada por ahora"},
    {nombre: "Archetypes", significado: "prototipos", contexto: "Contexto: nada por ahora"},
    {nombre: "As long as", significado: "siempre y cuando", contexto: "Contexto: nada por ahora"},
    {nombre: "At end of turn", significado: "al final del turno", contexto: "Contexto: nada por ahora"},
    {nombre: "At the beginning of your upkeep", significado: "al principio de tu mantenimiento", contexto: "Contexto: nada por ahora"},
    {nombre: "Attach", significado: "anexar", contexto: "Contexto: nada por ahora"},
    {nombre: "Battalion", significado: "batallón", contexto: "Contexto: nada por ahora"},
    {nombre: "Battle cry", significado: "grito de batalla", contexto: "Contexto: nada por ahora"},
    {nombre: "Battlefield", significado: "campo de batalla", contexto: "Contexto: nada por ahora"},
    {nombre: "Bestow", significado: "concesión", contexto: "Contexto: nada por ahora"},
    {nombre: "Bloddthirst", significado: "sed de sangre", contexto: "Contexto: nada por ahora"},
    {nombre: "Bloodrush", significado: "empujon", contexto: "Contexto: nada por ahora"},
    {nombre: "Bolster", significado: "fortalecer", contexto: "Contexto: nada por ahora"},
    {nombre: "Bottom", significado: "abajo", contexto: "Contexto: Parte de abajo de la biblioteca"},
    {nombre: "Cant be target of spells and habilities", significado: "no puede ser objetivo de hechizos ni habilidades", contexto: "Contexto: nada por ahora"},
    {nombre: "Card", significado: "carta", contexto: "Contexto: nada por ahora"},
    {nombre: "Cascade", significado: "cascada", contexto: "Contexto: comenzas a mirar..."},
    {nombre: "Cast", significado: "lanzar", contexto: "Contexto: nada por ahora"},
    {nombre: "Champion", significado: "amparar", contexto: "Contexto: nada por ahora"},
    {nombre: "Changeling", significado: "cambiaformas", contexto: "Contexto: nada por ahora"},
    {nombre: "Choice", significado: "eleccion", contexto: "Contexto: nada por ahora"},
    {nombre: "Choose", significado: "elije", contexto: "Contexto: nada por ahora"},
    {nombre: "Cipher", significado: "cifrar", contexto: "Contexto: nada por ahora"},
    {nombre: "Colorless", significado: "incoloro", contexto: "Contexto: nada por ahora"},
    {nombre: "Comes into play tapped", significado: "entra en juego girado", contexto: "Contexto: nada por ahora"},
    {nombre: "Comulative upkeep", significado: "mantenimiento acumulativo", contexto: "Contexto: nada por ahora"},
    {nombre: "Constellation", significado: "constelacion", contexto: "Contexto: nada por ahora"},
    {nombre: "Converted mana cost", significado: "coste de mana convertido", contexto: "Contexto: nada por ahora"},
    {nombre: "Counter", significado: "contador/contrarresta", contexto: "Contexto: nada por ahora"},
    {nombre: "Curses", significado: "maldiciones", contexto: "Contexto: nada por ahora"},
    {nombre: "Cycling", significado: "ciclo", contexto: "Contexto: nada por ahora"},
    {nombre: "Damage", significado: "daño", contexto: "Contexto: nada por ahora"},
    {nombre: "Dash", significado: "rapidez", contexto: "Contexto: nada por ahora"},
    {nombre: "Deal damage", significado: "hacer daño", contexto: "Contexto: nada por ahora"},
    {nombre: "Deathtouch", significado: "toque mortal", contexto: "Contexto: nada por ahora"},
    {nombre: "Defender", significado: "defensor", contexto: "Contexto: no puede atacar, solo defiende"},
    {nombre: "Defending", significado: "defendiendo", contexto: "Contexto: nada por ahora"},
    {nombre: "Delve", significado: "excavar", contexto: "Contexto: nada por ahora"},
    {nombre: "Destroy", significado: "destruye", contexto: "Contexto: nada por ahora"},
    {nombre: "Detain", significado: "detener", contexto: "Contexto: nada por ahora"},
    {nombre: "Devotion", significado: "devocion", contexto: "Contexto: devocion por algun color"},
    {nombre: "Devour", significado: "devorar", contexto: "Contexto: nada por ahora"},
    {nombre: "Dies", significado: "muera", contexto: "Contexto: nada por ahora"},
    {nombre: "Discard", significado: "descartar", contexto: "Contexto: descartar X cantidad de cartas"},
    {nombre: "Double strike", significado: "daña dos veces", contexto: "Contexto: nada por ahora"},
    {nombre: "Dredge", significado: "dragar", contexto: "Contexto: nada por ahora"},
    {nombre: "Each", significado: "cada", contexto: "Contexto: nada por ahora"},
    {nombre: "Each player/creature", significado: "cada jugador/criatura", contexto: "Contexto: nada por ahora"},
    {nombre: "Enchanted", significado: "encantado", contexto: "Contexto: nada por ahora"},
    {nombre: "Enchantments", significado: "encantamientos", contexto: "Contexto: nada por ahora"},
    {nombre: "Equip", significado: "equipar", contexto: "Contexto: nada por ahora"},
    {nombre: "Equipped", significado: "equipado", contexto: "Contexto: nada por ahora"},
    {nombre: "Evoke", significado: "evocar", contexto: "Contexto: nada por ahora"},
    {nombre: "Evolve", significado: "evolucionar", contexto: "Contexto: nada por ahora"},
    {nombre: "Exalted", significado: "exaltado", contexto: "Contexto: nada por ahora"},
    {nombre: "Exile", significado: "exiliar", contexto: "Contexto: nada por ahora"},
    {nombre: "Extort", significado: "extorsionar", contexto: "Contexto: nada por ahora"},
    {nombre: "Face-down", significado: "boca abajo", contexto: "Contexto: nada por ahora"},
    {nombre: "Face-up", significado: "boca arriba", contexto: "Contexto: nada por ahora"},
    {nombre: "Fear", significado: "inspirar temor", contexto: "Contexto: nada por ahora"},
    {nombre: "Ferocious", significado: "ferocidad", contexto: "Contexto: nada por ahora"},
    {nombre: "Fewer than", significado: "menos que", contexto: "Contexto: nada por ahora"},
    {nombre: "Fight", significado: "lucha", contexto: "Contexto: nada por ahora"},
    {nombre: "First strike", significado: "dañar primero", contexto: "Contexto: nada por ahora"},
    {nombre: "Flanking", significado: "flanquea", contexto: "Contexto: nada por ahora"},
    {nombre: "Flash", significado: "destello", contexto: "Contexto: la carta puede jugarse en el ultimo paso del turno del rival"},
    {nombre: "Flashback", significado: "retrospectiva", contexto: "Contexto: pagas el coste X para usarla desde el cementerio, luego se exilia"},
    {nombre: "Flying", significado: "vuela", contexto: "Contexto: solo puede ser bloqueada por otra carta que vuele o que contenga alcance (reach)"},
    {nombre: "Forest", significado: "bosque", contexto: "Contexto: nada por ahora"},
    {nombre: "Forestwalk", significado: "cruza bosques", contexto: "Contexto: nada por ahora"},
    {nombre: "From", significado: "desde", contexto: "Contexto: nada por ahora"},
    {nombre: "Fuse", significado: "fusionar", contexto: "Contexto: nada por ahora"},
    {nombre: "Gain", significado: "gana", contexto: "Contexto: nada por ahora"},
    {nombre: "Gates", significado: "portales", contexto: "Contexto: nada por ahora"},
    {nombre: "Get", significado: "obtener", contexto: "Contexto: nada por ahora"},
    {nombre: "Gods", significado: "deidades", contexto: "Contexto: nada por ahora"},
    {nombre: "Graft", significado: "injertar", contexto: "Contexto: nada por ahora"},
    {nombre: "Graveyard", significado: "cementerio", contexto: "Contexto: nada por ahora"},
    {nombre: "Hand", significado: "mano", contexto: "Contexto: nada por ahora"},
    {nombre: "Haste", significado: "prisa", contexto: "Contexto: nada por ahora"},
    {nombre: "Hellbent", significado: "temerario", contexto: "Contexto: nada por ahora"},
    {nombre: "Heroic", significado: "heroismo", contexto: "Contexto: nada por ahora"},
    {nombre: "Hexproof", significado: "antimaleficio", contexto: "Contexto: Es una habilidad de palabra clave que evita que un permanente o jugador sea hecho objetivo por un oponente"},
    {nombre: "Hybrid mana", significado: "mana hibrido", contexto: "Contexto: nada por ahora"},
    {nombre: "If able", significado: "si puede", contexto: "Contexto: nada por ahora"},
    {nombre: "If you do", significado: "si lo haces", contexto: "Contexto: nada por ahora"},
    {nombre: "Inspired", significado: "inspiracion", contexto: "Contexto: nada por ahora"},
    {nombre: "Instant", significado: "instantaneo", contexto: "Contexto: nada por ahora"},
    {nombre: "Island", significado: "isla", contexto: "Contexto: nada por ahora"},
    {nombre: "Islandwalk", significado: "cruza islas", contexto: "Contexto: nada por ahora"},
    {nombre: "Kicker", significado: "estimulo", contexto: "Contexto: nada por ahora"},
    {nombre: "Land", significado: "tierra", contexto: "Contexto: nada por ahora"},
    {nombre: "Landfall", significado: "aterrizaje", contexto: "Contexto: nada por ahora"},
    {nombre: "Library", significado: "biblioteca", contexto: "Contexto: nada por ahora"},
    {nombre: "Life", significado: "vida", contexto: "Contexto: nada por ahora"},
    {nombre: "Lifelink", significado: "vinculo vital", contexto: "Contexto: la carta que posea vinculo vital, al hacer daño, suma esa cantidad de daño a los puntos de vida del jugador"},
    {nombre: "Lose", significado: "perder", contexto: "Contexto: nada por ahora"},
    {nombre: "Madness", significado: "demencia", contexto: "Contexto: nada por ahora"},
    {nombre: "Mana pool", significado: "reserva de mana", contexto: "Contexto: nada por ahora"},
    {nombre: "Manifest", significado: "manifestar", contexto: "Contexto: nada por ahora"},
    {nombre: "May", significado: "puedes", contexto: "Contexto: nada por ahora"},
    {nombre: "May choice", significado: "puedes elegir", contexto: "Contexto: nada por ahora"},
    {nombre: "Miracle", significado: "miracle", contexto: "Contexto: nada por ahora"},
    {nombre: "Monstrosity", significado: "monstruosidad", contexto: "Contexto: nada por ahora"},
    {nombre: "Morbid", significado: "necrario", contexto: "Contexto: nada por ahora"},
    {nombre: "Morph", significado: "metamorfosis", contexto: "Contexto: nada por ahora"},
    {nombre: "Mountain", significado: "montaña", contexto: "Contexto: nada por ahora"},
    {nombre: "Mountainwalk", significado: "cruza montañas", contexto: "Contexto: nada por ahora"},
    {nombre: "Name", significado: "nombrar", contexto: "Contexto: nada por ahora"},
    {nombre: "Nonbasic", significado: "no basica", contexto: "Contexto: nada por ahora"},
    {nombre: "Nonblack", significado: "que no sea negra", contexto: "Contexto: nada por ahora"},
    {nombre: "Non-land", significado: "que no sea tierra", contexto: "Contexto: nada por ahora"},
    {nombre: "Only once each turn", significado: "una vez por turno", contexto: "Contexto: nada por ahora"},
    {nombre: "Outlast", significado: "supervivencia", contexto: "Contexto: nada por ahora"},
    {nombre: "Overload", significado: "sobrecarga", contexto: "Contexto: nada por ahora"},
    {nombre: "Owner", significado: "propietario", contexto: "Contexto: nada por ahora"},
    {nombre: "Paid", significado: "pagado", contexto: "Contexto: nada por ahora"},
    {nombre: "Pay", significado: "pagar", contexto: "Contexto: nada por ahora"},
    {nombre: "Persist", significado: "persistir", contexto: "Contexto: nada por ahora"},
    {nombre: "Phasing", significado: "cambiar de fase", contexto: "Contexto: nada por ahora"},
    {nombre: "Plain", significado: "llanura", contexto: "Contexto: nada por ahora"},
    {nombre: "Planeswalker", significado: "caminante de planos", contexto: "Contexto: nada por ahora"},
    {nombre: "Play", significado: "juega", contexto: "Contexto: nada por ahora"},
    {nombre: "Play this ability as", significado: "juega esta habilidad como", contexto: "Contexto: nada por ahora"},
    {nombre: "Player", significado: "jugador", contexto: "Contexto: nada por ahora"},
    {nombre: "Poison counter", significado: "contador de veneno", contexto: "Contexto: nada por ahora"},
    {nombre: "Populate", significado: "repoblar", contexto: "Contexto: nada por ahora"},
    {nombre: "Power", significado: "fuerza", contexto: "Contexto: nada por ahora"},
    {nombre: "Print", significado: "estampar", contexto: "Contexto: nada por ahora"},
    {nombre: "Prowess", significado: "destreza", contexto: "Contexto: nada por ahora"},
    {nombre: "Put", significado: "poner / pon", contexto: "Contexto: nada por ahora"},
    {nombre: "Put into", significado: "poner en", contexto: "Contexto: nada por ahora"},
    {nombre: "Radiance", significado: "irradiar", contexto: "Contexto: nada por ahora"},
    {nombre: "Raid", significado: "incursion", contexto: "Contexto: nada por ahora"},
    {nombre: "Random", significado: "al azar", contexto: "Contexto: nada por ahora"},
    {nombre: "Reach", significado: "alcance", contexto: "Contexto: nada por ahora"},
    {nombre: "Remove", significado: "eliminar", contexto: "Contexto: nada por ahora"},
    {nombre: "Replicate", significado: "reproducir", contexto: "Contexto: nada por ahora"},
    {nombre: "Return", significado: "devuelve", contexto: "Contexto: nada por ahora"},
    {nombre: "Scavenge", significado: "carroñar", contexto: "Contexto: nada por ahora"},
    {nombre: "Scry", significado: "adivinar", contexto: "Contexto: mirar primera carta de tu biblioteca"},
    {nombre: "Search", significado: "busca", contexto: "Contexto: nada por ahora"},
    {nombre: "Shadow", significado: "desvanecerse", contexto: "Contexto: nada por ahora"},
    {nombre: "Shroud", significado: "velo", contexto: "Contexto: nada por ahora"},
    {nombre: "Shuffle", significado: "barajar / mezclar", contexto: "Contexto: nada por ahora"},
    {nombre: "Sorcery", significado: "conjuro", contexto: "Contexto: nada por ahora"},
    {nombre: "Source", significado: "fuente", contexto: "Contexto: nada por ahora"},
    {nombre: "Spell", significado: "hechizo", contexto: "Contexto: toda carta que no sea tierra"},
    {nombre: "Spend", significado: "gasta", contexto: "Contexto: nada por ahora"},
    {nombre: "Split second", significado: "fraccion de segundo", contexto: "Contexto: nada por ahora"},
    {nombre: "Step", significado: "paso (fases)", contexto: "Contexto: nada por ahora"},
    {nombre: "Storm", significado: "tormenta", contexto: "Contexto: nada por ahora"},
    {nombre: "Strive", significado: "esfuerzo", contexto: "Contexto: nada por ahora"},
    {nombre: "Sunburst", significado: "estallido solar", contexto: "Contexto: nada por ahora"},
    {nombre: "Swamp", significado: "pantano", contexto: "Contexto: nada por ahora"},
    {nombre: "Swampwalk", significado: "cruza pantanos", contexto: "Contexto: nada por ahora"},
    {nombre: "Tap", significado: "gira", contexto: "Contexto: nada por ahora"},
    {nombre: "Tapped", significado: "girado", contexto: "Contexto: nada por ahora"},
    {nombre: "Target", significado: "objetivo", contexto: "Contexto: nada por ahora"},
    {nombre: "That many", significado: "esa misma cantidad", contexto: "Contexto: nada por ahora"},
    {nombre: "Thoughness", significado: "resistencia", contexto: "Contexto: nada por ahora"},
    {nombre: "Top", significado: "arriba (cartas de arriba de la biblioteca)", contexto: "Contexto: nada por ahora"},
    {nombre: "Trample", significado: "arrollar", contexto: "Contexto: nada por ahora"},
    {nombre: "Treshold", significado: "umbral", contexto: "Contexto: nada por ahora"},
    {nombre: "Tribute", significado: "tributo", contexto: "Contexto: nada por ahora"},
    {nombre: "Unblockable", significado: "inbloqueable", contexto: "Contexto: nada por ahora"},
    {nombre: "Under your control", significado: "bajo tu control", contexto: "Contexto: nada por ahora"},
    {nombre: "Unleash", significado: "desatar", contexto: "Contexto: nada por ahora"},
    {nombre: "Unless", significado: "a menos que", contexto: "Contexto: nada por ahora"},
    {nombre: "Untap", significado: "enderezar", contexto: "Contexto: nada por ahora"},
    {nombre: "Until end of turn", significado: "hasta el final del turno", contexto: "Contexto: nada por ahora"},
    {nombre: "When «x» is put in your graveyard from play", significado: "cuando «x» sea puesto en tu cementerio desde el juego", contexto: "Contexto: nada por ahora"},
    {nombre: "Whenever", significado: "siempre que", contexto: "Contexto: nada por ahora"},
    {nombre: "Wither", significado: "debilitar", contexto: "Contexto: nada por ahora"},
    {nombre: "Would be", significado: "fuera a ser", contexto: "Contexto: nada por ahora"},
    {nombre: "¿Como usar el diccionario?", significado: "Solo escribe la palabra que buscas y encontraras su significado, que provoca en el juego y un simple contexto", contexto: ""},
]

// palabras.forEach((palabrasArray) => {
//     resultado.innerHTML += `
//     <li>
//      ${palabrasArray.nombre} : ${palabrasArray.significado} - ${palabrasArray.contexto}
//     </li>
//     `

// });

const filtrar = ()=>{
    resultado.innerHTML = ''
    const texto = formulario.value.toLowerCase()
    
    for(let palabra of palabras){
        let nombre = palabra.nombre.toLowerCase()
        if(nombre.indexOf(texto) !== -1){
            resultado.innerHTML =
//             `
//            <div class="card cardEdit">
//   <div class="card-header cardHeader" style="">
//     <p class="textStyle">${palabra.nombre}</p> 
//   </div>
//   <div class="card-body">
//     <blockquote class="blockquote mb-0">
//       <p>${palabra.significado}</p>
//       <footer class="blockquote-footer">${palabra.contexto}</cite>
//     </blockquote>
//   </div>
//     </div>
// `
`
<div class="container">
<div class="card-frame">
        <div class="frame-type-line">
        <div class="type"><h1>${palabra.nombre}</h1></div>
        <img class="manared" src="../assets/imagenes/mred.png" alt="mana rojo"/>
        <img class="managreen" src="../assets/imagenes/mgreen.png" alt="mana verde"/>
        <img class="manablue" src="../assets/imagenes/mblue.png" alt="mana azul"/>
        <img class="manawhite" src="../assets/imagenes/mwhite.png" alt="mana blanco"/>
        <img class="manablack" src="../assets/imagenes/mblack.png" alt="mana negro"/>
      </div>
      <div class="frame-text-box">
        <p class="description ftb-inner-margin">${palabra.significado}
        </p>
        <p class="description">
          ${palabra.contexto}
        </p>
        <p class="flavour-text">${palabra.contexto}
        </p>
        </div>
        <div class="frame-bottom-info inner-margin">
          <div class="fbi-left">
          </div>
  
          <div class="fbi-center"></div>
  
          <div class="fbi-right">
          </div>
        </div>
  
      </div>
  
    </div>
  </div>
  </div>
`
        }
    }
    if(resultado.innerHTML == ''){
        resultado.innerHTML += 
            `
            <li>
            Palabra no encontrada...
            </li>
            `
    }
}

boton.addEventListener('click', filtrar)
formulario.addEventListener('keyup', filtrar)

filtrar();