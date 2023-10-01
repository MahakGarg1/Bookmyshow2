const db = require('../models');
const { Theatre } = require("../models/theatremodel");


// Create controllers
// 1. get all theatres
const getAllTheatres = async (req, res) => {
    console.log("hello getAllTheatres");
    const theatres = await Theatre.findAll({});
  
    return res.status(200).json(theatres);
  };
  
  //2. Add theatre
  const createTheater = async (req, res) => {
    try {
      const { name, city} = req.body;
      const newtheater = await Theater.create({
        name,
        city,
      });
      res.status(201).json(newtheater);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  //3. get theatre by id
  const getTheatreById = async (req, res) => {
    Theatre.findOne({
      where: { id: req.params.theatreId },
      include: "screens", // This will fetch all screens associated with the theatre,
    })
      .then((theatre) => {
        return res.status(200).json(theatre);
      })
      .catch((error) => {
        console.error("Error in retrieving theatre by id:", error);
      });
  }; 

  
