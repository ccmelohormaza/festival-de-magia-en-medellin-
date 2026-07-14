const agenda = [

{
fecha:"Jueves 16 de julio",
eventos:[
{hora:"Viaje",titulo:"🚌 Viajar de Popayán a Pereira",lugar:""},
{hora:"Noche",titulo:"🎩 Trabajar en Pereira",lugar:""}
]
},

{
fecha:"Viernes 17 de julio",
eventos:[
{hora:"Día",titulo:"☀️ Día libre",lugar:""},
{hora:"Noche",titulo:"🎩 Trabajar en Pereira",lugar:""}
]
},

{
fecha:"Sábado 18 de julio",
eventos:[
{hora:"Día",titulo:"☀️ Día libre",lugar:""},
{hora:"Noche",titulo:"🎩 Trabajar en Pereira",lugar:""}
]
},

{
fecha:"Domingo 19 de julio",
eventos:[
{hora:"Día",titulo:"☀️ Día libre",lugar:""},
{hora:"Noche",titulo:"🎩 Trabajar en Pereira",lugar:""}
]
},

{
fecha:"Lunes 20 de julio",
eventos:[
{hora:"Día",titulo:"📍 Permanecer en Pereira",lugar:""},
{hora:"Noche",titulo:"🎩 Trabajar en Monk (si Santy confirma)",lugar:""}
]
},

{
fecha:"Martes 21 de julio",
eventos:[
{hora:"Día",titulo:"📍 Permanecer en Pereira",lugar:""},
{hora:"Noche",titulo:"🎩 Trabajar en Monk (si Santy confirma)",lugar:""},
{hora:"Antes de dormir",titulo:"🎒 Preparar maleta para Medellín",lugar:""}
]
},

{
fecha:"Miércoles 22 de julio",
eventos:[
{hora:"5:00 AM",titulo:"🚌 Salir de Pereira hacia Medellín",lugar:""},
{hora:"9:00 AM",titulo:"🏨 Llegar al hotel y dejar equipaje",lugar:"Hotel"},
{hora:"10:00 - 12:00",titulo:"🎟️ Acreditación",lugar:"Teatro Carantoña"},
{hora:"11:00 - 1:00",titulo:"🛍️ Dealers Hall",lugar:"Carantoña"},
{hora:"2:30 - 3:30",titulo:"🎤 Conferencia Germán Arciniegas",lugar:"Teatro Carantoña"},
{hora:"3:00 PM",titulo:"🏨 Check-in Hotel",lugar:"Hotel"},
{hora:"4:00 - 5:00",titulo:"🎤 Conferencia Nabil",lugar:"Teatro Carantoña"},
{hora:"7:30 PM",titulo:"🎭 Gala Inaugural",lugar:"Teatro Confa San Ignacio"}
]
},

{
fecha:"Jueves 23 de julio",
eventos:[
{hora:"11:00",titulo:"🏆 Competencias",lugar:"Teatro Carantoña"},
{hora:"1:00 - 2:30",titulo:"🛍️ Dealers",lugar:"Carantoña"},
{hora:"4:00",titulo:"🎤 Conferencia Sergio Ferrer",lugar:"Teatro Carantoña"},
{hora:"4:00",titulo:"🎤 Conferencia Tomás López",lugar:"Corporación Carantoña"},
{hora:"7:30",titulo:"🎭 Gala Mágica",lugar:"Teatro Carantoña"}
]
},

{
fecha:"Viernes 24 de julio",
eventos:[
{hora:"10:00 - 1:30",titulo:"🛍️ Dealers",lugar:"Carantoña"},
{hora:"Conversatorio",titulo:"🎤 ¿Hacia dónde va la magia?",lugar:"Teatro Carantoña"},
{hora:"2:30",titulo:"🎤 El Gran Bozzini",lugar:"Corporación Carantoña"},
{hora:"4:00",titulo:"🎤 Ingeniería del Engaño",lugar:"Corporación Carantoña"},
{hora:"5:00 - 6:30",titulo:"🛍️ Dealers",lugar:"Carantoña"},
{hora:"7:30",titulo:"🎭 Gala Mágica",lugar:"Teatro Carantoña"}
]
},

{
fecha:"Sábado 25 de julio",
eventos:[
{hora:"9:00 - 10:30",titulo:"🛍️ Dealers",lugar:"Carantoña"},
{hora:"11:00",titulo:"🎤 H.C.M. Mentalista",lugar:"Teatro Carantoña"},
{hora:"1:00",titulo:"🛍️ Dealers",lugar:"Carantoña"},
{hora:"2:00",titulo:"🎤 Defma",lugar:"Teatro Carantoña"},
{hora:"4:30",titulo:"🎭 Gala Mágica",lugar:"Teatro Carantoña"}
]
},

{
fecha:"Domingo 26 de julio",
eventos:[
{hora:"8:00",titulo:"🎒 Empacar",lugar:"Hotel"},
{hora:"9:00",titulo:"🎤 Conferencia Marko",lugar:"Teatro Carantoña"},
{hora:"11:00",titulo:"🎭 Gala Clausura",lugar:"Teatro Carantoña"},
{hora:"12:00",titulo:"🏨 Check-out y dejar equipaje",lugar:"Hotel"},
{hora:"1:00 - 3:00",titulo:"🛍️ Remate Dealers",lugar:"Carantoña"},
{hora:"4:00",titulo:"🎪 Presentación Circo Medellín",lugar:"Avenida Guayabal"},
{hora:"Noche",titulo:"🚌 Viajar a Popayán",lugar:"Terminal"}
]
},

{
fecha:"Lunes 27 de julio",
eventos:[
{hora:"Todo el día",titulo:"🏡 Llegada a Popayán",lugar:""}
]
}

];

let diaActual=0;

const contenedor=document.getElementById("agenda");
const fecha=document.getElementById("fecha");

function mostrarDia(){

fecha.textContent=agenda[diaActual].fecha;

contenedor.innerHTML="";

agenda[diaActual].eventos.forEach((evento,i)=>{

const clave="dia"+diaActual+"evento"+i;

const realizado=localStorage.getItem(clave)==="true";

const div=document.createElement("div");

div.className="evento";

if(realizado){
div.classList.add("realizado");
}

div.innerHTML=`
<div class="hora">${evento.hora}</div>
<div class="titulo">${evento.titulo}</div>
<div class="lugar">${evento.lugar}</div>

<div class="check">
<label>
<input type="checkbox" ${realizado?"checked":""}>
Realizado
</label>
</div>
`;

const check=div.querySelector("input");

check.addEventListener("change",()=>{

localStorage.setItem(clave,check.checked);

mostrarDia();

});

contenedor.appendChild(div);

});

}

document.getElementById("anterior").onclick=()=>{

if(diaActual>0){

diaActual--;

mostrarDia();

}

}

document.getElementById("siguiente").onclick=()=>{

if(diaActual<agenda.length-1){

diaActual++;

mostrarDia();

}

}

mostrarDia();