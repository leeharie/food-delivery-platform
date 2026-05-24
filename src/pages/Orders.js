import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Orders() {

  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {

    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCart = savedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1
    }));

    setCartItems(updatedCart);

  }, []);

  const removeItem = (index) => {

    const updatedCart = [...cartItems];

    updatedCart.splice(index, 1);

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    alert("Item Removed ❌");

  };

  const increaseQuantity = (index) => {

    const updatedCart = [...cartItems];

    updatedCart[index].quantity += 1;

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

  };

  const decreaseQuantity = (index) => {

    const updatedCart = [...cartItems];

    if (updatedCart[index].quantity > 1) {

      updatedCart[index].quantity -= 1;

      setCartItems(updatedCart);

      localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
      );

    }

  };

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
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

            <div>

              <h2>Your Cart Is Empty 🛒</h2>

              <p>Add some delicious food!</p>

            </div>

          ) : (

            cartItems.map((item, index) => (

              <div key={index}>

                <h2>{item.name}</h2>

                <p>Price: ₹{item.price}</p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    marginBottom: "15px"
                  }}
                >

                  <button
                    onClick={() => decreaseQuantity(index)}
                    style={{
                      padding: "8px 15px",
                      backgroundColor: "orange",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer"
                    }}
                  >
                    -
                  </button>

                  <h3>{item.quantity}</h3>

                  <button
                    onClick={() => increaseQuantity(index)}
                    style={{
                      padding: "8px 15px",
                      backgroundColor: "green",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer"
                    }}
                  >
                    +
                  </button>

                </div>

                <button
                  onClick={() => removeItem(index)}
                  style={{
                    padding: "10px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    boxShadow: "0px 0px 5px gray",
                    transition: "0.3s"
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
          marginTop: "20px",
          fontSize: "20px",
          fontWeight: "bold"
        }}
      >
        Total Items: {cartItems.length}
      </div>

      <div
        style={{
          marginTop: "20px",
          fontSize: "24px",
          fontWeight: "bold"
        }}
      >
        Total: ₹{totalPrice}
      </div>

      {
        cartItems.length > 0 && (

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

        )
      }

    </div>

  );

}

export default Orders;