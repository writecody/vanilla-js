// Create a UI class
class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Display profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3>
        <div class="row>
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block" >View Profile</a>
          </div>
          <div class="col-mid-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-primary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-primary">Follwers: ${user.followers}</span>
            <span class="badge badge-primary">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3>Latest Repos</h3>
      <div id="repos"></div>
    `
  }

  // Show user repos
  showRepos(repos) {
    let output = '';

    repos.forEach(function(repo) {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badget badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badget badge-primary">Watchers: ${repo.watchers_count}</span>
              <span class="badget badge-primary">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `
    });

    // Output repos
    document.getElementById('repos').innerHTML = output;
  }

  // Show alert message
  showAlert(message, className) {
    // clear alert if one already present in UI
    this.clearAlert();

    this.clearProfile();
    // create div
    const div = document.createElement('div');
    // add Bootstrap class to alert
    div.className = className;
    // add text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector('.searchContainer');
    // get search input
    const search = document.querySelector('.search');
    // insert the alert
    container.insertBefore(div, search);

    // time out after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}