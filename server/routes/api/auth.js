const express = require("express");
const router = express.Router();
const { hash, compare } = require("../../bc");

//Admin Model

const Admin = require("../../models/Admin");

// qroute post api/auth /login
// @desc post All Admins
// @access Public

router.post("/api/auth", (req, res) => {
    console.log("get login");
    // console.log("req in login", req.body);
    // console.log("req.session in login", req.session.id);

    const { email, password } = req.body;
    if (!email || !password) {
        console.log("filds not filled");
        return res.status(400).json({ msg: "please enter all fields" });
    }
    //check for admin
    Admin.findOne({ email }).then((admin) => {
        if (!admin)
            return res.status(400).json({ msg: "Admin does not exist" });

        // validate password
        // console.log("password adim", admin.password);
        // console.log("password ", password);
        compare(password, admin.password)
            .then((result) => {
                if (result) {
                    res.json({
                        success: true,
                        admin: {
                            id: admin._id,
                            first: admin.first_name,
                            last: admin.last_name,
                            email: admin.email,
                        },
                    }).status(200);
                } else {
                    console.log("invalid credentials");
                    res.status(400).json({ msg: "invalid credentials" });
                }
            })
            .catch((err) => {
                console.log("invalid credentials", err);
                res.status(400).json({ msg: "invalid credentials" });
            });
    });
});

// qroute get api/auth/admin
// @desc get admin data
// @access Privte
// every admin has its own token whci verifey him/her on the login
// router.get("/api/auth/admin", (req, res) => {
//     console.log("get admin", req.session);
// if (!req.admin) {
//     return res.status(400).json({ msg: "no admin found" });
// }
// Admin.find(req.admin.id).then((admin) => {
//     res.json(admin);
// });
// });

router.get("/api/auth/logout", (req, res) => {
    req.session.id = null;
    // res.redirect("/");
    res.status(200).send();
});

module.exports = router;
