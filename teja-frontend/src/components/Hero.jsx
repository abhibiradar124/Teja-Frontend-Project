function Hero() {
  return (
    <>
      
      <section style={heroSection}>
        <div style={heroContainer}>
          <h1 style={heroTitle}>Breaking Language Barriers</h1>

          <p style={heroSubtitle}>
            Translation • Transcription • Voiceover
          </p>

          <p style={heroText}>
            We help businesses communicate globally with accurate
            language solutions and high-quality voice services.
          </p>
        </div>
      </section>

      {/* ================= WHAT WE ARE BUILDING ================= */}
      <section style={buildSection}>
        <div style={buildContainer}>
          
          {/* IMAGE SIDE */}
          <div style={imageSide}>
            <img
              src="/images/global.jpeg"
              alt="Global Communication"
              style={buildImage}
                />
          </div>

          {/* TEXT SIDE */}
          <div style={textSide}>
            <h2 style={buildTitle}></h2>

            <p style={buildText}>
              We are building a global communication bridge that
              connects businesses and audiences across the world.
            </p>

            <p style={buildText}>
              Through seamless translation, precise transcription
              and expressive voiceover services, we eliminate
              language barriers and empower brands to grow globally.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Hero;



/* ================= STYLES ================= */

const heroSection = {
  height: "100vh",
  background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "white",
  padding: "0 20px"
};

const heroContainer = {
  maxWidth: "900px"
};

const heroTitle = {
  fontSize: "52px",
  fontWeight: "bold",
  marginBottom: "20px"
};

const heroSubtitle = {
  fontSize: "20px",
  marginBottom: "20px",
  letterSpacing: "1px"
};

const heroText = {
  fontSize: "18px",
  opacity: "0.9"
};


/* ===== WHAT WE BUILD SECTION ===== */

const buildSection = {
  padding: "100px 20px",
  backgroundColor: "#f8fafc"
};

const buildContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "40px 20px",
  gap: "60px",
  flexWrap: "wrap"
};

const imageSide = {
  flex: 1,
};

const buildImage = {
  width: "100%",
  maxWidth: "500px",
  height: "auto",
  borderRadius: "20px",
};

const textSide = {
  flex: "1",
};

const buildTitle = {
  fontSize: "32px",
  marginBottom: "20px",
  color: "#0f172a"
};

const buildText = {
  fontSize: "17px",
  marginBottom: "15px",
  color: "#334155",
  lineHeight: "1.6"
};