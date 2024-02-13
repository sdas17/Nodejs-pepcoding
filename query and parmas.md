query and params is using for 

Route Parameters (params):

Defined in the route path using :parameterName.
======================================
Used to capture values from specific parts of the URL.
Suitable for identifying a specific resource or item in the URL.
Example: localhost:3000/user/:id - Here, id is a route parameter.
javascript
Copy code
================
app.get("/user/:id", (req, res) => {
    const userId = req.params.id;
    // ... use userId for processing
});
Example URL: localhost:3000/user/123



Encoded in the URL after the ? character.
Used for optional parameters, filters, or additional information.
Suitable for providing additional details that don't need to be part of the resource identifier.
Example: localhost:3000/user/?id=1&name=john - Here, id and name are query parameters.
javascript
========================
app.get("/user", (req, res) => {
    const userId = req.query.id;
    const userName = req.query.name;
    // ... use userId and userName for processing
});
Example URL: localhost:3000/user/?id=123&name=johndoe