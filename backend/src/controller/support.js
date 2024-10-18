const Support = require("../model/support");
const nodemailer = require("nodemailer");
require("dotenv").config();

exports.createSupport = async (req, res) => {
  try {
    const SupportData = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    };

    const Supportdata = new Support(SupportData);
    await Supportdata.save();

    res.status(201).json(Supportdata);
  } catch (error) {
    console.error("Error creating Support:", error);
    // Send back the detailed error message for debugging
    res.status(500).json({ message: error.message, stack: error.stack });
  }
};

exports.getSupports = async (req, res) => {
  try {
    const Supports = await Support.find().sort({ createdAt: -1 })
    res.status(200).json({ Supports });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Support members",
      error: error.message,
    });
  }
};
