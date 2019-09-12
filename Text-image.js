//import { getScreenHots } from "./Pscreenshots";
const getScreenHots = require("./Pscreenshots")
//import { url } from "inspector";

//import {tesseract} from 'tesseract.js'
const tesseract =require("tesseract.js")

module.export = async function getText(url){
const image =await getScreenHots(url);

const {TesseractWorker} = tesseract;
const worker = new TesseractWorker();
worker
    .recognizer(image,'eng+pol')
    .progress((p) => {
        console.log('progres',p);
    })
    .then(({ text }) => {
        console.log(text);
         return text;
        worker.terminate();
    });
}
