"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [news, setNews] = useState<any[]>([]);

  const addNews = async () => {
    const { error } = await supabase.from("news").insert([
      {
        title,
        content,
        image: "",
      },
    ]);

    if (error) {
      alert("Hata: " + error.message);
      return;
    }

    alert("Haber kaydedildi ✔");

    const newItem = {
      title,
      content,
      date: new Date().toLocaleString(),
    };

    setNews([newItem, ...news]);
    setTitle("");
    setContent("");
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Türkmeneli Haber Admin</h1>

      <input
        placeholder="Başlık"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: "block", margin: 10, padding: 8, width: 300 }}
      />

      <textarea
        placeholder="İçerik"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ display: "block", margin: 10, padding: 8, width: 300, height: 120 }}
      />

      <button onClick={addNews} style={{ padding: 10 }}>
        Haberi Ekle
      </button>

      <h2>Local Liste (geçici)</h2>

      {news.map((n, i) => (
        <div key={i} style={{ background: "#eee", padding: 10, marginTop: 10 }}>
          <h3>{n.title}</h3>
          <p>{n.content}</p>
          <small>{n.date}</small>
        </div>
      ))}
    </div>
  );
}
