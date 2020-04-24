class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
  }

  // Display Profile
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary p-2">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary p-2">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success p-2">Followers: ${user.followers}</span>
            <span class="badge badge-info p-2">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show Repos
  showRepos(repos) {
    let output = "";

    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <span class="badge badge-primary p-2">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary p-2">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success p-2">Forks: ${repo.forks_count}</span>
          </div>
        </div>
        </div>
      `;
    });

    // Output repos
    document.getElementById("repos").innerHTML = output;
  }

  // Show Alert
  showAlert(message, className) {
    // Clear alert if found
    this.clearAlert();
    // Create div
    const div = document.createElement("div");
    // Add Classes
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));

    const searchContainer = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");

    searchContainer.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  // Clear Alert
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearSearchInput() {
    const input = document.getElementById("searchUser");
    setTimeout(() => {
      input.value = "";
    }, 1000);
  }
}
