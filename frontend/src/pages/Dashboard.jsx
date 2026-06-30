import { Link } from "react-router-dom";

export default function Dashboard() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Task Manager Dashboard 🚀</h1>

      <p>You are successfully logged in!</p>

      <Link to="/tasks">
        <button>Go to Tasks</button>
      </Link>

      <br /><br />

      <button onClick={logout}>Logout</button>
    </div>
  );
}