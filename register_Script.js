function registerUser() {
    const fullname = document.getElementById('fullname').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const userData = { fullname, password };
    localStorage.setItem(username, JSON.stringify(userData));

    alert('Registration successful! Redirecting to login page...');
    window.location.href = 'login_Page.html'; 

    return false; 
  }