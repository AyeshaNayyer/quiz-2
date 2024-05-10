import { NotificationContainer } from "react-notifications";
import AuthPage from "./components/authPage";
import UserPage from "./components/UserPage";
import { useSelector } from "react-redux";


function App() {
  const { loggedIn } = useSelector((state) => state.user);
  return (
    <div className="App">
      {loggedIn ? <UserPage /> : <AuthPage />}
      
    </div>
  );
}

export default App;
