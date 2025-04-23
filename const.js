const mensajes = [
    "Da click en el botón para comenzar 💝",
    "Porque eres increíblemente fuerte nata, incluso cuando lo dudas 💪",
    "Porque siempre buscas superarte a ti misma 😎",
    "Porque tienes una forma hermosa de ver el mundo 💖",
    "Porque eres hermosa nata, por dentro y por fuera 🌸",
    "Porque tu sonrisa tiene un efecto mágico, alegras cualquier lugar 😊",
    "Porque eres valiosa, muy valiosa, siempre, sin importar nada, eres un diamante 💎",
    "Porque eres suficiente, eres increible tal como eres ✅",
    "Porque tu autenticidad es admirable, no cambies 🌟",
    "Porque transmites paz y confianza con solo ser tú, eres grandiosa ❤️",
    "Porque admiro tu valentía al enfrentar dificultades, eres muy fuerte 🦁",
    "Porque tu resiliencia es verdaderamente inspiradora 🌱",
    "Porque no intentas ser alguien que no eres, y eso es valioso 💯",
    "Porque me has mostrado tu verdadero ser, y es hermoso 🙌",
    "Porque eres increíblemente talentosa en muchas cosas(Me sorprendes🤭)🎨",
    "Porque tu versatilidad me sorprende cada día 💫",
    "Porque siempre estás buscando aprender y mejorar 📚",
    "Porque tu inteligencia es evidente y admirable, eres muy inteligente, y debes empezar a valorarte como te mereces 🧠",
    "Porque tu dedicación en todo lo que haces es ejemplar 🏆",
    "Porque tu esfuerzo diario es enorme, trabajas duro por lo que quieres y es de valorar muchísimo 💖",
    "Porque sé que todo ese esfuerzo dará frutos maravillosos(Pon cuidado que sí ❤️) 🍎",
    "Porque estoy seguro de que conseguirás esa casita que sueñas(Y podrás ponerla hermosa tal y como lo deseas nata🩵) 🏡🔑",
    "Porque eres una trabajadora incansable y constante 💼(Me alegro cuando valoran tu trabajo, lo mereces)",
    "Porque tienes un corazón gigante y lleno de bondad ❤️‍🩹",
    "Porque tienes muchos temas de los cuales enseñarme y a mi me encanta escucharte 🗣️",
    "Porque explicas las cosas con una claridad fascinante ✨",
    "Porque compartes tu conocimiento con entusiasmo contagioso 💡",
    "Porque haces interesante cualquier tema del que hablas 🤓",
    "Porque valoras los libros y el aprendizaje continuo 📖",
    "Porque encuentras sabiduría en podcasts y otras fuentes 🎧",
    "Porque tu ternura es un regalo para quienes te conocen 🤗",
    "Porque tu lado sensible te hace aún más humana y especial 🥰",
    "Porque tu risa inesperada alegra los días 😂",
    "Porque un abrazo tuyo se siente como volver a casa🫂",
    "Porque eres irremplazable 🥇",
    "Porque dejas huella sin siquiera intentarlo🐾",
    "Porque eres como la nata, haces todo mejor (Como te dije hace algun tiempo 🤭) 🧁",
    "Porque elevas y das dulzura a los momentos 🍬",
    "Porque eres el orden en el desorden y el caos 🖼️",
    "Porque el mundo es menos sin ti, definitivamente 💔➡️💖",
    "Porque tu brillo es innegable, como el de la luna 🌙",
    "Porque te mereces todo el amor del mundo, mereces ser amada, empezando por el propio 💞",
    "Porque tu presencia simplemente ilumina el lugar 🌟",
    "Porque tienes la capacidad de adaptarte a los cambios 🔄",
    "Porque eres buena en jardinería 🌿",
    "Porque bailas increíble y expresas alegría con el cuerpo 💃",
    "Porque siempre tienes conocimientos interesantes que compartir 🧐",
    "Porque siempre se aprende algo nuevo contigo 🎓",
    "Porque haces que los días insípidos se vuelvan especiales 🎉",
    "Porque eres ese toque único de dulzura que todo necesita 🍯",
    "Porque haces más dulces mis días (y los de muchos más estoy seguro) ☀️",
    "Porque no necesitas hacer nada extraordinario para serlo, ya lo eres ❤️ ✨",
    "Porque eres independiente y sabes lo que quieres 🚶‍♀️",
    "Porque eres una reina, no lo olvides jamás 👑",
    "Porque das forma a un bello futuro con tu esfuerzo 🛠️(Tambien recuerda descansar cuando lo necesites nata ❤️🤭)",
    "Porque estás haciendo un gran trabajo, ¡sigue así! 👍",
    "Porque todo saldrá bien, confía en el proceso y en ti, vas a lograr todo eso que tanto sueñas (Pasito a pasito jeje ❤️) 🙏",
    "Porque tu esfuerzo constante te acerca cada día a tus metas 🏁",
    "Porque eres más capaz de lo que a veces crees 💪✨",
    "Porque mereces darte a ti misma todo el amor que das ❤️",
    "Porque das color a los días grises 🌈",
    "Porque eres amable incluso en los días difíciles 😊",
    "Porque tu gracia y elegancia resaltan naturalmente, eres hermosa 🌹",
    "Porque priorizarte es lo mejor que puedes hacer por ti ✅",
    "Porque eres importante y especial, eres increíble, eres muy valiosa 🫂. No lo olvides nunca, por favor.",
    "Porque tu valor está dentro de ti, no en lo externo 💖",
    "Porque tienes un potencial infinito por descubrir 🚀",
    "Porque superas cada escalón con determinación 🧗‍♀️(Vas muy bien en el proyecto ❤️)",
    "Porque eres la definición de una mujer grandiosa 🏆",
    "Porque otras mujeres a tu lado son inexistentes 😉👑",
    "Porque mereces que te recuerden lo increíble que eres, siempre 💌",
    "confías en mí, y eso lo valoro infinitamente 🙏",
    "me recuerdas que puedo confiar en los demás 🤝",
    "me enseñas lo importante que es tener a alguien como tú 💖",
    "tu valor no depende de la opinión de nadie (No te dejes afectar por comentarios ajenos) 🙅‍♀️",
    "te admiro profundamente, en todos los sentidos 🩵",
    "eres la razón de muchas de mis sonrisas 😄",
    "me siento increíblemente afortunado de conocerte 🍀",
    "me preocupo por tu bienestar genuinamente ❤️‍🩹, cuentas conmigo siempre nata, eres muy importante para mi",
    "no eres molestia, estoy aqui para todo lo que necesites siempre con el mismo cariño(Perdón por a  veces ser un poco frio) jeje",
    "gracias por existir y ser como eres 🙏",
    "gracias por compartir conmigo y aceptar las salidas 💖",
    "gracias por simplemente por ser tú nata 💛",
    "Extras 🥰",
    "Eres una persona maravillosa, y eso nadie lo puede negar 💛",
    "Tú puedes con todo, siempre has podido 💪",
    "Gracias por existir nata, de verdad 💖",
    "Te mereces lo más bonito de este mundo 🌸",
    "Aunque no lo veas, estás brillando desde dentro ✨",
    "Eres tan fuerte, tan valiente, tan tú ❤️‍🔥",
    "Me encanta cómo eres, cómo piensas, cómo sientes 🧠💓",
    "Todo va a salir bien, confía en ti  🌈",
    "Tu constancia vale oro, Nata 💎",
    "Tienes un corazón precioso, no dejes que nadie te lo apague ❤️",
    "Cada día te haces más sabia y más fuerte 💫",
    "Mereces todo lo que sueñas y mucho más 🌠",
    "Tu voz tiene algo que me calma, que me cura 🎶",
    "Cuando sonríes, todo se siente más bonito 😄",
    "Eres una luchadora con un corazón inmenso 🥹💪",
    "Estás más cerca de tu sueño de lo que crees 🛤️🏡",
    "Todo esfuerzo que haces, vale y valdrá la pena 🙏",
    "Te abrazo con mis palabras cuando no puedo con mis brazos 🤗",
    "Cada cosa linda que te pase, será merecida 🎁",
    "Sigue, no te rindas, estás cerca 💪💗",
    "Tú y tu esfuerzo son un ejemplo 🌱",
    "Me inspiras más de lo que imaginas ✍️",
    "Eres abracito y todo lo bonito 🧸",
    "Nada de lo que haces es en vano, créeme 🛠️💛",
    "Si supieras lo importante que eres... 🫀",
    "Trabajadora, valiente y con un alma hermosa 🔥",
    "Tienes derecho a descansar, y a soñar 💤🌟",
    "Te quiero mucho, más de lo que mis palabras pueden decir 💛",
    "Si el día está gris, recuerda que tú eres sol jeje 🌞",
    "Mereces amor suave, sincero, bonito 💕",
    "Todo saldrá bien, repítelo 🤭",
    "Tienes todo lo necesario para lograr lo que sueñas 🚀",
    "Si alguien lo puede lograr, eres tú 🧗‍♀️",
    "Tu cansancio también habla de tu lucha 😴💖",
    "No olvides que haces lo mejor que puedes, y eso vale mucho 🌼",
    "Eres mi persona favorita para animar y abrazar 🐻‍❄️",
    "Gracias por existir, otra vez 🌍",
    "Te quiero con todos tus días buenos y malos 💛🖤",
    "Te mereces una vida bonita, y la vas a tener 🌸",
    "Eres belleza, fuerza y dulzura en un solo cuerpo 🌷🔥🍬",
    "Te pienso con cariño todos los días, aunque no diga nada 💭",
    "Vales mucho más de lo que crees 💰💖",
    "La vida te va a sonreír, como tú le sonríes a ella 😄✨",
    "Un día vas a mirar atrás y decir: lo logré 🏡🐻",
    "Siempre te voy a desear cosas lindas 🌟",
    "Nada de lo que haces pasa desapercibido, lo veo y lo valoro 👀🧡",
    "Hoy es un buen día para recordarte lo genial que eres ☀️",
    "Cada avance que haces es un orgullo enorme 📈",
    "Si la vida te pesa, aquí estoy para aligerarla 🧸",
    "Eres arte en forma de persona 🎨",
    "Quisiera darte un abrazo largo y quedarme ahí 🫂",
    "Confía en tu proceso, estás construyendo algo hermoso 🛠️🏠",
    "No te rindas, lo mejor está por llegar 🛤️💛",
    "Me importas un montón, más de lo que digo 🧸🧡",
    "Sigue siendo tú, que así ya eres perfecta 💘",
    "Tú también mereces que te cuiden 🧡",
    "Hoy, como siempre... te quiero mucho 🐻💛"
];

