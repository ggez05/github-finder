class GitHub {
    constructor(){
        this.client_id = 'b9f120777001f3bbfa42';
        this.client_secret = 'a04480090b6f28df65f3a642255c1c7ef527c9e5';
        this.repos_count =5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id = ${this.client_id}&client_secret = ${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id = ${this.client_id}&client_secret = ${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        console.log(repos);
        return {
            profile,
            repos
        }

    }
}