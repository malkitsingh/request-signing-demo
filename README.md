# Request Signing Demo
A demo app that shows the use of HMAC in NodeJs to sign the request from custom header.

## Apps
There are 3 express applications in this repo (server, a good-client and a bad-client) 

***server*** is exposing an public method which looks for the custom header and then tries to calculate the HMAC from the body.

***good-client*** is using same secret key as of the server and hence it is getting 200 response code from the server.

***bad-client*** is using invalid secret key to sign the request and hence gets the bad request error from server.

![Apps](./images/apps.png?raw=true "Apps")



