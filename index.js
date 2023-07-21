import fs from 'fs'

let url = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg"


function descargarImagen(url,nombreImagen){
  fetch (url).then(res => res.arrayBuffer())
             .then((bufer)=> Buffer.from(bufer))
             .then((data)=>fs.createWriteStream(nombreImagen).write(data))
}

descargarImagen(url,'leon.jpg')
