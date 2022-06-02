const express = require("express");
const app = express();
const PORT = 8001;

const characters = {
    "sonic": {
        "name": "Sonic The Hedgehog",
        "alias": "Super Sonic",
        "powers": "World's fastest hedgehog"
    },
    "eggman": {
        "name": "Doctor Ivo Robotnik",
        "alias": "Doctor Eggman",
        "powers": "Genius with an IQ of 300"
    },
    "tails": {
        "name": "Miles Prower",
        "alias": "Tails",
        "powers": "Two-tailed fox, who can propel himmself into the air like helicopter and has a very high IQ"
    },
    "metal sonic": {
        "name": "Metal Sonic",
        "alias": "Metal Overlord",
        "powers": "Evil robotic version of Sonic, with laser cannon, jet engine and a force field device"
    },
    "knuckles": {
        "name": "Knuckles the Echidna",
        "alias": "Red Echidna",
        "powers": "Sonic's friendly rival, with great strength and mastery of martial arts"
    },
    "donut lord": {
        "name": "Thomas Michael Wachowski",
        "alias": "Sheriff",
        "powers": "Eating donuts and a father figure to Sonic"
    }
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get("/api/:characterName", (req, res) => {
    console.log(req.params.characterName);
    const characterName = req.params.characterName.toLowerCase();
    if(characters[characterName]) {
        res.json(characters[characterName]);
    }  else {
        res.json(characters['donut lord']);
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! You better go catch it!`);
})