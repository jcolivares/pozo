//Esrte programa ...

function saludar(){
   alert("Bastante de javascript y ya nos queremos ir");

}

let estado = true

function posicionar(pos){
   let latitud = pos.coords.latitude
   let longitud = pos.coords.longitude

   let menu = document.getElementById("menu")
   menu.innerHTML="<iframe width='800' height='800' src='https://www.openstreetmap.org/?mlat="+latitud+"&mlon="+longitud+"'></iframe>"
   //menu.innerHTML="<img src='https://www.openstreetmap.org/?mlat="+latitud+"&mlon="+longitud+"'></img>"
   
   //menu.innerText="<iframe href='https://www.openstreetmap.org/?mlat="+latitud+"&mlon="+longitud+"></iframe>"
}

//Es como el main..
window.addEventListener("load", function(){
   //this.alert("cargando");
   let c2 = this.document.getElementById("c2")
   //c2.addEventListener("click", saludar)
   c2.addEventListener("click", ()=>{
      let pie = this.document.getElementById("pie")
      if(estado){
         pie.style="display: none"
         estado = false
      } else {
         pie.style="display: block"
         estado = true
      }
      
   })

   let titulo = this.document.getElementById("titulo")
   titulo.addEventListener("click", ()=>{
      if(this.navigator.geolocation){
         //this.alert("Si soporta geolocalizacion")
         this.navigator.geolocation.getCurrentPosition(posicionar)
      } else {
         this.alert("No soporta geolocalizacion")
      }
   })
})