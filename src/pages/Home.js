import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {

  const [cartCount, setCartCount] = useState(0);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const addToCart = () => {

    setCartCount(cartCount + 1);

    alert("Item Added To Cart 🛒");

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

    <div>

      {/* Navbar */}

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

        {/* Hero Banner */}

        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "350px",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center"
          }}
        >

          <h1
            style={{
              fontSize: "50px"
            }}
          >
            Delicious Food 🍕
          </h1>

          <p
            style={{
              fontSize: "22px"
            }}
          >
            Fresh food delivered to your doorstep 🚚
          </p>

          <button
            onClick={() => navigate("/orders")}
            style={{
              marginTop: "20px",
              padding: "15px 30px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "18px",
              cursor: "pointer"
            }}
          >
            Order Now
          </button>

        </div>

        <h1 style={{ marginTop: "40px" }}>
          Welcome to Food Delivery Platform
        </h1>

        <p>
          Order delicious food from your favorite restaurants.
        </p>

        {/* Categories */}

        <div style={{ marginTop: "40px" }}>

          <h2>Food Categories 🍽️</h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "20px",
              flexWrap: "wrap"
            }}
          >

            <div
              onClick={() => setSearch("pizza")}
              style={{
                backgroundColor: "#ffe5e5",
                padding: "15px 25px",
                borderRadius: "10px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              🍕 Pizza
            </div>

            <div
              onClick={() => setSearch("burger")}
              style={{
                backgroundColor: "#fff3cd",
                padding: "15px 25px",
                borderRadius: "10px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              🍔 Burger
            </div>

            <div
              onClick={() => setSearch("biryani")}
              style={{
                backgroundColor: "#d4edda",
                padding: "15px 25px",
                borderRadius: "10px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              🍛 Biryani
            </div>

            <div
              onClick={() => setSearch("tacos")}
              style={{
                backgroundColor: "#d1ecf1",
                padding: "15px 25px",
                borderRadius: "10px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              🌮 Fast Food
            </div>

          </div>

        </div>

        {/* Search */}

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
                  width: "250px"
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
                  onClick={addToCart}
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

        {/* Reviews */}

        <div
          style={{
            marginTop: "60px",
            padding: "30px"
          }}
        >

          <h1
            style={{
              textAlign: "center",
              marginBottom: "40px"
            }}
          >
            Customer Reviews ⭐
          </h1>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >

            <div
              style={{
                border: "1px solid gray",
                padding: "20px",
                borderRadius: "10px",
                width: "300px"
              }}
            >
              <h3>Geetha ⭐⭐⭐⭐⭐</h3>

              <p>
                Amazing food quality and super fast delivery 🚚
              </p>
            </div>

            <div
              style={{
                border: "1px solid gray",
                padding: "20px",
                borderRadius: "10px",
                width: "300px"
              }}
            >
              <h3>Lahari ⭐⭐⭐⭐⭐</h3>

              <p>
                Best food delivery app experience 🔥
              </p>
            </div>

            <div
              style={{
                border: "1px solid gray",
                padding: "20px",
                borderRadius: "10px",
                width: "300px"
              }}
            >
              <h3>Chintu ⭐⭐⭐⭐</h3>

              <p>
                Fresh food and easy checkout process 💳
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "30px",
          marginTop: "50px",
          textAlign: "center"
        }}
      >

        <h2>Food Delivery Platform 🍔</h2>

        <p>
          Delicious food delivered at your doorstep 🚚
        </p>

        <p>
          Contact: support@fooddelivery.com
        </p>

        <p>
          © 2026 Food Delivery Platform. All Rights Reserved.
        </p>

      </div>

    </div>

  );

}

export default Home;