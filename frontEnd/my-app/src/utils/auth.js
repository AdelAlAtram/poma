// utils/auth.js
export const isAuthenticated = () => {
    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
    return token ? true : false; // Return true if token exists, otherwise false
  };
  