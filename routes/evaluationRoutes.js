const evaluationController = require("../controllers/evaluationController");

const router = require("express").Router();

router.post("/", evaluationController.insertResult);
router.get("/", evaluationController.getAllResults);
router.get("/queries/:query_id", evaluationController.getResultsByQuery);
router.get("/models/:model_id", evaluationController.getResultsByModel);

module.exports = router;