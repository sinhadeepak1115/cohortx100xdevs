const user = [
  {
    name: "sonu",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

const express = require("express");
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  const sonuKidneys = user[0].kidneys;
  const numOfKidneys = sonuKidneys.length;
  const healthyKidney = sonuKidneys.find((element) => element.healthy === true);

  res.json({
    sonuKidneys,
    numOfKidneys,
    healthyKidney,
  });
});

app.post("/", function (req, res) {
  console.log(req.body);
  const isHealthy = req.body.isHealthy;

  // Corrected the syntax for pushing a new kidney object
  user[0].kidneys.push({
    healthy: isHealthy,
  });

  res.json({
    msg: "Done!",
  });
});

app.put("/", function (req, res) {
  // Corrected the variable name from `users` to `user`
  for (let i = 0; i < user[0].kidneys.length; i++) {
    // Corrected the syntax for updating the healthy property
    user[0].kidneys[i].healthy = true;
  }

  res.json({});
});

app.delete("/",function(req,res){
  const newKidneys= [];
  for (let i = 0; i< users[0].kidneys.length; i++){
    if (users[0].kidneys[i].healthy){
      newKidneys.push({
        healthy:true
      })
    }
  }
  users[0].kidneys = newKidneys;
  res.json({msg:"done"})
})
app.listen(3000);
