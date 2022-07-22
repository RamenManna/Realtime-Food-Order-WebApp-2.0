const User = require("../../models/user");

function profileController() {
  return {
    async index(req, res) {
      const users = await User.find({});
      return res.render("admin/profile", { users });
    },
    async updateProfileInfo(req, res) {
      const id = req.body.userId;

      const user = await User.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            gender: req.body.gender,
            name: {
              firstname: req.body.firstname,
              lastname: req.body.lastname,
            },
            email: req.body.email,
          },
        },
        { useFindAndModify: false, new: true }
      );
      console.log(user);
      res.redirect("/admin/profile");
    },
}
}
module.exports = profileController