"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChatMessage } from "@/src/lib/omagel/types";
import { SkipForward, PhoneOff, Flag, Send } from "lucide-react";

interface OmagelTextChatProps {
  messages: ChatMessage[];
  onSendMessage: (text: string) => Promise<void>;
  onTyping: (typing: boolean) => void;
  onNext: () => void;
  onEnd: () => void;
  onReport: () => void;
  isStrangerTyping: boolean;
  strangerDisconnected: boolean;
}

export const OmagelTextChat: React.FC<OmagelTextChatProps> = ({
  messages,
  onSendMessage,
  onTyping,
  onNext,
  onEnd,
  onReport,
  isStrangerTyping,
  strangerDisconnected,
}) => {
  const [inputText, setInputText] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isStrangerTyping, strangerDisconnected]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || strangerDisconnected || sending) return;
    setSending(true);
    try { await onSendMessage(inputText.trim()); setInputText(""); onTyping(false); }
    catch { /* Keep the draft; the parent displays the delivery error. */ }
    finally { setSending(false); }
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col h-[calc(100vh-140px)] min-h-[500px] bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
      {/* Header bar */}
      <div className="p-4 border-b border-stone-200 dark:border-slate-800 bg-stone-50 dark:bg-slate-950/60 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${strangerDisconnected ? "bg-rose-500" : "bg-emerald-500 animate-pulse"}`} />
          <div>
            <h3 className="text-sm font-bold text-[#26364a] dark:text-white">
              {strangerDisconnected ? "Stranger Disconnected" : "Stranger Connected"}
            </h3>
            <p className="text-[11px] text-stone-500 dark:text-slate-400">Random text conversation</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onReport}
            className="p-2 rounded-xl text-stone-500 hover:text-rose-600 hover:bg-stone-200 dark:hover:bg-slate-800 transition-colors"
            title="Report or Block"
          >
            <Flag className="w-4 h-4" />
          </button>
          <button
            onClick={onNext}
            className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1 cursor-pointer"
          >
            <SkipForward className="w-3.5 h-3.5" /> Next
          </button>
          <button
            onClick={onEnd}
            className="p-2 rounded-xl bg-stone-200 dark:bg-slate-800 hover:bg-rose-100 text-stone-700 dark:text-slate-300 hover:text-rose-600 transition-colors"
            title="Leave Chat"
          >
            <PhoneOff className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs sm:text-sm">
        <div className="text-center py-2 text-[11px] text-stone-400 dark:text-slate-500 border-b border-stone-100 dark:border-slate-800/80">
          You are now chatting with a random stranger. Be polite and stay safe!
        </div>

        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex flex-col max-w-[80%] ${m.isSelf ? "ml-auto items-end" : "mr-auto items-start"}`}
          >
            <div className="text-[10px] text-stone-400 dark:text-slate-500 px-1 mb-0.5">
              {m.isSelf ? "You" : "Stranger"} • {new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
            <div
              className={`p-3 rounded-2xl break-words leading-relaxed ${
                m.isSelf
                  ? "bg-[#26364a] text-white rounded-tr-xs"
                  : "bg-stone-100 dark:bg-slate-800 text-stone-900 dark:text-slate-100 rounded-tl-xs"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}

        {isStrangerTyping && (
          <div className="text-xs text-stone-400 dark:text-slate-500 italic px-2">
            Stranger is typing...
          </div>
        )}

        {strangerDisconnected && (
          <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 text-center space-y-2">
            <p className="text-xs font-semibold text-rose-700 dark:text-rose-300">
              The stranger has disconnected from the chat.
            </p>
            <button
              onClick={onNext}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
            >
              Find Someone New
            </button>
          </div>
        )}
      </div>

      {/* Message Input Bar */}
      <form onSubmit={handleSubmit} className="p-3 border-t border-stone-200 dark:border-slate-800 bg-stone-50 dark:bg-slate-950/60 flex items-center gap-2">
        <input
          type="text"
          aria-label="Message to stranger"
          placeholder={strangerDisconnected ? "Stranger disconnected..." : "Type your message..."}
          disabled={strangerDisconnected || sending}
          value={inputText}
          onChange={(e) => { setInputText(e.target.value); onTyping(!!e.target.value.trim()); }}
          maxLength={500}
          className="flex-1 px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 text-xs sm:text-sm text-stone-900 dark:text-slate-100 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#26364a] dark:focus:ring-indigo-500 disabled:opacity-50"
        />
        <button
          type="submit"
          aria-label="Send message"
          disabled={strangerDisconnected || sending || !inputText.trim()}
          className="p-3 bg-[#26364a] hover:bg-[#1a2533] dark:bg-indigo-600 dark:hover:bg-indigo-500 disabled:opacity-50 text-white rounded-xl transition-all cursor-pointer"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
