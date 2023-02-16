/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
const router = require("express").Router();

// Controllers
const workShopController = require("../controllers/workshopController");

/* -------------------------------------------------------------------------- */
/*                               WorkShop Route                               */
/* -------------------------------------------------------------------------- */

// POST request to create a new workshop
router.post("/workshop", workShopController.createWorkshop);

// GET request to get all workshops
router.get("/workshops", workShopController.getAllWorkshops);

// GET request to get a specific workshop
router.get("/workshop/:id", workShopController.getWorkshop);

// PUT request to update a specific workshop
router.put("/workshop/:id", workShopController.updateWorkshop);

// DELETE request to delete a specific workshop
router.delete("/workshop/:id", workShopController.deleteWorkshop);

// Export the router
module.exports = router;
