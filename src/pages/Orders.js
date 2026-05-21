import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Orders() {

  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([

    {
      id: 1,
      name: "Pizza 🍕",
      price: 299
    },

    {
      id: 2,
      name: "Burger 🍔",
      price: 199
    },

    {
      id: 3,
      name: "French Fries 🍟",
      price: 99
    },

    {
      id: 4,
      name: "Biryani 🍛",
      price: 249
    },

    {
      id: 5,
      name: "Tacos 🌮",
      price: 179
    },

    {
      id: 6,
      name: "Salad 🥗",
      price: 149
    },

    {
      id: 7,
      name: "Pasta 🍝",
      price: 229
    },

    {
      id: 8,
      name: "Sandwich 🥪",
      price: 129
    },

    {
      id: 9,
      name: "Ice Cream 🍨",
      price: 99
    },

    {
      id: 10,
      name: "Noodles 🍜",
      price: 189
    }

  ]);

  const removeItem = (id) => {

    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);

    alert("Item Removed ❌");

  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (

    <div
      style={{
        padding: "30px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh"
      }}
    >

      <h1>Your Cart 🛒</h1>

      <div
        style={{
          border: "1px solid gray",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
          width: "600px",
          backgroundColor: "white"
        }}
      >

        {
          cartItems.length === 0 ? (

            <h2>Your Cart Is Empty 🛒</h2>

          ) : (

            cartItems.map((item) => (

              <div key={item.id}>

                <h2>{item.name}</h2>

                <p>Price: ₹{item.price}</p>

                <button
                  onClick={() => removeItem(item.id)}
                  style={{
                    padding: "10px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                  }}
                >
                  Remove
                </button>

                <hr style={{ margin: "20px 0" }} />

              </div>

            ))

          )
        }

      </div>

      <div
        style={{
          marginTop: "30px",
          fontSize: "24px",
          fontWeight: "bold"
        }}
      >
        Total: ₹{totalPrice}
      </div>

      <button
        onClick={() => navigate("/checkout")}
        style={{
          marginTop: "30px",
          padding: "15px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "20px",
          cursor: "pointer"
        }}
      >
        Proceed To Checkout
      </button>

    </div>

  );

}

export default Orders;