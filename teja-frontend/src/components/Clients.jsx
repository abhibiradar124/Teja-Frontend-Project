function Clients() {
  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Trusted by Leading Companies</h2>

      <div style={slider}>
        <div style={slideTrack}>
          {/* Logos */}
          <img src="/logos/bayan-tech.webp" style={logoStyle} />
          <img src="/logos/futurebeeai.webp" style={logoStyle} />
          <img src="/logos/gientech.webp" style={logoStyle} />
          <img src="/logos/joshtalks.webp" style={logoStyle} />
          <img src="/logos/kukufm.webp" style={logoStyle} />
          <img src="/logos/pocketfm.webp" style={logoStyle} />

          {/* Duplicate for smooth infinite scroll */}
          <img src="/logos/bayan-tech.webp" style={logoStyle} />
          <img src="/logos/futurebeeai.webp" style={logoStyle} />
          <img src="/logos/gientech.webp" style={logoStyle} />
          <img src="/logos/joshtalks.webp" style={logoStyle} />
          <img src="/logos/kukufm.webp" style={logoStyle} />
          <img src="/logos/pocketfm.webp" style={logoStyle} />
        </div>
      </div>
    </section>
  );
}

/* ===== STYLES ===== */

const sectionStyle = {
  padding: "80px 0",
  textAlign: "center",
  backgroundColor: "#ffffff",
  overflow: "hidden",
};

const titleStyle = {
  fontSize: "36px",
  marginBottom: "50px",
  fontWeight: "600",
};

const slider = {
  overflow: "hidden",
  position: "relative",
};

const slideTrack = {
  display: "flex",
  width: "max-content",
  animation: "scroll 20s linear infinite",
};

const logoStyle = {
  height: "60px",
  margin: "0 60px",
  objectFit: "contain",
};

/* ===== Animation ===== */

const styleSheet = document.styleSheets[0];

if (!styleSheet.cssRules.namedItem?.("scroll")) {
  styleSheet.insertRule(`
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  `, styleSheet.cssRules.length);
}

export default Clients;