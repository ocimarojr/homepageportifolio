document.addEventListener('DOMContentLoaded', function() {

    let emailButton = document.querySelector('#showEmailBtn');

    let emailFeedback = document.querySelector('#emailFeedback');

    if (emailButton)
    {
        emailButton.onclick = function() {

            emailFeedback.innerHTML = "ocimarojr@gmail.com";

            emailButton.disabled = true;
            emailButton.innerHTML = "E-mail Revealed!";
        }
    }

});
