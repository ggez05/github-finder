// 

class UI {
    constructor(){
        this.profile = document.getElementById('profile');

    }
    showProfile(user){
        this.profile.innerHTML = `
          <div class="card card-body mb-3">
            <div class="row">
            <div class="col-md-3">
               <img class="img-fluid mb-2" src="${user.avatar_url}">
               <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4 mt-2" style="width:100%">View Profile</a> 
            </div>
            <div class = "col-md-9">
                <span class="badge bg-primary alert-success">Public Repos: ${user.public_repos}</span>
                <span class="badge bg-secondary alert-success">Public Gists: ${user.public_gists}</span>
                <span class="badge bg-sucess alert-success">Followers: ${user.followers}</span>
                <span class="badge bg-info alert-success">Following: ${user.following}</span>
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

    clearProfile(){
        this.profile.innerHTML='';
    }

    showAlert(mess,className){
        //CLEAR ANY PREVIOUS ALERT BEFORE ADDING ANOTHER
        this.clearAlertMess();
        //Create div 
        const div = document.createElement('div');
        //add class to div
        div.className = className;
        // add text in div 
        div.appendChild(document.createTextNode(mess));
        // get parent 
        const container = document.querySelector('.searchContainer');
        // get the seach box
        const search = document.querySelector('.search');
        // insert the alert 
        container.insertBefore(div,search);

        //TIMEOUT AFTER 2.5 S 
        setTimeout(() => {
            this.clearAlertMess();
        }, 2500);
    }

    clearAlertMess(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
    showRepos(repos){
        let output ='';
        repos.forEach(function(repo){

            output += `
               <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md=6">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                    <span class="badge bg-primary alert-success">Public Stars: ${repo.stargazers_count}</span>
                    <span class="badge bg-secondary alert-success">Watchers: ${repo.watchers_count}</span>
                    <span class="badge bg-sucess alert-success">Fork: ${repo.forks_count}</span>
                    </div>
                </div>
                </div>
            `
        });

        // output repos 
        document.getElementById('repos').innerHTML = output
    }
}