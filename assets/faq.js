const questions = document.querySelectorAll('[data-question]');
questions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.querySelector('[data-answer]');
    answer.classList.toggle('active');
  });
});
