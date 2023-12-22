const express = require('express');
const router = express.Router();
const sendOTP = require('./Utils/sendOTP');

router.use(express.json());

router.post('/sendOTP', async (req, res) => {
    const { phonenumber } = req.body;
    const otp = await sendOTP(phonenumber);
    res.status(200).json(otp);
});

router.post('/verifyOTP', async (req, res) => {
    const { otp , phonenumber } = req.body;
    const { status } = await verifyOTP(otp, phonenumber);
    res.status(200).json({ status });
});

module.exports = router;