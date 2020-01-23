class GitHub {
  constructor() {
    this.client_id = 'd2cbdcdf9134a2351053';
    this.client_secret = '7ccfd6e4b2079a623077e6fd7ea3acaef423e131';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${ user }?client_id=${ this.client_id }&client_secret=${ this.client_secret }`);

    const repoResponse = await fetch(`https://api.github.com/users/${ user }/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${ this.client_id }&client_secret=${ this.client_secret }`);


    const profileData = await profileResponse.json();
    const respos = await repoResponse.json();

    return {
      profile: profileData
    }
  }
}