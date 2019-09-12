const express = require("express");
//import { getText } from "./Text-image";
//import {getScreenHots} from "./Pscreenshots";

const getText=require("./Text-image");
const getScreenHots= require("./Pscreenshots");

const app = express();

const port = process.env.PORT || 8080;

app.set('view engine', 'pug');

app.get('/api', async (req, res, next) => {
    // changes start here
    if (req.query.videoId === undefined || req.query.t === undefined) {
      res.send('Invalid videoId: ' + req.query.videoId + '&t=' + req.query.t)
      return
    }
    const {videoId, t} = req.query
    const url = `https://www.youtube.com/watch?v=${videoId}&t=${t}s`;

    let foto = Buffer.from(await getScreenHots(url), "base64");
    let Text = await getText(url);

    res.render('view',{image: foto, Text:Text });

});

app.listen(port,() =>{
    console.log("Listening on port", port);
});