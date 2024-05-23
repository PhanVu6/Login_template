document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  const FrameEmailError = document.getElementById('frame_account');
  const iconTK = document.getElementById('tk');

  emailInput.addEventListener('blur', function () {
    // Kiểm tra định dạng email bằng regex
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const enteredEmail = emailInput.value.trim();
    
    console.log('email', emailInput.value);
    if (!emailPattern.test(enteredEmail)) {
      emailError.textContent = 'Please enter the correct email format.';
      emailInput.style.borderColor = 'red';
      FrameEmailError.classList.add('input-tk');
      iconTK.style.color = 'red';
    } else {
      emailError.textContent = '';
      emailInput.style.borderColor = '';
      FrameEmailError.classList.remove('input-tk');
      iconTK.style.color = '#38d39f';
    }

    if (emailInput.value === "") {
      emailError.style.display = "none";
      FrameEmailError.classList.remove('input-tk');
      iconTK.style.color = '#d9d9d9';
    }else{
      emailError.style.display = "block";
    }
  });
});
