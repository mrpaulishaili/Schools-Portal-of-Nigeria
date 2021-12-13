const express = require("express");
const ejs = require("ejs");
const PORT = process.env.PORT || 3000;

// set app
const app = express("");
app.use(express.static("assets"));
app.set("view engine", "ejs");
app.listen(PORT);

console.log(`http://localhost:${PORT}`);

// routes
const validRoutes = [
  {
    name: "index",
    path: "/",
  },

  {
    name: "login",
    path: "/login",
  },
  {
    name: "pages/api-for-developers",
    path: "/api-for-developers",
  },
];

/* Valid Routes are ones the requires Authentication before accessing */

const validAuthRoutes = [
  {
    name: "dashboard",
    path: "/dashboard",
  },
  {
    name: "admin",
    path: "/admin",
  },
];

validRoutes.forEach((route) => {
  app.get(route.path, function (req, res) {
    res.render(route.name);
  });
});

validAuthRoutes.forEach((AuthRoute) => {
  app.get(AuthRoute.path, function (req, res) {
    res.render(AuthRoute.name);
  });
});
