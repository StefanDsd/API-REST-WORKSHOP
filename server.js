require("dotenv").config();

const express = require("express");

const { server_port } = process.env;

const app = express();

const things = [
    { id: 1, name: 'Socks' },
    { id: 2, name: 'Computer' },
    { id: 3, name: 'Passion' },
   ];
   let newId = 4;

app.get("/", (req, res) => {
  res.send("Welcome to the main route");
});

app.get("/products", (req, res) => {
  res.send("products route");
});
app.get("/things", (req, res) => {
    res.send(things);
  });

app.get("/things/:id", (req, res) => {
    const parsedThingId = parseInt(req.params.id)
    const thing = things.find((thing) => thing.id === parsedThingId);
    if(thing) {
        res.send(thing);
    } else {
        res.sendStatus(404);
    }
});

app.use(express.json());
app.post('/things', (req, res) => {
    const { name } = req.body;
    const newThing = { id: newId++, name };
    things.push(newThing);
    res.status(201).send(newThing)
})



app.listen(server_port, (e) => {
  if (e) {
    console.log(e);
  } else {
    console.log("listening to port", server_port);
  }
});
