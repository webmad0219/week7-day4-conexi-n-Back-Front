const express = require('express');
const router  = express.Router();

/* GET home page */
// router.get('/recetas', (req, res, next) => {
//   Recetas.find() //Suponemos que Recetas es un modelo de mongoose
//   .then(recetas =>  {
//     res.json(recetas);
//   })
// });

router.get('/', (req, res, next) => {
    res.json({name:"Pepe", age:"???", action:"Ir al baño"})
  });

router.post("/postBack" , (req, res) => {
  console.log(req.body);
  
  let {loquevamosaenviaralback} = req.body
  loquevamosaenviaralback += " aqui estaria mongoose.";

  res.json({backResponde:loquevamosaenviaralback})
})

module.exports = router;
