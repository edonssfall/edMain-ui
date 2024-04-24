import { environment } from "../../environments/environment";
import { useProfileStore } from "../../states/profile.store";
import { accessToken } from "../../utils/helpers/tokens";
import axiosInstance from "../../utils/axios.instance";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

function Profile() {
  const profileStore = useProfileStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken === undefined && !profileStore.user) {
      navigate(environment.links.home);
    } else {
      getSome();
    }
  }, [navigate, profileStore.user]);

  const handleLogout = async () => {
    profileStore.logOut().then((isLogOut) => {
      if (isLogOut) {
        navigate(environment.links.home);
      }
    });
  };

  const getSome = async () => {
    const res = await axiosInstance.get(environment.api.isLoggedIn);
    if (res.status === 200) {
      console.log(res.data);
    }
  };

  return (
    <>
      <h2>
        {/*Hi, {profileStore.user.first_name} {profileStore.user.last_name}*/}
      </h2>
      <button onClick={handleLogout}>Log out</button>
    </>
  );
}

export default Profile;
