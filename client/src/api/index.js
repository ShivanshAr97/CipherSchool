import axios from 'axios';

// Make a GET request to the /api/users endpoint
axios.get('/api/users')
  .then(response => {
    // Handle the response
    console.log(response.data);
  })
  .catch(error => {
    // Handle the error
    console.error(error);
  });

// Make a POST request to the /api/login endpoint
axios.post('/api/login', {
    email: 'johndoe@example.com',
    password: 'password123'
  })
  .then(response => {
    // Handle the response
    console.log(response.data);
    // Save the JWT token to local storage
    localStorage.setItem('token', response.data.token);
  })
  .catch(error => {
    // Handle the error
    console.error(error);
  });

// Make a PUT request to the /api/profile endpoint with the JWT token in the Authorization header
const token = localStorage.getItem('token');
axios.put('/api/profile', {
    username: 'johndoe',
    email: 'johndoe@example.com',
    interests: ['music', 'sports']
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(response => {
    // Handle the response
    console.log(response.data);
  })
  .catch(error => {
    // Handle the error
    console.error(error);
  });
