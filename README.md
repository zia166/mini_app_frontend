
# Bookify

## Technology Stack:

- **Frontend:** Angular
- **Backend:** Django
- **Database:** MongoDB (Atlas Cluster)
- **Containerization:** Docker

## Project Workflow:

1. A user books a slot through a form in the frontend.
2. An HTTP request is sent from the Angular component to the Django backend, containing the booking details.
3. The Django backend receives the request and processes it in a view function or API endpoint.
4. The backend validates the data and performs any necessary business logic or data processing.
5. If the data is valid, a new booking entry is created in the MongoDB database.
6. In the admin panel, the admin user can perform CRUD operations on the bookings.
7. The admin user can view bookings in a calendar view and perform actions like changing the status to "completed" or deleting a booking.

## Additional Details:

- The frontend is built with Angular, providing a dynamic and interactive user interface.
- The backend is developed using Django, a powerful web framework for building robust and scalable applications.
- The database used is MongoDB, hosted on an Atlas Cluster, providing a flexible and scalable NoSQL solution.
- The project has been containerized using Docker, ensuring consistent development and deployment environments.

## Conclusion:

The project showcases the capabilities of Angular, Django, MongoDB, and Docker. It provides a seamless and efficient booking system for users.


http://bookifyadmin.s3-website-us-east-1.amazonaws.com 
