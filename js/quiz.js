// Function to prompt user to start the quiz
function startQuiz() {
    // Hide the prompt button and show the quiz
    document.getElementById('quiz-prompt').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
}

// Function to submit the quiz and calculate the score
function submitQuiz() {
    var score = 0;
    var totalQuestions = 7;

    // Correct answers
    var correctAnswers = {
        q1: 'a',
        q2: 'b',
        q3: 'c',
        q4: 'a',
        q5: 'a',
        q6: 'c',
        q7: 'c'
    };

    // Check answers
    for (var i = 1; i <= totalQuestions; i++) {
        var question = document.querySelector('input[name="q' + i + '"]:checked');
        if (question && question.value === correctAnswers['q' + i]) {
            score++;
        }
    }

    // Display result
    document.getElementById('quiz-result').style.display = 'block';
    document.getElementById('score').textContent = score;

    var feedback = '';
    if (score === totalQuestions) {
        feedback = 'Excellent! You got all answers correct!';
    } else if (score >= totalQuestions / 2) {
        feedback = 'Good job! You know your stuff!';
    } else {
        feedback = 'Keep practicing! You can do better!';
    }

    document.getElementById('feedback').textContent = feedback;
}