// Emojis extraídos directamente del final de cada mensaje
const emojis = [
    "💝", "💪", "😎", "💖", "🌸", "😊", "💎", "✅", "🌟", "❤️", "🦁", "🌱", "💯", "🙌", "🎨", "💫", "📚", 
    "🧠", "🏆", "💖", "🍎", "🏡🔑", "💼", "❤️‍🩹", "🗣️", "✨", "💡", "🤓", "📖", "🎧", "🤗", "🥰", "😂", 
    "🫂", "🥇", "🐾", "🧁", "🍬", "🖼️", "💔➡️💖", "🌙", "💞", "🌟", "🔄", "🌿", "💃", "🧐", "🎓", "🎉", 
    "🍯", "☀️", "❤️✨", "🚶‍♀️", "👑", "🛠️", "👍", "🙏", "🏁", "💪✨", "❤️", "🌈", "😊", "🌹", "✅", "🫂", 
    "💖", "🚀", "🧗‍♀️", "🏆", "😉👑", "💌", "🙏", "🤝", "💖", "🙅‍♀️", "🩵", "😄", "🍀", "❤️‍🩹", "", "🙏", 
    "💖", "💛", "🥰", "💛", "💪", "💖", "🌸", "✨", "❤️‍🔥", "🧠💓", "🌈", "💎", "❤️", "💫", "🌠", "🎶", 
    "😄", "🥹💪", "🛤️🏡", "🙏", "🤗", "🎁", "💪💗", "🌱", "✍️", "🧸", "🛠️💛", "🫀", "🔥", "💤🌟", "💛", 
    "🌞", "💕", "🤭", "🚀", "🧗‍♀️", "😴💖", "🌼", "🐻‍❄️", "🌍", "💛🖤", "🌸", "🌷🔥🍬", "💭", "💰💖", "😄✨", 
    "🏡🐻", "🌟", "👀🧡", "☀️", "📈", "🧸", "🎨", "🫂", "🛠️🏠", "🛤️💛", "🧸🧡", "💘", "🧡", "🐻💛"
];


let index = 0;
const mensajeEl = document.getElementById('mensaje');
const emojiEl = document.getElementById('emoji');
const botonEl = document.getElementById('boton');
const finalEl = document.getElementById('final');


mensajeEl.textContent = mensajes[0];
emojiEl.textContent = emojis[0];

function siguienteMensaje() {
    index++;

    if (index < mensajes.length) {
        mensajeEl.style.opacity = 0;

        setTimeout(() => {
            mensajeEl.textContent = mensajes[index];
            emojiEl.textContent = emojis[index % emojis.length];

            emojiEl.style.animation = 'none';
            void emojiEl.offsetWidth;
            emojiEl.style.animation = 'popIn 0.5s ease-out';

            mensajeEl.style.opacity = 1;
        }, 500);

    } else {
        mensajeEl.style.opacity = 0;
        emojiEl.style.opacity = 0;
        botonEl.style.transform = 'scale(0)';
        botonEl.style.opacity = 0;

        setTimeout(() => {
            mensajeEl.style.display = 'none';
            emojiEl.style.display = 'none';
            botonEl.style.display = 'none';
            finalEl.style.display = 'block';
        }, 500);
    }
}