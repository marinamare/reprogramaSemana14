const livros = require("../models/livros.js");
const fs = require("fs")

const postLivro = (req, res) => {
  let livro = new livros(req.body);

  livro.save(function (err) {
    if (err) { 
      res.status(500).send({ message: err.message })
    } else {
    res.status(201).send(livro.toJSON(), `livro ${livro.titulo} salvo com sucesso no banco de dados! :)`);
    }
  });
};

const getLivros = (req, res) => {
  livros.find(function (err, livros) {
    if (err) {
      res.status(500).send({ message: err.message });
  } else{
    res.status(200).send(livros);
  }
});
};

const getLivroById = (req, res) => {
  const id = req.params.id
  livros.find({ id }, function (err, livros) {
      if (err) {
          res.status(424).send({ message: err.message })
      } else {
          res.status(200).send(livros)
      }
  })
}
/*
const getLivroByCategory = (req, res) => {
  const categoria = req.params.categoria;  
  livros.find({ categoria }, function (err, livros) {
    if (err) {
      return res.status(424).send({ message: err.message });
    };
    return res.status(200).send(livros);
  })
}
*/
const deleteLivroById = (req, res) => {
  const id = req.params.id
    livros.deleteOne({ id }, function(err){
        if (err) {
            res.status(424).send({ message: err.message })
        } else {
            res.status(200).send({ message : "livro removido com sucesso"})
        }
    })
};

const putLivro = (req, res) => {
  const id = req.params.id
    livros.updateMany({ id }, { $set : req.body }, { upsert : true }, function(err){
        if (err) {
            res.status(424).send({ message: err.message })
        } else {
            res.status(200).send({ message : "curso atualizado com sucesso"})
        }
    })
} 


module.exports = {
  postLivro,
  getLivros,
  getLivroById,
  //getLivroByCategory,
  deleteLivroById,
  putLivro
};
