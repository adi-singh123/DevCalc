"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, X, Send } from "lucide-react";
import {
  findBestMatch,
  getCategoryCalculators,
  findTopMatches,
} from "./chatUtils";

type Message = {
  role: "user" | "bot";
  text: string;
  link?: string;
  linkText?: string;

  suggestions?: {
    name: string;
    url: string;
  }[];
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi 👋 I'm DevCalc Assistant. Ask me about calculators or calculation topics.",
    },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();

    const updatedMessages = [
      ...messages,
      {
        role: "user" as const,
        text: userMessage,
      },
    ];

    setMessages(updatedMessages);

    const match = findBestMatch(userMessage);

    const topMatches = findTopMatches(userMessage, 3);

    const categoryResults = getCategoryCalculators(userMessage);

    // Category Search
    if (categoryResults && categoryResults.length) {
      setMessages([
        ...updatedMessages,
        {
          role: "bot",
          text: `Found ${categoryResults[0].category} calculators:`,
          suggestions: categoryResults.map((calculator) => ({
            name: calculator.name,
            url: `/${calculator.slug}`,
          })),
          link: `/category/${categoryResults[0].category
            .toLowerCase()
            .replace(/\s+/g, "-")}`,
          linkText: "View All Calculators",
        },
      ]);

      setInput("");
      return;
    }

    // Strong single match
    if (
      topMatches.length > 0 &&
      topMatches[0].score >= (topMatches[1]?.score ?? 0) + 20
    ) {
      const best = topMatches[0].calculator;

      setMessages([
        ...updatedMessages,
        {
          role: "bot",
          text: best.description,
          link: `/${best.slug}`,
          linkText: best.name,
        },
      ]);

      setInput("");
      return;
    }

    // Multiple matches
    if (topMatches.length > 1) {
      setMessages([
        ...updatedMessages,
        {
          role: "bot",
          text: "I found these calculators:",
          suggestions: topMatches.map((item) => ({
            name: item.calculator.name,
            url: `/${item.calculator.slug}`,
          })),
        },
      ]);

      setInput("");
      return;
    }

    // FAQ
    if (match && match.type === "faq") {
      setMessages([
        ...updatedMessages,
        {
          role: "bot",
          text: match.answer,
          link: `/${match.calculator.slug}`,
          linkText: match.calculator.name,
        },
      ]);

      setInput("");
      return;
    }

    // Calculator
    if (match && match.type === "calculator") {
      setMessages([
        ...updatedMessages,
        {
          role: "bot",
          text: match.calculator.description,
          link: `/${match.calculator.slug}`,
          linkText: match.calculator.name,
        },
      ]);

      setInput("");
      return;
    }

    // Fallback
    setMessages([
      ...updatedMessages,
      {
        role: "bot",
        text: "I couldn't find an exact match. Try browsing all calculators.",
        link: "/calculators",
        linkText: "Browse Calculators",
      },
    ]);

    setInput("");
  };
  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="
          fixed
          bottom-4
          right-4
          z-50
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-blue-600
          text-white
          shadow-lg
          transition
          hover:bg-blue-700
          sm:bottom-6
          sm:right-6
          sm:h-14
          sm:w-14
        "
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="
         
            fixed
            inset-x-3
            bottom-20
            top-[max(1rem,env(safe-area-inset-top))]
            z-50
            flex
            flex-col
            overflow-hidden
            rounded-3xl
            border
            bg-white
            shadow-2xl
            dark:border-slate-700
            dark:bg-slate-900
            sm:inset-x-auto
            sm:top-auto
            sm:bottom-24
            sm:right-6
            sm:h-[550px]
            sm:w-[380px]
            sm:max-h-[80vh]
          "
        >
          {/* Header */}
          <div
            className="
              flex-shrink-0
              bg-blue-600
              px-4
              py-3
              text-white
              sm:px-5
              sm:py-4
            "
          >
            <h3 className="text-sm font-semibold sm:text-base">
              DevCalc Assistant
            </h3>

            <p className="text-xs opacity-90 sm:text-sm">
              Find calculators &amp; answers instantly
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-shrink-0 gap-2 overflow-x-auto border-b p-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <button
              onClick={() => setInput("Find a calculator")}
              className="flex-shrink-0 whitespace-nowrap rounded-full border px-3 py-1 text-xs"
            >
              Find Calculator
            </button>

            <button
              onClick={() => setInput("Popular tools")}
              className="flex-shrink-0 whitespace-nowrap rounded-full border px-3 py-1 text-xs"
            >
              Popular Tools
            </button>

            <button
              onClick={() => setInput("What is BMI")}
              className="flex-shrink-0 whitespace-nowrap rounded-full border px-3 py-1 text-xs"
            >
              Ask Question
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto p-3 sm:p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm break-words ${
                    message.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 dark:bg-slate-800"
                  }`}
                >
                  <div>
                    <p>{message.text}</p>

                    {message.suggestions?.map((suggestion) => (
                      <Link
                        key={suggestion.url}
                        href={suggestion.url}
                        className="
          mt-2
          block
          rounded-xl
          border
          border-slate-200
          bg-white
          px-3
          py-2
          text-sm
          font-medium
          text-blue-600
          transition
          hover:bg-blue-50
          dark:border-slate-700
          dark:bg-slate-900
        "
                      >
                        {suggestion.name}
                      </Link>
                    ))}
                  </div>

                  {message.link && (
                    <Link
                      href={message.link}
                      className="mt-2 block font-medium text-blue-600 underline"
                    >
                      {message.linkText}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex-shrink-0 border-t p-3 [padding-bottom:max(0.75rem,env(safe-area-inset-bottom))]">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSend();
                  }
                }}
                placeholder="Ask something..."
                className="min-w-0 flex-1 rounded-xl border px-3 py-2 text-sm"
              />

              <button
                onClick={handleSend}
                aria-label="Send message"
                className="flex-shrink-0 rounded-xl bg-blue-600 px-4 text-white"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}