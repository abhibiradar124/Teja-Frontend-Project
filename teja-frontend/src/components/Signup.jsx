function Signup() {
  return (
    <section
      style={{
        padding: "80px",
        display: "flex",
        justifyContent: "center",
        gap: "80px",
        flexWrap: "wrap"
      }}
    >
      <div>
        <h2>Teja Logo Name</h2>
      </div>

      <div>
        <h3>Signup Form</h3>
        <input placeholder="Email" />
        <br /><br />
        <input type="password" placeholder="Password" />
        <br /><br />
        <button>Create Account</button>
        <p>Already member? Login</p>
      </div>
    </section>
  );
}

export default Signup;