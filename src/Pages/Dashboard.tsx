import { useAuth } from "../Components/AuthContext/AuthContext";
import Pagination from "../Components/Pagination/Pagination";
import Header from "../Components/UI/Header";

const Dashboard = () => {
  const { AuthUser } = useAuth();

  return (
    <>
    <Header/>
    <div className="w-screen flex justify-evenly items-center h-max mt-10">
      <h1>Name: <b>{AuthUser?.name || "No User Logged In"}</b></h1>
      <p>Email: <b>{AuthUser?.email || "Not available"}</b></p>
      <p>Password : <b>{AuthUser?.password || "Hello"}</b></p>
      </div>
      <div>
        <Pagination/>
      </div>
    </>
  );
};

export default Dashboard;
