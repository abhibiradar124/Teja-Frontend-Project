import translationImg from "../assets/translation.png";
import transcriptionImg from "../assets/transcription.png";
import voiceoverImg from "../assets/voiceover.png";

function Solutions() {
  return (
    <section id="solutions"
      style={sectionStyle}>
      <h2 style={mainTitle}>Our Solutions</h2>

      <div style={containerStyle}>
        {/* Translation */}
        <div style={cardStyle}>
          <h3>Translation</h3>
          <img src={translationImg} alt="Translation" style={imageStyle} />
          <p>
            We provide professional multilingual translation services
            tailored for global businesses. Our experts ensure cultural
            accuracy, clarity, and high-quality language adaptation
            for international communication.
          </p>
        </div>

        {/* Transcription */}
        <div style={cardStyle}>
          <h3>Transcription</h3>
          <img src={transcriptionImg} alt="Transcription" style={imageStyle} />
          <p>
            Accurate audio and video transcription services with
            attention to detail. We convert speech into clear,
            well-structured written documents suitable for
            business, legal, and media use.
          </p>
        </div>

        {/* Voiceover */}
        <div style={cardStyle}>
          <h3>Voiceover</h3>
          <img src={voiceoverImg} alt="Voiceover" style={imageStyle} />
          <p>
            High-quality dubbing and voiceover solutions delivered
            by professional voice artists. Perfect for corporate
            presentations, advertisements, films, and digital
            media platforms worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ===== STYLES ===== */

const sectionStyle = {
  padding: "100px 40px",
  textAlign: "center",
  backgroundColor: "#f8fafc",
};

const mainTitle = {
  fontSize: "36px",
  marginBottom: "60px",
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "40px",
  flexWrap: "wrap", // responsive for small screens
};

const cardStyle = {
  width: "320px",
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  textAlign: "center",
};

const imageStyle = {
  width: "100%",
  height: "200px",
  objectFit: "contain",
  margin: "20px 0",
};

export default Solutions;