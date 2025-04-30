# E-commerce-follow-along

# Ecommerce-Follow-Along

## Overview
This is a feature-rich eCommerce application that allows users to browse, search, and purchase products. The application includes user authentication, product management, a shopping cart, order processing, and payment integration.

## Milestone 1: Project Overview
During this session, we covered the basics of setting up a project repository and initializing it with a README file. We also outlined the overall structure of our e-commerce application, including key features and the technologies we'll be using.

## Features
- **User Authentication**: Secure user registration and login using JWT.
- **Product Management**: CRUD operations for products, including categories and search functionality.
- **Shopping Cart**: Users can add, remove, and update products in their cart.
- **Order Processing**: Seamless checkout process with order history.
- **User Profile**: Users can view and update their profile and order history.

## Tech Stack
- **Frontend**: React, Redux, CSS, Vite
- **Backend**: Node.js

###

* Completed foundation for E-commerce application

## Milestone 2

* separate folders for frontend and bavkend
* A functional login page in the frontend
* Completed setting for tailwind css


## Milestone 3:Backend configuration & database connection

* Organized the backend folder structure for scalability
* connected the server to the MongoDB using mongoose
* Implemented error-handling middleware for API stability


## Milestone 4:user management & file handling
* created the user model in mongoose to define the user data structure   
* Developed the user controller to manage user authentication(signup,login).
* Implemented multer for file handling ,allowing user profile and product image   uploads                                                     

## Milestone 5:user Registration & file handling
* created the "signup page"  in react and added code for signup backend also.
* Added the "Signup page" validation in (signup,login).

## Milestone 6:password hashing by using bcryptjs
* added the password encryption in backend signup page 
* added comparision for checking password correct or not in login backend.





# Milestone 7

  - created all the requirements *login authentication* in the backend file.
  - Here we are first getting the hashed password from db searched by email and then comparing the input body password with hashed password by compare method in bcrypts.

  # Milestone 8
  
   - added the *product page* in the frotend as a home page.
   - and added the designs for products page and home page with css for both.




## Milestone 9:created form for product upload
* created the Addproduct page in frontend
* Added form validation in Addproducts page.

## Milestone 10:created schema product upload
* created the productModel page in backend.
* created the productRouter page in backend.
* handled file uploads by multer inside middlewares multer.

# Milestone 11

   - created **Home page** for dynamic products presenatation.
   - added the **backend** part for handeling products(created endpoint to get products).
   - handeled file uploads by multer inside middleware multer

# Milestone 12:showing products according to user
* created **product page** for dynmaic product presentation according to user mail
* created backend for specific user products.


# Milestone 13

   - created **product update endpoint** for updating products.
   - created from for updating data in frontend and created autofill function.


 # Milestone 14: Created Product Delete**

   - created**product delete Endpoint** for Updating products.
   - created from for Deleting product in frontend.


   # Milestone 15:
   - created *Navigation bar* for navigation pages


   # Milestone 16  Created product Details page

   - created *Product Details* for showing full product details in details page.
   - Added add-to-cart button with quantity selection.

   # Milestone 17: Created CRUD for cart
   - created endpoints **CRUD** for handling cart.
   - Handled quantity for product in cart.


   # Milestone 18 Frontend cart page
   - created cart page in frontend.
   - Handled cart operations from frontend.


  # Milestone 19 Backend endpoint for cart item quantity
   - created put request for updating quantity for cart item.


   
   # Milestone 20 Backend endpoint for userDetails
    - Created endpoint for userDetails in backend.
    - Created User.jsx for userDetails in frontend.



   # Milestone 21 Created frontend for Address
   - Created route for Add address page in frontend.
   - Create form for adding address.
   - Started address using useState Hook.

   # Milestone 22:Created backend for address and attached with frontend
   - created backend endpoint for handling address
   - added backend endpoint with frontend.

   # Milestone 23: worked on address on frontend and backend
   - Created place order button in cart page and added navigation to select address.
   - Created select address page and provided option to select one address.
   - Created backend end point to send all address to user.


   # Milestone 24 Worked on address in frontend and backend
   - Displayed all of products in cart.
   - Displayed all address in address selection page.
   - Displayed total price in the cart.
   - Added place order button at the bottom.


   # Milestone 25 Worked on order backend and email service
   - Created endpoint for order.
   - Implemented mail service from nodemailer.
   - Handled address for the delivery.
   

   # Milestone 26 Worked on order backend and email service
   - Implemented mail with nodemailer.
   - Sending order details to user via mail.