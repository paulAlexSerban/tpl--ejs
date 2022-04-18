const request = require("request");

exports.getAssets = (req, res, next) => {
  request(
    {
      url: `http://assets-service/assets/${req.params.dir}/${req.params.file}`,
      method: "GET",
      encoding: null
    },
    (error, response, body) => {
      if (error) {
        console.error(error);
      } else {
        res.send(body);
      }
    }
  );
};
