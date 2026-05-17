const Menu = require("../models/Menu");

const addMenuItem = async (req, res) => {
  try {

    const menu = await Menu.create(req.body);

    res.status(201).json({
      message: "Menu item added",
      menu
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getMenuItems = async (req, res) => {
  try {

    const menus = await Menu.find();

    res.status(200).json(menus);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  addMenuItem,
  getMenuItems
};