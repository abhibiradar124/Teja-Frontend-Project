function Services() {
  return (
    <section id="Solutions" style={sectionStyle}>
      <div style={container}>
        <h2 style={titleStyle}>Our Solutions</h2>

        <div style={cardGrid}>
          <div style={card}>
            <h3>Translation Services</h3>
            <p>
              We provide accurate and culturally adapted translation services
              across multiple languages, helping brands connect globally.
            </p>
          </div>

          <div style={card}>
            <h3>Transcription Services</h3>
            <p>
              High-quality audio and video transcription services converting
              speech into precise, structured text.
            </p>
          </div>

          <div style={card}>
            <h3>Voiceover & Dubbing</h3>
            <p>
              Professional voiceover and dubbing solutions for global audiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;

const sectionStyle = {
  padding: "100px 20px",
  backgroundColor: "#0f172a",
  color: "white"
};

const container = {
  maxWidth: "1100px",
  margin: "0 auto",
  textAlign: "center"
};

const titleStyle = {
  fontSize: "36px",
  marginBottom: "60px"
};

const cardGrid = {
  display: "flex",
  gap: "30px",
  justifyContent: "center",
  flexWrap: "wrap"
};

const card = {
  backgroundColor: "#1e293b",
  padding: "30px",
  borderRadius: "16px",
  width: "300px",
  textAlign: "left",
  boxShadow: "0 8px 25px rgba(0,0,0,0.4)"
};