import { useState } from "react";

const threads = [
  {
    id: 1,
    initials: "SR",
    name: "Sha Rik",
    preview: "Exciting Internship Opportunity!...",
    time: "Mar 13",
    bgColor: "bg-green-100",
    textColor: "text-green-800",
    unread: true,
  },
  {
    id: 2,
    initials: "KG",
    name: "Khushboo Gaur",
    preview: "Khushboo sent a post",
    time: "Jan 6",
    bgColor: "bg-pink-100",
    textColor: "text-pink-800",
    unread: false,
  },
  {
    id: 3,
    initials: "KJ",
    name: "Kartik Joshi",
    preview: "You: 👍",
    time: "Dec 14",
    bgColor: "bg-violet-100",
    textColor: "text-violet-800",
    unread: false,
  },
];

const initialMessages = [
  {
    id: 1,
    from: "other",
    text: "\"Exciting Internship Opportunity! If interested, reply 'I'm interested' to grab this chance to boost your skills and career.\"\n\nRegards\nSharik Malik",
    time: "4h ago",
    sender: "Sha Rik",
  },
  {
    id: 2,
    from: "me",
    text: "I'm interested! Please share more details about the role.",
    time: "2h ago",
  },
];

export default function MessagingPage() {
  const [activeThread, setActiveThread] = useState(1);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const activeContact = threads.find((t) => t.id === activeThread);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: "me", text: input.trim(), time: "Just now" },
    ]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col pt-12">

      {/* Main */}
      <div className="flex-1 flex max-w-4xl mx-auto w-full mt-4 mb-4 px-4 gap-0 rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white" style={{ height: "calc(100vh - 80px)" }}>

        {/* Thread List */}
        <div className="w-72 flex-shrink-0 border-r border-gray-200 flex flex-col">
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            <span className="text-base font-semibold text-gray-900">Messaging</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500 cursor-pointer hover:text-blue-600">
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          </div>

          {/* Filter pills */}
          <div className="px-3 py-2 flex gap-1.5 flex-wrap border-b border-gray-100">
            {["Focused", "Jobs", "Unread", "InMail"].map((f, i) => (
              <span
                key={f}
                className={`text-[11px] px-2.5 py-0.5 rounded-full cursor-pointer border transition-colors ${
                  i === 0
                    ? "bg-[#0A66C2] text-white border-[#0A66C2]"
                    : "border-gray-300 text-gray-500 hover:border-blue-400 hover:text-blue-600"
                }`}
              >
                {f}
              </span>
            ))}
          </div>

          {/* Search */}
          <div className="px-3 py-2 border-b border-gray-100">
            <input
              type="text"
              placeholder="Search messages"
              className="w-full bg-gray-100 rounded-full px-3 py-1.5 text-xs text-gray-600 outline-none"
            />
          </div>

          {/* Threads */}
          <div className="flex-1 overflow-y-auto">
            {threads.map((t) => (
              <div
                key={t.id}
                onClick={() => setActiveThread(t.id)}
                className={`flex gap-3 items-start px-4 py-3 cursor-pointer border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                  activeThread === t.id ? "bg-gray-50 border-l-2 border-l-[#0A66C2]" : ""
                }`}
              >
                <div className={`w-10 h-10 rounded-full ${t.bgColor} ${t.textColor} flex items-center justify-center text-xs font-semibold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex justify-between items-center">
                    <p className={`text-sm font-medium text-gray-900 truncate ${t.unread ? "font-semibold" : ""}`}>{t.name}</p>
                    <span className="text-[10px] text-gray-400 flex-shrink-0 ml-1">{t.time}</span>
                  </div>
                  <p className="text-xs text-gray-400 truncate">{t.preview}</p>
                </div>
                {t.unread && (
                  <div className="w-2 h-2 bg-[#0A66C2] rounded-full flex-shrink-0 mt-1.5" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col min-w-0">

          {/* Chat Header */}
          <div className="px-4 py-3 border-b border-gray-200 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full ${activeContact?.bgColor} ${activeContact?.textColor} flex items-center justify-center text-xs font-semibold`}>
              {activeContact?.initials}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{activeContact?.name}</p>
              <p className="text-xs text-gray-400">Mobile · 4h ago</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
            {messages.map((msg) =>
              msg.from === "other" ? (
                <div key={msg.id} className="flex flex-col items-start max-w-[75%]">
                  <div className="bg-gray-100 rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-2xl px-4 py-2.5 text-sm text-gray-800 leading-relaxed whitespace-pre-line border border-gray-200">
                    {msg.text}
                  </div>
                  <span className="text-[11px] text-gray-400 mt-1 ml-1">{msg.sender} · {msg.time}</span>
                </div>
              ) : (
                <div key={msg.id} className="flex flex-col items-end self-end max-w-[75%]">
                  <div className="bg-[#0A66C2] rounded-tl-2xl rounded-tr-none rounded-bl-2xl rounded-br-2xl px-4 py-2.5 text-sm text-white leading-relaxed">
                    {msg.text}
                  </div>
                  <span className="text-[11px] text-gray-400 mt-1 mr-1">You · {msg.time}</span>
                </div>
              )
            )}
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-gray-200 flex items-center gap-3">
            <div className="flex gap-2 text-gray-400">
              <button className="hover:text-blue-500 transition-colors">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
              </button>
              <button className="hover:text-blue-500 transition-colors">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66L9.41 17.41a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
              </button>
            </div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Write a message..."
              className="flex-1 bg-gray-50 rounded-full px-4 py-2 text-sm text-gray-700 outline-none border border-gray-200 focus:border-blue-400 transition-colors"
            />
            <button
              onClick={sendMessage}
              className="w-9 h-9 bg-[#0A66C2] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors flex-shrink-0"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 13L13 7L1 1V6L11 7L1 8V13Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}