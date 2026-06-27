"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .order("id", { ascending: false });

      if (!error) {
        setNews(data || []);
      }
    };

    fetchNews();
  }, []);

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

      {/* HABERLER (SUPABASE) */}
      <section style={{ padding: "20px" }}>
        <h2>Son Haberler</h2>

        <div style={{ display: "grid", gap: "10px" }}>
          {news.length === 0 ? (
            <div style={{ background: "white", padding: "15px", borderRadius: "10px" }}>
              Henüz haber yok...
            </div>
          ) : (
            news.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  padding: "15px",
                  borderRadius: "10px"
                }}
              >
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))
          )}
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
