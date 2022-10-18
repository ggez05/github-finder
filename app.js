// INIT GITHUB

const github = new GitHub;

// INIT UI 

const ui = new UI;

// SEARCH INPUT 

const searchUser = document.getElementById('searchUser');

// SEARCH INPUT EVENT LISTENER

searchUser.addEventListener('keyup', (e) => {
    //GET INPUT TEXT 
    const userText = e.target.value;

    if(userText !== ''){
        // NOW LETS MATCH HTTP REQ TO GITHUB
        // make http call 
        github.getUser(userText).then(data => {
            if(data.profile.message === 'Not Found'){
                //SHOW AN ALERT 
                ui.showAlert('User Not Found' , 'alert alert-danger')
            }
            else{
                //show the profile 
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })

    }
    else{
        // Clear Profile

        ui.clearProfile();
    }
})
