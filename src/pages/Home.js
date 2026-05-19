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

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "30px",
            flexWrap: "wrap"
          }}
        >

          <div
            style={{
              border: "1px solid gray",
              padding: "20px",
              borderRadius: "10px",
              width: "250px"
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
              alt="pizza"
              width="100%"
              style={{
                borderRadius: "10px"
              }}
            />

            <h3>Pizza</h3>

            <p>Price: ₹299</p>

            <button
              style={{
                padding: "10px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Add to Cart
            </button>

          </div>

          <div
            style={{
              border: "1px solid gray",
              padding: "20px",
              borderRadius: "10px",
              width: "250px"
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349"
              alt="burger"
              width="100%"
              style={{
                borderRadius: "10px"
              }}
            />

            <h3>Burger</h3>

            <p>Price: ₹199</p>

            <button
              style={{
                padding: "10px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Add to Cart
            </button>

          </div>

          <div
            style={{
              border: "1px solid gray",
              padding: "20px",
              borderRadius: "10px",
              width: "250px"
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="biryani"
              width="100%"
              style={{
                borderRadius: "10px"
              }}
            />

            <h3>Biryani</h3>

            <p>Price: ₹249</p>

            <button
              style={{
                padding: "10px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Add to Cart
            </button>

          </div>

          <div
            style={{
              border: "1px solid gray",
              padding: "20px",
              borderRadius: "10px",
              width: "250px"
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
              alt="tacos"
              width="100%"
              style={{
                borderRadius: "10px"
              }}
            />

            <h3>Tacos</h3>

            <p>Price: ₹179</p>

            <button
              style={{
                padding: "10px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Add to Cart
            </button>

          </div>

          <div
            style={{
              border: "1px solid gray",
              padding: "20px",
              borderRadius: "10px",
              width: "250px"
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
              alt="salad"
              width="100%"
              style={{
                borderRadius: "10px"
              }}
            />

            <h3>Salad</h3>

            <p>Price: ₹149</p>

            <button
              style={{
                padding: "10px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Add to Cart
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;