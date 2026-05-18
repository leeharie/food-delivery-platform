import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "black",
          color: "white"
        }}
      >
        <h2>Food Delivery 🍔</h2>

        <div
          style={{
            display: "flex",
            gap: "20px"
          }}
        >
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none"
            }}
          >
            Home
          </Link>

          <Link
            to="/login"
            style={{
              color: "white",
              textDecoration: "none"
            }}
          >
            Login
          </Link>

          <Link
            to="/register"
            style={{
              color: "white",
              textDecoration: "none"
            }}
          >
            Register
          </Link>

          <Link
            to="/orders"
            style={{
              color: "white",
              textDecoration: "none"
            }}
          >
            Orders
          </Link>

        </div>
      </div>

      <div style={{ padding: "30px" }}>
        <h1>Welcome to Food Delivery Platform</h1>

        <p>
          Order delicious food from your favorite restaurants.
        </p>
      </div>

    </div>
  );
}

export default Home;