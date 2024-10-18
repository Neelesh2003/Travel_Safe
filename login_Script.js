  function loginUser() {
    // Get the values entered by the user
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve the user data from localStorage
    const storedData = localStorage.getItem(username);

    if (storedData) {
      const user = JSON.parse(storedData);

      // Validate the password
      if (user.password === password) {
        alert('Login successful!');
        window.location.href = 'Safe_Map.html'; 
        return false; 
      } else {
        alert('Incorrect password. Please try again.');
      }
    } else {
      alert('Username does not exist. Please register first.');
    }

    return false; 
  }
