import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {

  const [cartCount, setCartCount] = useState(0);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {

    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCartCount(cart.length);

  }, []);

  const addToCart = (food) => {

    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    existingCart.push(food);

    localStorage.setItem(
      "cart",
      JSON.stringify(existingCart)
    );

    setCartCount(existingCart.length);

    alert(food.name + " Added To Cart 🛒");

  };

  const handleLogout = () => {

    alert("Logged Out Successfully 👋");

    navigate("/login");

  };

  const foods = [

    {
      name: "Pizza 🍕",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591"
    },

    {
      name: "Burger 🍔",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349"
    },

    {
      name: "Biryani 🍛",
      price: 249,
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
    },

    {
      name: "Tacos 🌮",
      price: 179,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
    },

    {
      name: "Salad 🥗",
      price: 149,
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
    },

    {
      name: "Pasta 🍝",
      price: 229,
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9"
    },

    {
      name: "Sandwich 🥪",
      price: 129,
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af"
    },

    {
      name: "Ice Cream 🍨",
      price: 99,
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb"
    },

    {
      name: "Noodles 🍜",
      price: 189,
      image:
        "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841"
    },

    {
      name: "French Fries 🍟",
      price: 119,
      image:
        "https://images.unsplash.com/photo-1576107232684-1279f390859f"
    }

  ];

  return (

    <div
      style={{
        backgroundColor: darkMode ? "#121212" : "white",
        color: darkMode ? "white" : "black",
        minHeight: "100vh"
      }}
    >

      {/* Navbar */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          background:
            "linear-gradient(to right, #ff416c, #ff4b2b)",
          color: "white"
        }}
      >

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px"
          }}
        >

          <h2>Food Delivery 🍔</h2>

          <div
            style={{
              backgroundColor: "red",
              color: "white",
              borderRadius: "50%",
              width: "35px",
              height: "35px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold"
            }}
          >
            🛒 {cartCount}
          </div>

        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center"
          }}
        >

          <Link
            to="/home"
            style={{
              color: "white",
              textDecoration: "none"
            }}
          >
            Home
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

          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "8px 15px",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Logout
          </button>

        </div>

      </div>

      {/* Main Section */}

      <div style={{ padding: "30px" }}>

        <h1>Welcome to Food Delivery Platform</h1>

        <p>
          Order delicious food from your favorite restaurants.
        </p>

        <input
          type="text"
          placeholder="Search Food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "12px",
            width: "300px",
            marginTop: "20px",
            borderRadius: "5px",
            border: "1px solid gray",
            fontSize: "16px"
          }}
        />

        {/* Food Cards */}

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "30px",
            flexWrap: "wrap"
          }}
        >

          {foods
            .filter((food) =>
              food.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((food, index) => (

              <div
                key={index}
                style={{
                  border: "1px solid gray",
                  padding: "20px",
                  borderRadius: "10px",
                  width: "250px",
                  boxShadow: "0px 0px 10px gray",
                  backgroundColor:
                    darkMode ? "#1e1e1e" : "white"
                }}
              >

                <img
                  src={food.image}
                  alt={food.name}
                  width="100%"
                  style={{
                    borderRadius: "10px",
                    height: "200px",
                    objectFit: "cover"
                  }}
                />

                <h3>{food.name}</h3>

                <p>Price: ₹{food.price}</p>

                <button
                  onClick={() => addToCart(food)}
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

            ))}

        </div>

      </div>

    </div>

  );

}

export default Home;