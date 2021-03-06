export class GithubUser {
  public avatar_url: string;
  public bio: string;
  public blog: string;
  public company: string;
  public created_at: string;
  public email: string;
  public events_url: string;
  public followers: number;
  public followers_url: string;
  public following: number;
  public following_url: string;
  public gists_url: string;
  public gravatar_id: string;
  public hireable: string;
  public html_url: string;
  public id: number;
  public location: string;
  public login: string;
  public name: string;
  public organizations_url: string;
  public public_gists: number;
  public public_repos: number;
  public received_events_url: string;
  public repos_url: string;
  public site_admin: boolean;
  public starred_url: string;
  public subscriptions_url: string;
  public type: string;
  public updated_at: string;
  public url: string;
}

export class GithubProjects {
  public id: number;
  public name: string;
  public Owner = {
    login: String,
    id: String,
    avatar_url: String
  };
  public private: boolean;
  public url: string;
  public description: string;
  public fork: boolean;
  public forks: number;
  public open_issues: number;
  public watchers: number;
}
