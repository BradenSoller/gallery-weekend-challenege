const express = require('express');
const router = express.Router();
const pool = require('./modules/pool');
// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  let id = req.params.id;
  const sqlText =
    `
      UPDATE shoppinglist 
      SET "likes" = "likes" + 1
      WHERE id = $2;
      `
  const sqlValues = [
    1,
    id
  
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
        ORDER BY "likes", "url";
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
