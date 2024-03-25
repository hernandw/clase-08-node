const express = require('express');
const Jimp = require('jimp');
const app = express();
const PORT = 3000;
const moment = require('moment');
const fs = require('fs');
const path = require('path');

app.get('/crear', async(req, res) => {
    const imagen = await Jimp.read(
    "https://miviaje.com/wp-content/uploads/2016/05/shutterstock_337174700.jpg"
);
  await imagen
    .resize(250, Jimp.AUTO)
    .greyscale().writeAsync(`assets/img/img${moment().format("X")}.png`);

  res.send("Imagen Creada con exito");
})

app.get("/leer", (req, res) => {
  const imagePath = path.join(__dirname, "assets/img/img1711396294.png");
  console.log(imagePath);
  fs.readFile(imagePath, (err, data) => {
    if (err) {
      res.status(404).send("Imagen no encontrada");
    } else {
      res.setHeader("Content-Type", "image/png");
      res.send(data); // Envía la imagen como respuesta; // Envía la imagen como respuesta
    }
  });
});



app.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}`))