/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Models
const Workshop = require("../models/workshopModel");

/* -------------------------------------------------------------------------- */
/*                             WorkShop Contorller                            */
/* -------------------------------------------------------------------------- */

/**
 * get all workshops from the database and send it to the client side
 * @param {*} req  request object from the client side
 * @param {*} res  response object from the server side
 */
const getAllWorkshops = async (req, res) => {
  try {
    const workshops = await Workshop.find();

    res.status(200).json({
      status: "success",
      results: workshops.length,
      data: {
        workshops,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message || "Some error occurred while retrieving workshops.",
    });
  }
};

/**
 * create a new workshop and save it to the database and send it to the client side
 * @param {*} req request object from the client side
 * @param {*} res response object from the server side
 */
const createWorkshop = async (req, res) => {
  const workshop = new Workshop({
    name: req.body.name,
    description: req.body.description,
    date: req.body.date,
  });

  await workshop
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Workshop.",
      });
    });
};

/**
 * get a workshop from the database and send it to the client side
 * @param {*} req request object from the client side
 * @param {*} res response object from the server side
 */
const getWorkshop = async (req, res) => {
  try {
    const workshop = await Workshop.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        workshop,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message:
        err.message || "Some error occurred while retrieving the workshop.",
    });
  }
};

/**
 * update a workshop from the database and send it to the client side
 * @param {*} req request object from the client side
 * @param {*} res response object from the server side
 */
const updateWorkshop = async (req, res) => {
  try {
    const workshop = await Workshop.findById(req.params.id);
    if (!workshop) {
      return res.status(404).json({ message: "Workshop not found" });
    }
    // Update the workshop data
    workshop.name = req.body.name || workshop.name;
    workshop.description = req.body.description || workshop.description;
    workshop.date = req.body.date || workshop.date;

    // Save the updated workshop to the database
    const updatedWorkshop = await workshop.save();

    res.status(200).json({
      status: "success",
      data: {
        updatedWorkshop,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message:
        err.message || "Some error occurred while updating the workshop.",
    });
  }
};

/**
 * delete a workshop from the database and send it to the client side
 * @param {*} req request object from the client side
 * @param {*} res response object from the server side
 */
const deleteWorkshop = async (req, res) => {
  try {
    const workshop = await Workshop.findById(req.params.id);
    if (!workshop) {
      return res.status(404).json({ message: "Workshop not found" });
    }

    await workshop.remove();

    res.status(200).json({ status: "success", message: "Workshop deleted" });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message:
        err.message || "Some error occurred while deleting the workshop.",
    });
  }
};

/**
 * export all the functions to be used in the routes
 */
module.exports = {
  getAllWorkshops,
  createWorkshop,
  getWorkshop,
  updateWorkshop,
  deleteWorkshop,
};
