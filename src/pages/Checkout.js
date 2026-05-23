import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleOrder = () => {

    setLoading(true);

    setTimeout(() => {

      alert("Order Placed Successfully 🎉");

      setLoading(false);

      navigate("/home");

    }, 2000);

  };

  return (

    <div
      style={{
        padding: "30px"
      }}
    >

      <h1>Checkout 💳</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          gap: "20px",
          marginTop: "30px"
        }}
      >

        <input
          type="text"
          placeholder="Enter Name"
          style={{
            padding: "12px",
            fontSize: "16px"
          }}
        />

        <input
          type="text"
          placeholder="Enter Address"
          style={{
            padding: "12px",
            fontSize: "16px"
          }}
        />

        <input
          type="text"
          placeholder="Enter Phone Number"
          style={{
            padding: "12px",
            fontSize: "16px"
          }}
        />

        <button
          onClick={handleOrder}
          style={{
            padding: "15px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          {loading ? "Processing..." : "Place Order"}
        </button>

      </div>

    </div>

  );
}

export default Checkout;