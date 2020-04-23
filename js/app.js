// Init Github
const github = new GitHub();
// Init UI
const ui = new UI();

// Search input
const searchUser = document.querySelector("#searchUser");

document.querySelector("#searchBtn").addEventListener("click", getData);

function getData(e) {
  e.preventDefault();

  const userText = searchUser.value;
  if (userText != "") {
    // Make http call
    github.getUSer(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show Alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Show Profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    ui.clearProfile();
  }
}
