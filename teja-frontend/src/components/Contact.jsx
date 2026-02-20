function Contact() {
  return (
    <section id="contact" style={sectionStyle}>
      <h2 style={{ marginBottom: "40px" }}>Contact Us</h2>

      <form style={formStyle}>
        <input style={inputStyle} placeholder="First Name" />
        <input style={inputStyle} placeholder="Last Name" />
        <input style={inputStyle} placeholder="Email" />
        <input style={inputStyle} placeholder="Subject" />
        <textarea style={inputStyle} placeholder="Message" rows="4"></textarea>

        <button style={btnStyle}>Submit</button>
      </form>
    </section>
  );
}

const sectionStyle = {
  padding: "100px 20px",
  textAlign: "center",
  backgroundColor:"#f6f8fd",
};

const formStyle = {
  maxWidth: "500px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "15px"
};

const inputStyle = {
  padding: "12px",
  borderRadius: "6px",
  border: "none"
};

const btnStyle = {
  padding: "12px",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontWeight: "600"
};

export default Contact;