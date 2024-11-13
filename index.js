"use strict";

const express = require("express");
const app = express();

// define endpoint for exercise 1 here
app.get("/math/circle", (req, res) => {
  const r = req.query;

  if (!r) {
    return res.status(400);
  }

  const area = Math.PI * r.r * r.r;
  const circ = 2 * Math.PI * r.r;

  res.json({ area, circ });
});

//TODO2

app.get("/math/rectangle", (req, res) => {
  const r = req.query;

  if (!r) {
    return res.status(400);
  }

  const area = r.a * r.b;
  const circ = 2 * (r.a + r.b);

  res.json({ area, circ });
});

app.get("/math/power/:base/:exponent", (req, res) => {
  const r = req.params;

  if (!r) {
    return res.status(400);
  }

  const potega = Math.pow(r.base, r.exponent);
  if (req.query.root == "true") {
    const pierwiastek = Math.sqrt(r.base);
    res.json({ potega, pierwiastek });
  } else {
    res.json({ potega });
  }
});
//TODO3

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
