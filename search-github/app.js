// Init github
const github = new GitHub;

// Init UI class
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // get input text
  const userText = e.target.value;

  if (userText !== '') {
    // make http call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message == 'Not Found') {
          // show UI alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // show profile
          ui.showProfile(data.profile);
        }
      })
  }
});