const mongoose = require('mongoose');
const Music = require('../models/Music');


const getAllMusic = async (req,res) => {
    try {
        const music = await Music.find();
        res.status(200).json(music);
    }
    catch(e){
        
        res.status(500).json(e);
    }
};

const addNewMusic = async (req,res) => {
    try {
        const music = new Music({
            title: req.body.title,
            artist: req.body.artist,
            music: req.file
        });
        const newMusic = await music.save();
        console.log(req);
        res.status(200).json({music: newMusic});
    }
    catch(e){
    	console.log(req);
        res.status(500).json(e);
    }
};


const deleteMusic = async (req,res) => {
    console.log(req.body);

    try{
        const id = req.params.musicId;
        const result = await Music.deleteOne({_id:id});
        res.status(200).json(result);
    }
    catch(e){
        res.status(500).json(e);
    }

};

exports.getAllMusic = getAllMusic;
exports.addNewMusic = addNewMusic;
exports.deleteMusic = deleteMusic;
