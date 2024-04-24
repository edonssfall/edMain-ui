import Profile from "../components/authentication/Profile";
import { environment } from "../environments/environment";
import { IRoute } from "../interfaces/route.interface";
import Home from "../components/Home";

const links = environment.links;

export const routes: IRoute[] = [
  { path: links.home, name: "Home", element: Home },
  { path: links.profile, name: "Profile", element: Profile },
];
