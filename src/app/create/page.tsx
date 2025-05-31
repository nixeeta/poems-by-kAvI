"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { savePoem } from "@/lib/poems";
import { currentUser } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function CreatePoemPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const user = await currentUser();
    if (!user) {
      alert("You must be logged in to create a poem.");
      setLoading(false);
      return;
    }

    try {
      await savePoem(user.uid, title, content, false);
      alert("Poem saved!");
      router.push("/poems");
    } catch (error) {
      alert("Failed to save poem.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="main-container">
      <h1 className="heading">Do you write too? Let's upload it online:</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <Input className="title-input"
          type="text"
          placeholder="Poem Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Textarea className="content-textarea"
          placeholder="Write your poem here..."
          rows={8}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <Button type="submit" disabled={loading} className="button">
          {loading ? "Saving..." : "Save Poem"}
        </Button>
      </form>
    </main>
  );
}
