document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const arrow = question.querySelector('.arrow');
      const isActive = answer.classList.contains('active');
      
      if (isActive) {
        arrow.style.transform = 'rotate(0deg)';
        answer.style.maxHeight = null;
        answer.classList.remove('active');
  
        // Delay removing the active class from the question for smooth transition
        setTimeout(() => {
          question.classList.remove('active'); // Remove active class after answer closes
        }, 500); // Ensure this time matches the answer's transition duration
      } else {
        arrow.style.transform = 'rotate(180deg)';
        answer.style.maxHeight = `${answer.scrollHeight}px`;
        answer.classList.add('active');
        question.classList.add('active'); // Add active class to question immediately
      }
    });
  });