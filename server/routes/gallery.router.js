const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  let picid = req.params.id;
  const sqlText =
    `
      UPDATE gallery 
      SET "likes" = "likes" + 1
      WHERE id = $1;
      `
  const sqlValues = [
    picid
  ]

  pool.query(sqlText, sqlValues)
    .then((dbResult) => {
      res.sendStatus(200)
    })
    .catch((dbError) => {
      res.sendStatus(500)
    })
});


// GET /gallery
router.get('/', (req, res) => {
  const sqlText = 
    `
        SELECT * FROM gallery
        ORDER BY "id";
    `
    pool.query(sqlText)
    .then((result) => {
        console.log(result.rows)
        res.send(result.rows)
    })
    .catch((error) => {
        console.error(error)
        res.sendStatus(500)
    })
});

module.exports = router;
