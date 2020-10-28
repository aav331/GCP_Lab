const express = require("express");
const app = express();
const axios = require('axios')
const soapRequest = require('easy-soap-request');
const parser = require('xml2json');


app.get("/test", async (req, res) => {
    try {
        const response = await axios.post('http://example.com')
        const { headers, data, status } = response;
        console.log(status)
        res.send({  "Status": status,
                    "Header": headers,
                    "Message": "This is a test App",
                    "Body": data,});
    } catch (error) {
        console.log("Error in getting data");
        console.error(error)
    }
});

app.get("/session", async(req, res) => {
    try {
        const username = ""
        const password = "";
        const loginurl = "http://10.1.2.3/data";
    
        const header = {
          'Content-Type': 'text/xml; charset=utf-8',
          'SOAPAction': '{N/A}',
        };
    
        const xml = `<x:Envelope
          xmlns:x="http://schemas.xmlsoap.org/soap/envelope/"
          xmlns:urn1="urn:enterprise.soap.sforce.com">
          <x:Header>
          </x:Header>
          <x:Body>
              <urn1:login>
                  <urn1:username>${username}</urn1:username>
                  <urn1:password>${password}</urn1:password>
              </urn1:login>
          </x:Body>
        </x:Envelope>`;
    
        const {response} = await soapRequest({
          url: loginurl,
          headers: header,
          xml: xml,
        });
        const {headers, body, statusCode} = response;
        res.status(200).send({'status': 200, 'message': response});
      } catch (error) {
        console.log('External server error while getting data from Salesforce', error);
        res.status(401).send({'status': 401, 'message': error});
    }
})
const port = "8080";
app.set("port", port);
app.listen(port, () => console.log(`API running on localhost:${port}`));
