'use strict'

const port = process.env.PORT || 4000;

const express = require('express');
const logger = require('morgan');
const mongojs = require('mongojs');

var db = mongojs('SD');
var id = mongojs.ObjectID;


const app = express();


// Declaramos los middleware
app.use(logger('dev')); // probar con: tiny, short, dev, common, combined
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.param("coleccion", (req, res, next, coleccion) =>{
  console.log('param /api/:coleccion');
  console.log('coleccion: ', coleccion);

  req.collection = db.collection(coleccion);
  return next();
});

// routes
app.get('/api', (req, res, next) => {
  console.log(req.params); 
  console.log(req.collection); 

  db.getCollectionNames((err, colecciones) => { 
    if (err) return next(err); 
        res.json(colecciones); 
     });
});

app.get('/api/:coleccion', (req, res, next) => { 
 req.collection.find((err, coleccion) => { 
    if (err) return next(err); 
    res.json(coleccion); 
  }); 
 }); 
 
app.get('/api/:coleccion/:id', (req, res, next) => { 
  req.collection.findOne({_id: id(req.params.id)}, (err, elemento) => { 
    if (err) return next(err); 
    res.json(elemento); 
  }); 
}); 

app.post('/api/:coleccion', (req, res, next) => { 
  const elemento = req.body; 
  console.log(elemento);

  if (!elemento.nombre) { 
    res.status(400).json ({ 
    error: 'Bad data', 
    description: 'Se precisa al menos un campo <nombre>' 
    }); 
  } else { 
  req.collection.save(elemento, (err, coleccionGuardada) => { 
      if(err) return next(err); 
      res.json(coleccionGuardada); 
    }); 
  } 
}); 

app.put('/api/:coleccion/:id', (req, res, next) => { 
  let elementoId = req.params.id; 
  let elementoNuevo = req.body; 
  req.collection.update({_id: id(elementoId)}, 
  {$set: elementoNuevo}, {safe: true, multi: false}, (err, elementoModif) => { 
    if (err) return next(err); 
    res.json(elementoModif); 
  }); 
}); 
 
app.delete('/api/:coleccion/:id', (req, res, next) => { 
  let elementoId = req.params.id; 

  req.collection.remove({_id: id(elementoId)}, (err, resultado) => { 
    if (err) return next(err); 
    res.json(resultado); 
  }); 
}); 
 
 
// Iniciamos la aplicación 
app.listen(port, () => { 
  console.log(`API REST ejecutándose en http://localhost:${port}/api/:coleccion/:id`); 
});