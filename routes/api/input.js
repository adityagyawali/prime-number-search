const express = require("express");
const router = express.Router();

//input model
const Input = require("../../models/Input");

//@route GET `api/input/test`
//PUBLIC
router.get("/test", (req, res) => {
	res.json({ msg: `test works` });
});

//@route POST `api/input/`
//PUBLIC
router.post("/", (req, res) => {
	console.log("req.body1111", req.body);
	const data = new Input({
		inputNum: req.body.inputNum,
		foundNum: req.body.foundNum
	});

	data.save().then(msg => res.status(200).json(msg));
});

//@route GET `api/input/test`
//PUBLIC
router.get("/", (req, res) => {
	Input.find()
		.sort({ date: -1 })
		.then(msg => res.json(msg))
		.catch(() => res.json({ msg: "cannot fetch the data" }));
});

//@route DELETE `api/input`
//public
router.delete("/", (req, res) => {
	Input.deleteMany().then(msg => res.json({ msg: "success" }));
});

module.exports = router;
