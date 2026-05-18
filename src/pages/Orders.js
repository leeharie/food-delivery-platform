function Orders() {
  return (
    <div style={{ padding: "30px" }}>

      <h1>My Orders 🛒</h1>

      <div
        style={{
          border: "1px solid gray",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
          width: "300px"
        }}
      >
        <h3>Pizza Order</h3>

        <p>Restaurant: Pizza Hut</p>

        <p>Status: Delivered ✅</p>

      </div>

      <div
        style={{
          border: "1px solid gray",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
          width: "300px"
        }}
      >
        <h3>Burger Combo</h3>

        <p>Restaurant: Burger King</p>

        <p>Status: Preparing 🍔</p>

      </div>

    </div>
  );
}

export default Orders;