


POST /users: Creates a new user account.
GET /users/:id: Retrieves information about a specific user with the given id.
PUT /users/:id: Updates information about a specific user with the given id.
DELETE /users/:id: Deletes a user with the given id.
POST /restaurants: Creates a new restaurant account.
GET /restaurants/:id: Retrieves information about a specific restaurant with the given id.
PUT /restaurants/:id: Updates information about a specific restaurant with the given id.
DELETE /restaurants/:id: Deletes a restaurant with the given id.
GET /restaurants/:id/menu: Retrieves the menu of a specific restaurant with the given id.
POST /restaurants/:id/menu: Adds an item to the menu of a specific restaurant with the given id.
PUT /restaurants/:id/menu/:item_id: Updates an item on the menu of a specific restaurant with the given id and item_id.
DELETE /restaurants/:id/menu/:item_id: Deletes an item from the menu of a specific restaurant with the given id and item_id.


GET /orders: Retrieves a list of orders placed by the user.
GET /orders/:id: Retrieves information about a specific order with the given id.
POST /orders: Places a new order.
PUT /orders/:id: Updates information about a specific order with the given id.
DELETE /orders/:id: Deletes an order with the given id.
