const dotenv = require("dotenv").config({path : './.env'});

console.log();

const generateOTP = () => {
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}


const sendOTP = async (phonenumber) => {
    const accountSid = process.env.ACNT_SID;
    const authToken = process.env.ACNT_TKN;

    // console.log(accountSid);
    const client = require('twilio')(accountSid, authToken);

    const otp = generateOTP();
    let sid = '';
    
    try {
        sid = await client.messages.create({
            body: 'Your OTP for IMS is : ' + otp,
            from: '+16019214379',
            to: '+91' + phonenumber
        }).then((message) => {
            // console.log(message.sid);
            return message.sid;
        });
        
    }
    catch (error) {
            if (error.code === 20003) {
                console.error('Twilio authentication error. Please check your credentials.');
            } else {
                console.error('Error sending message:', error);
            }
    }

    return otp;
          
};

module.exports = sendOTP;