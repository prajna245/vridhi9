
const clientModel = require('./clientModel');


module.exports.CreateclientDBService = (clientDetails) => {
    return new Promise((resolve, reject) => {
        const { fullName, email, phoneNumber, otp, password } = clientDetails;
        const clientModelData = new clientModel({
            fullName,
            email,
            phoneNumber,
            otp,
            password 
        });

        clientModelData.save()
            .then(result => {
                resolve(true); 
            })
            .catch(error => {
                console.error('Error saving client:', error);
                reject(false); 
            });
    });
};
module.exports.loginClientDBService = async (clientDetails) => {
    try {
        const emailRegex = new RegExp('^' + clientDetails.email + '$', 'i');
        console.log("Input email:", clientDetails.email);
        const result = await clientModel.findOne({ email: { $regex: emailRegex } });
        console.log("Result from database:", result);

        if (!result) {
            return { status: false, msg: "Client details not found" };
        } else {
            if (result.password === clientDetails.password) {
                return { status: true, msg: "Client validated successfully" };
            } else {
                return { status: false, msg: "Client validation failed" };
            }
        }
    } catch(error) {
        console.error("Error retrieving client details:", error);
        throw { status: false, msg: "Error retrieving client details" };
    }
};








