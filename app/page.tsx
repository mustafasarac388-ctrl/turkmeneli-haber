export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", background: "#f5f5f5" }}>
      
      {/* HEADER */}
      <header style={{
        background: "#0b1f3a",
        color: "white",
        padding: "20px",
        fontSize: "22px",
        fontWeight: "bold"
      }}>
        Türkmeneli Haber
      </header>

      {/* SON DAKİKA */}
      <div style={{
        background: "#ffcc00",
        padding: "10px",
        fontWeight: "bold"
      }}>
        SON DAKİKA: Site yeni yayına başladı 🚀
      </div>

      {/* MANŞET */}
      <section style={{ padding: "20px" }}>
        <h2>Manşet Haber</h2>

        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px"
        }}>
          <h3>Türkmeneli’de Yeni Dijital Haber Dönemi</h3>
          <p>
            Türkmeneli Haber artık modern bir dijital platform olarak yayında.
          </p>
        </div>
      </section>

      {/* HABERLER */}
      <section style={{ padding: "20px" }}>
        <h2>Son Haberler</h2>

        <div style={{ display: "grid", gap: "10px" }}>

          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            Kerkük’te gündem hareketli
          </div>

          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            Eğitim alanında yeni gelişmeler
          </div>

          <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
            Ekonomi haberleri yükselişte
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#0b1f3a",
        color: "white",
        textAlign: "center",
        padding: "20px",
        marginTop: "30px"
      }}>
        © 2026 Türkmeneli Haber
      </footer>

    </main>
  );
}
