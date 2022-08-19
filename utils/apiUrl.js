"use strict";

const BACKEND_ENV = process.env.NEXT_PUBLIC_BACKEND_ENV;

module.exports = (path) => {
  if (BACKEND_ENV == "production") {
    return "https://backend-staging.classicmechanicsgarage.com/api/" + path;
  }
  else {
    return `http://localhost:1337/api/` + path;
  }
};
