const express = require("express");
const app = express();
const axios = require('axios')


app.get("/test", async (req, res) => {
    try {
        const response = await axios.get('https://example.com')
        const { headers, data, status } = response;
        console.log(status)
        res.send({  "Status": status,
                    "Header": headers,
                    "Message": "This is a test App",
                    "Body": data,});
    } catch (error) {
        console.error(error)
    }
});
const port = "8080";
app.set("port", port);
app.listen(port, () => console.log(`API running on localhost:${port}`));
