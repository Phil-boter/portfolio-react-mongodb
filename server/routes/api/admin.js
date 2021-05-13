const express = require("express");
const router = express.Router();
const { hash, compare } = require("../../bc");

//Admin Model

const Admin = require("../../models/Admin");

// qroute post api/admin / register
// @desc post All Admins
// @access Public

router.post("/api/admin", async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    if (!first_name || !last_name || !email || !password) {
        return res.status(400).json({ msg: "please enter all fields" });
    }
    const admin = await Admin.findOne({ email });
    if (admin) return res.status(400).json({ msg: "Admin already exists" });

    const newAdmin = new Admin({
        first_name,
        last_name,
        email,
        password,
    });

    newAdmin.password = await hash(password);
    await newAdmin.save().then((admin) => {
        console.log("userdata is stored", req.session);
        req.session.id = admin._id;
        res.json({
            success: true,
            adminId: req.session.id,
            admin: {
                id: admin._id,
                first: admin.first_name,
                last: admin.last_name,
                email: admin.email,
            },
        });
    });
});

module.exports = router;
