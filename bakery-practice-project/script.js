// ===== Signup =====
document.getElementById('signupForm').addEventListener('submit', function(e){
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const message = document.getElementById('signupMessage');

    if(username && email && password){
        localStorage.setItem('user', JSON.stringify({username,email,password}));
        message.style.color = 'green';
        message.textContent = 'Sign up successful! You can now login.';
        setTimeout(() => {
            var modal = bootstrap.Modal.getInstance(document.getElementById('signupModal'));
            modal.hide();
        }, 1000);
    } else {
        message.style.color = 'red';
        message.textContent = 'Please fill all fields.';
    }
});

// ===== Login =====
document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const message = document.getElementById('loginMessage');
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if(storedUser){
        if(username === storedUser.username && password === storedUser.password){
            message.style.color = 'green';
            message.textContent = 'Login successful!';
            setTimeout(() => {
                var modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
                modal.hide();
            }, 1000);
        } else {
            message.style.color = 'red';
            message.textContent = 'Invalid username or password';
        }
    } else {
        message.style.color = 'red';
        message.textContent = 'No user found. Please sign up first.';
    }
});
