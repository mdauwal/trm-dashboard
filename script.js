document.getElementById('togglePassword').addEventListener('click', function () {
  const passwordField = document.getElementById('password');
  const toggleIcon = this.querySelector('i');
  const toggleText = this.querySelector('span');
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    toggleIcon.classList.remove('fa-lock');
    toggleIcon.classList.add('fa-lock-open');
    toggleText.textContent = 'hide';
  } else {
    passwordField.type = 'password';
    toggleIcon.classList.remove('fa-lock-open');
    toggleIcon.classList.add('fa-lock');
    toggleText.textContent = 'show';
  }
});

document.getElementById('loginButton').addEventListener('click', function () {
  window.location.href = 'dashboard.html';
});


const states = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
    "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo",
    "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
    "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers",
    "Sokoto", "Taraba", "Yobe", "Zamfara"
  ];
  

  function toggleSidebar() {
      var sidebar = document.getElementById("sidebar");
      if (sidebar.style.display === "none" || sidebar.style.display === "") {
          sidebar.style.display = "flex";
      } else {
          sidebar.style.display = "none";
      }
  }
