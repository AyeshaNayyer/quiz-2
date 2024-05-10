import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { userProfile } from "../redux/app.reducer.js"; 


const UserPage = () => {
  const token = useSelector((state) => state.user.auth_token);
  const first_name = useSelector((state) => state.user.profile?.first_name);
  const dispatch = useDispatch()

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios({
      method: "GET",
      url: "https://sandbox.practical.me/api",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(userProfile(response.data.profile));

   
  };

return(<div>
    <h1>Welcome, {first_name}</h1>
  </div>);
};

export default UserPage;
