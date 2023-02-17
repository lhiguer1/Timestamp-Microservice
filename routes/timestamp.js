var express = require('express');
var router = express.Router();


router.get('/api/:date?', (req, res) => {
    let reqDate = req.params.date

    let date;

    if (!reqDate) {
        date = new Date();
    } else {
        date = Date.parse(reqDate) ? new Date(reqDate) : new Date(Number(reqDate));
    }

    if (isNaN(date)) {
        res.json({ error : "Invalid Date" });
        return;
    }

    res.send({
        utc: date.toUTCString(),
        unix: Number(date),
    });
});

module.exports = router;
