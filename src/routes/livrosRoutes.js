const express = require("express");
const router = express.Router();
const controller = require("../controllers/livrosController.js");

router.post("/", controller.postLivro);
router.get("/", controller.getLivros);
router.get("/:id", controller.getLivroById);
//router.get("/:categoria", controller.getLivroByCategory); 
router.delete("/:id", controller.deleteLivroById); 
router.put("/:id", controller.putLivro); 


module.exports = router;