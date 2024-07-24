function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
    }
  }
  
  function validateLogin() {
    const loginId = document.getElementById('login-id').value;
    const password = document.getElementById('password').value;
  
    if (loginId === 'admin' && password === 'admin') {
      alert('Login successful');
    } else {
      alert('Invalid login ID or password');
    }
  }
  