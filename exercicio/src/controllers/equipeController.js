const equipe = require("../models/equipe.js");

const getColaboradoras = (req, res) => {
  equipe.find(function (err, equipe) {
    if (err) res.status(500).send(err.message);
    res.status(200).send(equipe);
  });
};

const getPessoaById = (req, res) => {
  const id = req.params.id;
  equipe.find(id, function (err, equipe) {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      res.status(200).send(equipe);
    }
  });
};

const postColaboradora = (req, res) => {
  equipe.countDocuments((err, count) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      let colaboradora = new equipe(req.body);
      colaboradora.id = count + 1;
      colaboradora.save(function (err) {
        if (err) {
          res.status(424).send({ message: err.message });
        } else {
          res.status(200).send({
            status: true,
            mensagem: "Colaboradora adicionada com sucesso! :)",
          });
        }
      });
    }
  });
};

const deleteColaboradora = (req, res) => {
  const id = req.params.id;
  equipe.deleteMany({ id }, function (err) {
    if (err) {
      res.status(500).send({ message: err.message });
    }
    res
      .status(200)
      .send({ message: `Cursos de ID ${id} deletado/s com sucesso` });
  });
};

const putColaboradora = (req, res) => {
  try {
    const id = req.params.id;
    equipe.updateMany({ id }, { $set: req.body }, { upsert: true }, function (
      err
    ) {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res
          .status(200)
          .send({ message: `Objeto de ID ${id} atualizado com sucesso! :)` });
      }
    });
  } catch (err) {
    return res.status(424).send({ message: err });
  }
};
/* const patchColaboradora = (req, res) => {
  const id = req.params.id;
  const atualizacao = req.body;
  console.log(atualizacao);

  try {
    const colaboradoraASerModificada = equipe.find(
      (colaboradora) => colaboradora.id == id
    );

    //Ele vai buscar dentro do objeto tarefaASerModificada atributos em que o nome coincida com os do objeto atualizacao, e vai substituir o valor

    Object.keys(atualizacao).forEach((chave) => {
      colaboradoraASerModificada[chave] = atualizacao[chave];
    });

    fs.writeFile(
      "./src/models/equipe.json",
      JSON.stringify(equipe),
      "utf8",
      function (err) {
        if (err) {
          return res.status(424).send({ message: err });
        }
        console.log("Arquivo atualizado com sucesso!");
      }
    );

    return res.status(200).send(equipe);
  } catch (err) {
    return res.status(424).send({ message: err });
  }
}; */

module.exports = {
  getColaboradoras,
  getPessoaById,
  postColaboradora,
  deleteColaboradora,
  putColaboradora,
  // patchColaboradora,
};
