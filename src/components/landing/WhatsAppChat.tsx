import { useState, useEffect } from "react";

interface Message {
  from: "bot" | "user";
  text: string;
  time: string;
}

interface WhatsAppChatProps {
  messages: Message[];
  contactName?: string;
  contactSubtitle?: string;
  className?: string;
  animateIn?: boolean;
  compact?: boolean;
}

export default function WhatsAppChat({
  messages,
  contactName = "Clínica Dental Sonríe",
  contactSubtitle = "Asistente Virtual · En línea",
  className = "",
  animateIn = true,
  compact = false,
}: WhatsAppChatProps) {
  const [visibleCount, setVisibleCount] = useState(animateIn ? 0 : messages.length);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!animateIn) return;
    if (visibleCount >= messages.length) return;

    const nextMsg = messages[visibleCount];
    const delay = nextMsg.from === "bot" ? 1200 : 600;

    setTyping(nextMsg.from === "bot");
    const timer = setTimeout(() => {
      setTyping(false);
      setVisibleCount((c) => c + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [visibleCount, messages, animateIn]);

  const scale = compact ? "scale-[0.85] origin-top" : "";

  return (
    <div className={`w-[340px] rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 bg-[#0b141a] ${scale} ${className}`}>
      {/* Status bar */}
      <div className="flex items-center justify-between px-6 pt-3 pb-1 text-white/70 text-[10px]">
        <span>12:00</span>
        <div className="flex items-center gap-1">
          <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
          <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#1f2c34]">
        <button className="text-white/80">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">
          🦷
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-semibold truncate">{contactName}</p>
          <p className="text-white/50 text-[11px]">{contactSubtitle}</p>
        </div>
        <div className="flex items-center gap-4 text-white/70">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </div>
      </div>

      {/* Chat area */}
      <div className="bg-[#0b141a] px-3 py-4 min-h-[320px] max-h-[420px] overflow-y-auto space-y-2 relative"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
      >
        {messages.slice(0, visibleCount).map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"} animate-[slideUp_0.3s_ease-out]`}
          >
            <div
              className={`max-w-[80%] rounded-xl px-3 py-2 text-[13px] leading-relaxed relative ${
                msg.from === "user"
                  ? "bg-[#005c4b] text-white rounded-tr-sm"
                  : "bg-[#1f2c34] text-white/90 rounded-tl-sm"
              }`}
            >
              <span className="whitespace-pre-line">{msg.text}</span>
              <span className="text-[10px] text-white/40 ml-2 float-right mt-1">
                {msg.time}
                {msg.from === "user" && (
                  <svg className="inline ml-0.5 -mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--blue-bright))" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                )}
              </span>
            </div>
          </div>
        ))}

        {typing && (
          <div className="flex justify-start animate-[slideUp_0.2s_ease-out]">
            <div className="bg-[#1f2c34] rounded-xl px-4 py-3 rounded-tl-sm">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input bar */}
      <div className="bg-[#1f2c34] px-3 py-2 flex items-center gap-2">
        <div className="flex items-center gap-2 text-white/50">
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>
        </div>
        <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-white/40 text-sm">
          Escribe un mensaje...
        </div>
        <div className="flex items-center gap-2 text-white/50">
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/></svg>
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.41 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/></svg>
        </div>
      </div>

      {/* Home indicator */}
      <div className="bg-[#0b141a] flex justify-center py-2">
        <div className="w-32 h-1 bg-white/20 rounded-full" />
      </div>
    </div>
  );
}
