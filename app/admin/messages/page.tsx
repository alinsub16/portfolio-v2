"use client";

import { useEffect, useState } from "react";
import { Mail, CalendarDays } from "lucide-react";
import { supabase } from "@/utils/supabase/client";

type Message = {
  id: number;
  full_name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
};

const MessagesPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selected, setSelected] = useState<Message | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setMessages(data);
        setSelected(data[0] || null);
      }

      setLoading(false);
    };

    fetchMessages();
  }, []);


  const handleDelete = async (id: number) => {
  const confirmDelete = confirm("Delete this message?");
  if (!confirmDelete) return;

  const { error } = await supabase
    .from("contact_messages")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    return;
  }

  // remove from UI instantly
  setMessages((prev) => prev.filter((msg) => msg.id !== id));

  // clear selected if deleted
  setSelected((prev) => (prev?.id === id ? null : prev));
};

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Loading messages...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
            <Mail className="text-cyan-400" size={26} />
          </div>

          <div>
            <h1 className="text-3xl font-black">Messages Inbox</h1>
            <p className="text-slate-400 text-sm">
              Click a message to view details
            </p>
          </div>

          <div className="ml-auto text-sm text-slate-400">
            Total: {messages.length}
          </div>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT: LIST */}
          <div className="lg:col-span-1 bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="p-3 border-b border-slate-800 text-sm text-slate-400">
              Inbox
            </div>

            <div className="max-h-[75vh] overflow-y-auto">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  onClick={() => setSelected(msg)}
                  className={`p-4 cursor-pointer border-b border-slate-800 transition hover:bg-slate-800/40 ${
                    selected?.id === msg.id ? "bg-slate-800/60" : ""
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <p className="font-semibold text-sm">
                      {msg.full_name}
                    </p>
                    <span className="text-xs text-slate-500">
                      {new Date(msg.created_at).toLocaleDateString()}
                    </span>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(msg.id);
                        }}
                        className="text-red-400 hover:text-red-300 text-xs"
                        >
                        Delete
                    </button>
                  </div>

                  <p className="text-xs text-slate-400 truncate">
                    {msg.subject}
                  </p>
                  
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: DETAILS */}
          <div className="lg:col-span-2 bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
            {selected ? (
              <>
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold">
                      {selected.full_name}
                    </h2>

                    <a
                      href={`mailto:${selected.email}`}
                      className="text-cyan-400 text-sm"
                    >
                      {selected.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <CalendarDays size={14} />
                    {new Date(selected.created_at).toLocaleString()}
                  </div>
                </div>

                {/* Subject */}
                <div className="mt-6">
                  <p className="text-slate-500 text-xs uppercase">
                    Subject
                  </p>
                  <p className="text-lg font-semibold">
                    {selected.subject}
                  </p>
                </div>

                {/* Message */}
                <div className="mt-6">
                  <p className="text-slate-500 text-xs uppercase">
                    Message
                  </p>
                  <p className="mt-2 text-slate-300 whitespace-pre-wrap leading-relaxed">
                    {selected.message}
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-8 flex gap-3">
  
                    <a
                        href={`mailto:${selected.email}`}
                        className="px-4 py-2 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400"
                    >
                        Reply
                    </a>

                    <button
                        onClick={() => handleDelete(selected.id)}
                        className="px-4 py-2 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600"
                    >
                        Delete
                    </button>

                    </div>
              </>
            ) : (
              <div className="text-slate-500">
                Select a message to view details
              </div>
            )}
          </div>

        </div>
      </div>
    </main>
  );
};

export default MessagesPage;