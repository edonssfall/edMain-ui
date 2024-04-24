import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthModal from "./components/authentication/auth/modalAuth";
import { useProfileStore } from "./states/profile.store";
import { IRoute } from "./interfaces/route.interface";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/NavBar";
import { routes } from "./utils/routes";
import { useEffect } from "react";
import { useModalStore } from "./states/modal.store";

function App() {
  const profileStore = useProfileStore();

  useEffect(() => {
    profileStore.logIn();
  }, []);

  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <NavBar />
        <AuthModal />
        <Routes>
          {routes.map((route: IRoute) =>
            route.path === "/chats" ? null : (
              <Route
                key={route.name}
                path={route.path}
                element={<route.element />}
              />
            )
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
