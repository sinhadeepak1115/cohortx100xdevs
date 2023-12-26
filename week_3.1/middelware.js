const express = require("express");

const app = express();

function isOldEnoughMiddleware(req,res,next){
  const age = req.query.age;
  if (age >= 14){
    next();
  }else{
    res.json({
      msg:"Sorry Tambi not old enough to ride"
    });
  }
}
app.use(isOldEnoughMiddleware)
app.get("/ride1", (req, res) => {
  res.json({
    msg: "Ride it like a champ Ride1 is a success."
  });
});

app.get("/ride2", (req, res) => {
  res.json({
    msg: "Ride it like a champ Ride2 is a success."
  });
});
app.listen(3000);
