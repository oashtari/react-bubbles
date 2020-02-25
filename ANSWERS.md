- [ ] Explain what a token is used for.

Tokens are used as a means to authenticate a user/customer, allowing them access to something that is behind a protected page. Upon login, the app's server(s) can send back a token and have it stored locally on the client-side, allowing the customer to access to protected information. The server can also use the token to decide on permissions, data transfer and anything else that is not publicly available.


- [ ] What steps can you take in your web apps to keep your data secure?

You can create client-side authentication so that only permitted users are able to access secure information. That information can be stored behind protected routes, which are only available to logged in customers.


- [ ] Describe how web servers work.

Well, that's quite a broad question. Web servers are basically machines that store the code for websites. These servers are connected to the internet (yes, that 'thing'), and when pinged, they will send back data to the requestor, rendering the requested information, whether it is news posts on NPR, or your friends page on Facebook.


- [ ] Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

The methods that map to CRUD, using the method names from axios:
C(reate) - .post, which will add new data to the api
R(ead) - .get, which will ping the api and read the information
U(pdate) - .put, which will make edits and update data at the api endpoint
D(elete) - .delete, which will delete specified information