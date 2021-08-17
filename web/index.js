const express = require("express");
const request = require("request");

const app = express();
const port = 3000;
const restApiUrl = process.env.API_URL;
//const restApiUrl = 'http://127.17.0.1:3001/data';

app.get("/", function (req, res) {
  request(
    restApiUrl,
    {
      method: "GET",
    },
    function (err, resp, body) {
      if (!err && resp.statusCode === 200) {
        var objData = JSON.parse(body);
        var c_cap = objData.data;
        var responseString = `<table border="1"><tr><td>Course</td><td>Description</td></tr>`;

        for (var i = 0; i < c_cap.length; i++)
          responseString =
            responseString +
            `<tr><td>${c_cap[i].course}</td><td>${c_cap[i].description}</td></tr>`;

        responseString = responseString + `</table>`;
        res.send(responseString);
      } else {
        console.log(err);
      }
    }
  );
});

app.listen(port, () => console.log(`Frontend app listening on port ${port}!`));
