"use client";

import React from "react";
import { ChatMode } from "@/src/lib/omagel/types";
import { Video, MessageSquare, Sparkles, Users, Shield, Zap } from "lucide-react";

interface OmagelLobbyProps {
  mode: ChatMode;
  onSelectMode: (mode: ChatMode) => void;
  interests: string;
  onInterestsChange: (val: string) => void;
  onStartChat: () => void;
  onlineCount: number;
}

export const OmagelLobby: React.FC<OmagelLobbyProps> = ({
  mode,
  onSelectMode,
  interests,
  onInterestsChange,
  onStartChat,
  onlineCount,
}) => {
  return (
    <div className="max-w-2xl mx-auto space-y-8 text-center py-4">
      {/* Hero Badge & Heading */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 dark:bg-emerald-950/70 dark:border-emerald-500/30 dark:text-emerald-400 text-xs font-semibold shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{onlineCount > 0 ? `${onlineCount} Live ${onlineCount === 1 ? 'Stranger' : 'Strangers'} Online` : "Live Matchmaking Active · 18+"}</span>
        </div>
        <h2 className="text-2xl font-bold">Start a conversation</h2>
        <p className="text-sm sm:text-base text-stone-600 dark:text-slate-400 max-w-lg mx-auto">
          Pick a mode and join the waiting queue. A conversation starts when another person is available.
        </p>
      </div>

      {/* Mode Selection Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
        <button
          onClick={() => onSelectMode("video")}
          className={`p-6 rounded-2xl border transition-all cursor-pointer space-y-3 relative text-left ${
            mode === "video"
              ? "bg-white dark:bg-slate-900 border-[#26364a] dark:border-indigo-500 ring-2 ring-[#26364a]/20 dark:ring-indigo-500/30 shadow-md"
              : "bg-white/60 dark:bg-slate-900/60 border-stone-200 dark:border-slate-800 hover:border-stone-300 dark:hover:border-slate-700 shadow-xs"
          }`}
        >
          <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 dark:bg-indigo-950/80 dark:border-indigo-500/30 dark:text-indigo-400 flex items-center justify-center">
            <Video className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-base text-[#26364a] dark:text-white flex items-center justify-between">
              Random Video Chat
              {mode === "video" && <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 font-semibold">Selected</span>}
            </h3>
            <p className="text-xs text-stone-500 dark:text-slate-400 mt-1">
              Face-to-face peer connection via WebRTC with audio & video controls.
            </p>
          </div>
        </button>

        <button
          onClick={() => onSelectMode("text")}
          className={`p-6 rounded-2xl border transition-all cursor-pointer space-y-3 relative text-left ${
            mode === "text"
              ? "bg-white dark:bg-slate-900 border-[#26364a] dark:border-indigo-500 ring-2 ring-[#26364a]/20 dark:ring-indigo-500/30 shadow-md"
              : "bg-white/60 dark:bg-slate-900/60 border-stone-200 dark:border-slate-800 hover:border-stone-300 dark:hover:border-slate-700 shadow-xs"
          }`}
        >
          <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 dark:bg-amber-950/80 dark:border-amber-500/30 dark:text-amber-400 flex items-center justify-center">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-base text-[#26364a] dark:text-white flex items-center justify-between">
              Random Text Chat
              {mode === "text" && <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 font-semibold">Selected</span>}
            </h3>
            <p className="text-xs text-stone-500 dark:text-slate-400 mt-1">
              Text conversation with typing indicators. No camera or microphone needed.
            </p>
          </div>
        </button>
      </div>

      {/* Optional Interests Input */}
      <div className="bg-white dark:bg-slate-900/90 border border-stone-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-3 text-left shadow-xs">
        <label htmlFor="chat-interests" className="text-xs font-bold text-stone-700 dark:text-slate-300 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          Add Your Interests (Optional)
        </label>
        <input
          id="chat-interests"
          maxLength={154}
          type="text"
          placeholder="e.g. coding, music, movies, gaming (comma separated)"
          value={interests}
          onChange={(e) => onInterestsChange(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl bg-stone-50 dark:bg-slate-950 border border-stone-200 dark:border-slate-800 text-xs sm:text-sm text-stone-900 dark:text-slate-100 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#26364a] dark:focus:ring-indigo-500 transition-all"
        />
        <p className="text-[11px] text-stone-400 dark:text-slate-500">
          Up to five tags, 30 characters each. Shared topics are preferred among waiting people; otherwise you may match without shared interests.
        </p>
      </div>

      {/* Action CTA */}
      <button
        onClick={onStartChat}
        className="w-full sm:w-auto px-10 py-4 bg-[#26364a] hover:bg-[#1a2533] dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white rounded-2xl font-bold text-base transition-all shadow-lg hover:shadow-xl active:scale-98 cursor-pointer flex items-center justify-center gap-2 mx-auto"
      >
        <Zap className="w-5 h-5 text-amber-300" />
        Start {mode === "video" ? "Video Chat" : "Text Chat"}
      </button>

      {/* Feature highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left text-xs">
        <div className="p-4 rounded-xl bg-stone-50 dark:bg-slate-950/60 border border-stone-200 dark:border-slate-800 space-y-1">
          <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <h3 className="font-semibold text-stone-800 dark:text-slate-200">No account required</h3>
          <p className="text-stone-500 dark:text-slate-400">Use a guest identity. Avoid sharing your name, location or contact details.</p>
        </div>
        <div className="p-4 rounded-xl bg-stone-50 dark:bg-slate-950/60 border border-stone-200 dark:border-slate-800 space-y-1">
          <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <h3 className="font-semibold text-stone-800 dark:text-slate-200">Browser video chat</h3>
          <p className="text-stone-500 dark:text-slate-400">Low-latency WebRTC streaming directly between browsers.</p>
        </div>
        <div className="p-4 rounded-xl bg-stone-50 dark:bg-slate-950/60 border border-stone-200 dark:border-slate-800 space-y-1">
          <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <h3 className="font-semibold text-stone-800 dark:text-slate-200">Choose Next or Leave</h3>
          <p className="text-stone-500 dark:text-slate-400">End the conversation or rejoin the queue for another available person.</p>
        </div>
      </div>
    </div>
  );
};
