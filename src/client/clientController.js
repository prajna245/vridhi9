
var clientService = require('./clientService');
var CreateclientControllerfn = async (req, res) => {
    try {
        console.log(req.body);
        var status = await clientService.CreateclientDBService(req.body);
        console.log(status);
        if (status) {
            res.send({"status": true, "message": "client created successfully"});
        } else {
            res.send({"status": true, "message": "error creating user"});
        }
    } catch(error) {
        console.log(error);
    }
}



var loginclientControllerfn = async (req, res) => {
    try {
        const result = await clientService.loginClientDBService(req.body);

        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {
            res.send({"status": false, "message": result.msg});
        }
    } catch(error) {
        console.error(error);
        res.send({"status": false, "message": "Internal server error"});
    }
};
module.exports = { CreateclientControllerfn,loginclientControllerfn };



