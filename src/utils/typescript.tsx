export interface User {
  value: {
    userInfo: UserInfo;
    login: {
      isLogged: boolean;
      token: string;
    };
  };
}

export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
}
