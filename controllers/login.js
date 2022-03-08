const User = require("../models/user");

const acceptUser = async (res, req) => {
    const phoneNumber = req.body.phonenumber;
    // const string = encodeURIComponent(phoneNumber);
    const user = await User.findOne({
        phoneNumber: phoneNumber
    }).lean();

    if (!user) {
        return res.status(400).json({
            status: "error",
            error: "Phonenumber does not exist",
        }).redirect("/signup");
    }
    res.status(201);
    res.json({ status: "ok", data: "Login successfully" });
    
    // res.redirect(302, '/?send-otp=' + string);
    res.redirect(302, '/send_otp');

}

module.exports = { acceptUser };