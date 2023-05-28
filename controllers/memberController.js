let memberController = module.exports;

memberController.home = (req, res) => {
    console.log("GET controller.home");
    res.send("Home sahifadasiz");
};
memberController.signup = (req, res) => {
    console.log("POST controller.signup");
    res.send("Signup sahifadasiz");
};
memberController.login = (req, res) => {
    console.log("POST controller.login");
    res.send("Login sahifadasiz");
};
memberController.logout = (req, res) => {
    console.log("GET controller.logout");
    res.send("Logout sahifadasiz");
};