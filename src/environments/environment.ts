const api = {
  isLoggedIn: "profile/is-logged",
  isRoot: "profile/is-is-root",
  refresh_token: "token/refresh",
  register: "register",
  otp: "verify-otp",
  logout: "logout",
  login: "login",
};

const links = {
  lost_password: "/forget-password",
  ddnsImg: "/ddns/img",
  profile: "/profile",
  otp: "/otp/verify",
  signup: "/signup",
  ddns: "/ddns",
  home: "/",
};

const modals = {
  auth: 0,
};

export const environment = {
  BACKEND_AUTH_URL: "http://localhost/api/auth",
  refresh_token: "refresh",
  access_token: "access",
  title: "edProject",
  user: "user_data",
  production: false,
  modals: modals,
  links: links,
  api: api,
};
