const formulario = document.querySelector('#formulario')
const boton = document.querySelector('#boton')
const resultado = document.querySelector('#resultado')

const palabras = [
    {nombre: "add", significado: "agregar", contexto: "Contexto: nada por ahora"},
    {nombre: "any", significado: "cualquier", contexto: "Contexto: nada por ahora"},
    {nombre: "archetypes", significado: "prototipos", contexto: "Contexto: nada por ahora"},
    {nombre: "as long as", significado: "siempre y cuando", contexto: "Contexto: nada por ahora"},
    {nombre: "at end of turn", significado: "al final del turno", contexto: "Contexto: nada por ahora"},
    {nombre: "at the beginning of your upkeep", significado: "al principio de tu mantenimiento", contexto: "Contexto: nada por ahora"},
    {nombre: "attach", significado: "anexar", contexto: "Contexto: nada por ahora"},
    {nombre: "battalion", significado: "batallón", contexto: "Contexto: nada por ahora"},
    {nombre: "battle cry", significado: "grito de batalla", contexto: "Contexto: nada por ahora"},
    {nombre: "battlefield", significado: "campo de batalla", contexto: "Contexto: nada por ahora"},
    {nombre: "bestow", significado: "concesión", contexto: "Contexto: nada por ahora"},
    {nombre: "bloddthirst", significado: "sed de sangre", contexto: "Contexto: nada por ahora"},
    {nombre: "bloodrush", significado: "empujon", contexto: "Contexto: nada por ahora"},
    {nombre: "bolster", significado: "fortalecer", contexto: "Contexto: nada por ahora"},
    {nombre: "bottom", significado: "abajo", contexto: "Contexto: Parte de abajo de la biblioteca"},
    {nombre: "cant be target of spells and habilities", significado: "no puede ser objetivo de hechizos ni habilidades", contexto: "Contexto: nada por ahora"},
    {nombre: "card", significado: "carta", contexto: "Contexto: nada por ahora"},
    {nombre: "cascade", significado: "cascada", contexto: "Contexto: comenzas a mirar..."},
    {nombre: "cast", significado: "lanzar", contexto: "Contexto: nada por ahora"},
    {nombre: "champion", significado: "amparar", contexto: "Contexto: nada por ahora"},
    {nombre: "changeling", significado: "cambiaformas", contexto: "Contexto: nada por ahora"},
    {nombre: "choice", significado: "eleccion", contexto: "Contexto: nada por ahora"},
    {nombre: "choose", significado: "elije", contexto: "Contexto: nada por ahora"},
    {nombre: "cipher", significado: "cifrar", contexto: "Contexto: nada por ahora"},
    {nombre: "colorless", significado: "incoloro", contexto: "Contexto: nada por ahora"},
    {nombre: "comes into play tapped", significado: "entra en juego girado", contexto: "Contexto: nada por ahora"},
    {nombre: "comulative upkeep", significado: "mantenimiento acumulativo", contexto: "Contexto: nada por ahora"},
    {nombre: "constellation", significado: "constelacion", contexto: "Contexto: nada por ahora"},
    {nombre: "converted mana cost", significado: "coste de mana convertido", contexto: "Contexto: nada por ahora"},
    {nombre: "counter", significado: "contador/contrarresta", contexto: "Contexto: nada por ahora"},
    {nombre: "curses", significado: "maldiciones", contexto: "Contexto: nada por ahora"},
    {nombre: "cycling", significado: "ciclo", contexto: "Contexto: nada por ahora"},
    {nombre: "damage", significado: "daño", contexto: "Contexto: nada por ahora"},
    {nombre: "dash", significado: "rapidez", contexto: "Contexto: nada por ahora"},
    {nombre: "deal damage", significado: "hacer daño", contexto: "Contexto: nada por ahora"},
    {nombre: "deathtouch", significado: "toque mortal", contexto: "Contexto: nada por ahora"},
    {nombre: "defender", significado: "defensor", contexto: "Contexto: no puede atacar, solo defiende"},
    {nombre: "defending", significado: "defendiendo", contexto: "Contexto: nada por ahora"},
    {nombre: "delve", significado: "excavar", contexto: "Contexto: nada por ahora"},
    {nombre: "destroy", significado: "destruye", contexto: "Contexto: nada por ahora"},
    {nombre: "detain", significado: "detener", contexto: "Contexto: nada por ahora"},
    {nombre: "devotion", significado: "devocion", contexto: "Contexto: devocion por algun color"},
    {nombre: "devour", significado: "devorar", contexto: "Contexto: nada por ahora"},
    {nombre: "dies", significado: "muera", contexto: "Contexto: nada por ahora"},
    {nombre: "discard", significado: "descartar", contexto: "Contexto: descartar X cantidad de cartas"},
    {nombre: "double strike", significado: "daña dos veces", contexto: "Contexto: nada por ahora"},
    {nombre: "dredge", significado: "dragar", contexto: "Contexto: nada por ahora"},
    {nombre: "each", significado: "cada", contexto: "Contexto: nada por ahora"},
    {nombre: "each player/creature", significado: "cada jugador/criatura", contexto: "Contexto: nada por ahora"},
    {nombre: "enchanted", significado: "encantado", contexto: "Contexto: nada por ahora"},
    {nombre: "enchantments", significado: "encantamientos", contexto: "Contexto: nada por ahora"},
    {nombre: "equip", significado: "equipar", contexto: "Contexto: nada por ahora"},
    {nombre: "equipped", significado: "equipado", contexto: "Contexto: nada por ahora"},
    {nombre: "evoke", significado: "evocar", contexto: "Contexto: nada por ahora"},
    {nombre: "evolve", significado: "evolucionar", contexto: "Contexto: nada por ahora"},
    {nombre: "exalted", significado: "exaltado", contexto: "Contexto: nada por ahora"},
    {nombre: "exile", significado: "exiliar", contexto: "Contexto: nada por ahora"},
    {nombre: "extort", significado: "extorsionar", contexto: "Contexto: nada por ahora"},
    {nombre: "face-down", significado: "boca abajo", contexto: "Contexto: nada por ahora"},
    {nombre: "face-up", significado: "boca arriba", contexto: "Contexto: nada por ahora"},
    {nombre: "fear", significado: "inspirar temor", contexto: "Contexto: nada por ahora"},
    {nombre: "ferocious", significado: "ferocidad", contexto: "Contexto: nada por ahora"},
    {nombre: "fewer than", significado: "menos que", contexto: "Contexto: nada por ahora"},
    {nombre: "fight", significado: "lucha", contexto: "Contexto: nada por ahora"},
    {nombre: "first strike", significado: "dañar primero", contexto: "Contexto: nada por ahora"},
    {nombre: "flanking", significado: "flanquea", contexto: "Contexto: nada por ahora"},
    {nombre: "flash", significado: "destello", contexto: "Contexto: la carta puede jugarse en el ultimo paso del turno del rival"},
    {nombre: "flashback", significado: "retrospectiva", contexto: "Contexto: pagas el coste X para usarla desde el cementerio, luego se exilia"},
    {nombre: "flying", significado: "vuela", contexto: "Contexto: solo puede ser bloqueada por otra carta que vuele o que contenga alcance (reach)"},
    {nombre: "forest", significado: "bosque", contexto: "Contexto: nada por ahora"},
    {nombre: "forestwalk", significado: "cruza bosques", contexto: "Contexto: nada por ahora"},
    {nombre: "from", significado: "desde", contexto: "Contexto: nada por ahora"},
    {nombre: "fuse", significado: "fusionar", contexto: "Contexto: nada por ahora"},
    {nombre: "gain", significado: "gana", contexto: "Contexto: nada por ahora"},
    {nombre: "gates", significado: "portales", contexto: "Contexto: nada por ahora"},
    {nombre: "get", significado: "obtener", contexto: "Contexto: nada por ahora"},
    {nombre: "gods", significado: "deidades", contexto: "Contexto: nada por ahora"},
    {nombre: "graft", significado: "injertar", contexto: "Contexto: nada por ahora"},
    {nombre: "graveyard", significado: "cementerio", contexto: "Contexto: nada por ahora"},
    {nombre: "hand", significado: "mano", contexto: "Contexto: nada por ahora"},
    {nombre: "haste", significado: "prisa", contexto: "Contexto: nada por ahora"},
    {nombre: "hellbent", significado: "temerario", contexto: "Contexto: nada por ahora"},
    {nombre: "heroic", significado: "heroismo", contexto: "Contexto: nada por ahora"},
    {nombre: "hexproof", significado: "antimaleficio", contexto: "Contexto: Es una habilidad de palabra clave que evita que un permanente o jugador sea hecho objetivo por un oponente"},
    {nombre: "hybrid mana", significado: "mana hibrido", contexto: "Contexto: nada por ahora"},
    {nombre: "if able", significado: "si puede", contexto: "Contexto: nada por ahora"},
    {nombre: "if you do", significado: "si lo haces", contexto: "Contexto: nada por ahora"},
    {nombre: "inspired", significado: "inspiracion", contexto: "Contexto: nada por ahora"},
    {nombre: "instant", significado: "instantaneo", contexto: "Contexto: nada por ahora"},
    {nombre: "island", significado: "isla", contexto: "Contexto: nada por ahora"},
    {nombre: "islandwalk", significado: "cruza islas", contexto: "Contexto: nada por ahora"},
    {nombre: "kicker", significado: "estimulo", contexto: "Contexto: nada por ahora"},
    {nombre: "land", significado: "tierra", contexto: "Contexto: nada por ahora"},
    {nombre: "landfall", significado: "aterrizaje", contexto: "Contexto: nada por ahora"},
    {nombre: "library", significado: "biblioteca", contexto: "Contexto: nada por ahora"},
    {nombre: "life", significado: "vida", contexto: "Contexto: nada por ahora"},
    {nombre: "lifelink", significado: "vinculo vital", contexto: "Contexto: la carta que posea vinculo vital, al hacer daño, suma esa cantidad de daño a los puntos de vida del jugador"},
    {nombre: "lose", significado: "perder", contexto: "Contexto: nada por ahora"},
    {nombre: "madness", significado: "demencia", contexto: "Contexto: nada por ahora"},
    {nombre: "mana pool", significado: "reserva de mana", contexto: "Contexto: nada por ahora"},
    {nombre: "manifest", significado: "manifestar", contexto: "Contexto: nada por ahora"},
    {nombre: "may", significado: "puedes", contexto: "Contexto: nada por ahora"},
    {nombre: "may choice", significado: "puedes elegir", contexto: "Contexto: nada por ahora"},
    {nombre: "miracle", significado: "miracle", contexto: "Contexto: nada por ahora"},
    {nombre: "monstrosity", significado: "monstruosidad", contexto: "Contexto: nada por ahora"},
    {nombre: "morbid", significado: "necrario", contexto: "Contexto: nada por ahora"},
    {nombre: "morph", significado: "metamorfosis", contexto: "Contexto: nada por ahora"},
    {nombre: "mountain", significado: "montaña", contexto: "Contexto: nada por ahora"},
    {nombre: "mountainwalk", significado: "cruza montañas", contexto: "Contexto: nada por ahora"},
    {nombre: "name", significado: "nombrar", contexto: "Contexto: nada por ahora"},
    {nombre: "nonbasic", significado: "no basica", contexto: "Contexto: nada por ahora"},
    {nombre: "nonblack", significado: "que no sea negra", contexto: "Contexto: nada por ahora"},
    {nombre: "non-land", significado: "que no sea tierra", contexto: "Contexto: nada por ahora"},
    {nombre: "only once each turn", significado: "una vez por turno", contexto: "Contexto: nada por ahora"},
    {nombre: "outlast", significado: "supervivencia", contexto: "Contexto: nada por ahora"},
    {nombre: "overload", significado: "sobrecarga", contexto: "Contexto: nada por ahora"},
    {nombre: "owner", significado: "propietario", contexto: "Contexto: nada por ahora"},
    {nombre: "paid", significado: "pagado", contexto: "Contexto: nada por ahora"},
    {nombre: "pay", significado: "pagar", contexto: "Contexto: nada por ahora"},
    {nombre: "persist", significado: "persistir", contexto: "Contexto: nada por ahora"},
    {nombre: "phasing", significado: "cambiar de fase", contexto: "Contexto: nada por ahora"},
    {nombre: "plain", significado: "llanura", contexto: "Contexto: nada por ahora"},
    {nombre: "planeswalker", significado: "caminante de planos", contexto: "Contexto: nada por ahora"},
    {nombre: "play", significado: "juega", contexto: "Contexto: nada por ahora"},
    {nombre: "play this ability as", significado: "juega esta habilidad como", contexto: "Contexto: nada por ahora"},
    {nombre: "player", significado: "jugador", contexto: "Contexto: nada por ahora"},
    {nombre: "poison counter", significado: "contador de veneno", contexto: "Contexto: nada por ahora"},
    {nombre: "populate", significado: "repoblar", contexto: "Contexto: nada por ahora"},
    {nombre: "power", significado: "fuerza", contexto: "Contexto: nada por ahora"},
    {nombre: "print", significado: "estampar", contexto: "Contexto: nada por ahora"},
    {nombre: "prowess", significado: "destreza", contexto: "Contexto: nada por ahora"},
    {nombre: "put", significado: "poner / pon", contexto: "Contexto: nada por ahora"},
    {nombre: "put into", significado: "poner en", contexto: "Contexto: nada por ahora"},
    {nombre: "radiance", significado: "irradiar", contexto: "Contexto: nada por ahora"},
    {nombre: "raid", significado: "incursion", contexto: "Contexto: nada por ahora"},
    {nombre: "random", significado: "al azar", contexto: "Contexto: nada por ahora"},
    {nombre: "reach", significado: "alcance", contexto: "Contexto: nada por ahora"},
    {nombre: "remove", significado: "eliminar", contexto: "Contexto: nada por ahora"},
    {nombre: "replicate", significado: "reproducir", contexto: "Contexto: nada por ahora"},
    {nombre: "return", significado: "devuelve", contexto: "Contexto: nada por ahora"},
    {nombre: "scavenge", significado: "carroñar", contexto: "Contexto: nada por ahora"},
    {nombre: "scry", significado: "adivinar", contexto: "Contexto: mirar primera carta de tu biblioteca"},
    {nombre: "search", significado: "busca", contexto: "Contexto: nada por ahora"},
    {nombre: "shadow", significado: "desvanecerse", contexto: "Contexto: nada por ahora"},
    {nombre: "shroud", significado: "velo", contexto: "Contexto: nada por ahora"},
    {nombre: "shuffle", significado: "barajar / mezclar", contexto: "Contexto: nada por ahora"},
    {nombre: "sorcery", significado: "conjuro", contexto: "Contexto: nada por ahora"},
    {nombre: "source", significado: "fuente", contexto: "Contexto: nada por ahora"},
    {nombre: "spell", significado: "hechizo", contexto: "Contexto: toda carta que no sea tierra"},
    {nombre: "spend", significado: "gasta", contexto: "Contexto: nada por ahora"},
    {nombre: "split second", significado: "fraccion de segundo", contexto: "Contexto: nada por ahora"},
    {nombre: "step", significado: "paso (fases)", contexto: "Contexto: nada por ahora"},
    {nombre: "storm", significado: "tormenta", contexto: "Contexto: nada por ahora"},
    {nombre: "strive", significado: "esfuerzo", contexto: "Contexto: nada por ahora"},
    {nombre: "sunburst", significado: "estallido solar", contexto: "Contexto: nada por ahora"},
    {nombre: "swamp", significado: "pantano", contexto: "Contexto: nada por ahora"},
    {nombre: "swampwalk", significado: "cruza pantanos", contexto: "Contexto: nada por ahora"},
    {nombre: "tap", significado: "gira", contexto: "Contexto: nada por ahora"},
    {nombre: "tapped", significado: "girado", contexto: "Contexto: nada por ahora"},
    {nombre: "target", significado: "objetivo", contexto: "Contexto: nada por ahora"},
    {nombre: "that many", significado: "esa misma cantidad", contexto: "Contexto: nada por ahora"},
    {nombre: "thoughness", significado: "resistencia", contexto: "Contexto: nada por ahora"},
    {nombre: "top", significado: "arriba (cartas de arriba de la biblioteca)", contexto: "Contexto: nada por ahora"},
    {nombre: "trample", significado: "arrollar", contexto: "Contexto: nada por ahora"},
    {nombre: "treshold", significado: "umbral", contexto: "Contexto: nada por ahora"},
    {nombre: "tribute", significado: "tributo", contexto: "Contexto: nada por ahora"},
    {nombre: "unblockable", significado: "inbloqueable", contexto: "Contexto: nada por ahora"},
    {nombre: "under your control", significado: "bajo tu control", contexto: "Contexto: nada por ahora"},
    {nombre: "unleash", significado: "desatar", contexto: "Contexto: nada por ahora"},
    {nombre: "unless", significado: "a menos que", contexto: "Contexto: nada por ahora"},
    {nombre: "untap", significado: "enderezar", contexto: "Contexto: nada por ahora"},
    {nombre: "until end of turn", significado: "hasta el final del turno", contexto: "Contexto: nada por ahora"},
    {nombre: "when «x» is put in your graveyard from play", significado: "cuando «x» sea puesto en tu cementerio desde el juego", contexto: "Contexto: nada por ahora"},
    {nombre: "whenever", significado: "siempre que", contexto: "Contexto: nada por ahora"},
    {nombre: "wither", significado: "debilitar", contexto: "Contexto: nada por ahora"},
    {nombre: "would be", significado: "fuera a ser", contexto: "Contexto: nada por ahora"},
]

palabras.forEach((palabrasArray) => {
    resultado.innerHTML += `
    <li>
     ${palabrasArray.nombre} : ${palabrasArray.significado} - ${palabrasArray.contexto}
    </li>
    `

})

const filtrar = ()=>{
    resultado.innerHTML = ''
    const texto = formulario.value.toLowerCase()
    
    for(let palabra of palabras){
        let nombre = palabra.nombre.toLowerCase()
        if(nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `
            <li>
            <h3>${palabra.nombre}</h3> ${palabra.significado} - ${palabra.contexto}
            <hr>
            </li>
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