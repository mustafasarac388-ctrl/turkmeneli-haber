import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ejcrifepzwogvidiylzo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqY3JpZmVwendvZ3ZpZGl5bHpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMzI3MDAsImV4cCI6MjA5NzkwODcwMH0.SXGo7u88w19EQA_KUW30a1FfXJatOJVE77X4KgcjC0A"
);
