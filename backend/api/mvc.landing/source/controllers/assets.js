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
        res.set('Content-Type', 'image/webp');
        res.send(body);
      }
    }
  );
};

exports.getPublic = (req, res, next) => {
  request(
    {
      url: `http://frontend-landing/public/${req.params.dir}/${req.params.file}`,
      method: "GET"
    },
    (error, response, body) => {
      if (error) {
        console.error(error);
      } else {
        const contentType = req.params.dir === 'styles' ? 'text/css' : 'application/javascript';
        res.set('Content-Type', contentType);
        res.send(body);
      }
    }
  );
};
