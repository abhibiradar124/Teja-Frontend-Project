function Navbar() {
  return (
    <nav style={navStyle}>
      
      {/* LEFT SIDE LOGO */}
      <div style={logoContainer}>
        <img
          src="/images/teja-logo.jpeg"
          alt="TEJA Logo"
          style={logoStyle}
        />
      </div>

      {/* RIGHT SIDE MENU */}
      <div style={menuStyle}>
        <a href="#solutions" style={linkStyle}>Solutions</a>
        <a href="#career" style={linkStyle}>Career</a>
        <a href="#contact" style={linkStyle}>Contact us</a>
        <button style={btnStyle}>Try Teja</button>
      </div>

    </nav>
  );
}

/* ================= NAVBAR STYLE ================= */

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 80px",
  height: "90px",             //  Fixed navbar height
  backgroundColor: "white",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  position: "sticky",
  top: 0,
  zIndex: 1000
};

/* ================= LOGO STYLE ================= */

const logoContainer = {
  display: "flex",
  alignItems: "center"
};

const logoStyle = {
  height: "89px",             // Bigger startup size
  width: "auto",
  objectFit: "contain"
};

/* ================= MENU STYLE ================= */

const menuStyle = {
  display: "flex",
  alignItems: "center",
  gap: "35px"
};

const linkStyle = {
  textDecoration: "none",
  color: "#1f2937",
  fontWeight: "500",
  fontSize: "15px"
};

const btnStyle = {
  padding: "10px 22px",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "600"
};

export default Navbar;