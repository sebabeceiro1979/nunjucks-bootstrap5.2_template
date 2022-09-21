module.exports = {
  showHome: (req, res) => {
    res.render("index");
  },
  showLink1: (req, res) => {
    res.render("link1");
  },
  showLink2: (req, res) => {
    res.render("link2");
  },
  showAboutUs: (req, res) => {
    res.render("about");
  },
  showContact: (req, res) => {
    res.render("contact");
  },
};
