const jwt = require("jsonwebtoken");

//middlewear function
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    //verification of the JWT
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        return res.status(403).json("Token is invalid or expired");
      } else {
        //the changes made by the user JSON is given to the req.user(which means we are copying the data to the actual request page)
        req.user = user;
        //now the NEXT() is applied
        next();
      }
    });
  } else {
    return res.status(401).json("Your are NOT authenticated");
  }
};

//middlewear function
const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin === true) {
      next();
    } else {
      res
        .status(403)
        .json("You are not Admin. Only admin is allowed to access user files");
    }
  });
};

module.exports = {
  verifyTokenAndAdmin,
  verifyToken,
  verifyTokenAndAuthorization,
};
