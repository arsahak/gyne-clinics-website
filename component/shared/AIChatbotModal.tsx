"use client";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  Send,
  X,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export type ChatbotType = "general" | "urogynaecology" | "aesthetic" | "menopause";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

interface AIChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
  chatbotType: ChatbotType;
}

// Content configuration for each section
const chatbotConfig = {
  general: {
    title: "General Gynaecology Assistant",
    subtitle: "Tell me about your symptoms",
    initialMessage: "Hello! I'm your General Gynaecology AI assistant. I can help you understand symptoms related to menstrual health, pelvic pain, screening, and contraception. What brings you here today?",
    quickQuestions: [
      "Heavy or irregular periods",
      "Pelvic pain concerns",
      "Contraception options",
      "Fertility questions",
    ],
    suggestions: [
      "What could cause heavy bleeding?",
      "Do I need a screening?",
      "What are my contraception options?",
    ],
  },
  urogynaecology: {
    title: "Urogynaecology Assistant",
    subtitle: "Bladder & pelvic floor health",
    initialMessage: "Hello! I'm your Urogynaecology AI assistant. I can help with questions about urinary incontinence, pelvic organ prolapse, and bladder health. How can I assist you today?",
    quickQuestions: [
      "Bladder leakage issues",
      "Pelvic organ prolapse",
      "Urodynamics testing",
      "Pelvic floor exercises",
    ],
    suggestions: [
      "What is stress incontinence?",
      "How do I know if I have prolapse?",
      "What is urodynamics testing?",
    ],
  },
  aesthetic: {
    title: "Aesthetic Gynaecology Assistant",
    subtitle: "Intimate wellness consultation",
    initialMessage: "Hello! I'm your Aesthetic Gynaecology AI assistant. I can help you learn about both surgical and non-surgical intimate wellness treatments. What would you like to know?",
    quickQuestions: [
      "Labiaplasty information",
      "Laser rejuvenation",
      "Recovery times",
      "Non-surgical options",
    ],
    suggestions: [
      "What is labiaplasty?",
      "How does laser rejuvenation work?",
      "What are non-surgical options?",
    ],
  },
  menopause: {
    title: "Menopause Health Assistant",
    subtitle: "Hormone & symptom support",
    initialMessage: "Hello! I'm your Menopause Health AI assistant. I can help you understand menopause symptoms, HRT options, and lifestyle management. What symptoms are you experiencing?",
    quickQuestions: [
      "Hot flushes & night sweats",
      "Mood changes",
      "HRT information",
      "Brain fog & memory",
    ],
    suggestions: [
      "What is HRT?",
      "How do I manage hot flushes?",
      "Is it normal to feel anxious?",
    ],
  },
};

// Mock AI responses (replace with API call later)
const getMockAIResponse = (userMessage: string, type: ChatbotType): string => {
  const lowerMessage = userMessage.toLowerCase();

  // General responses
  if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
    return "Hello! I'm here to help. Please tell me more about your symptoms or concerns.";
  }

  if (lowerMessage.includes("thank")) {
    return "You're welcome! If you have any more questions, feel free to ask. Remember, this is just initial guidance - please book a consultation for a proper assessment.";
  }

  // Type-specific responses
  if (type === "general") {
    if (lowerMessage.includes("period") || lowerMessage.includes("bleeding")) {
      return "Heavy or irregular periods can have various causes including hormonal imbalances, fibroids, or PCOS. I recommend booking a consultation for a proper assessment including hormone profiling and ultrasound. Would you like me to explain any specific symptoms?";
    }
    if (lowerMessage.includes("pain")) {
      return "Pelvic pain can result from conditions like endometriosis, fibroids, or ovarian cysts. Our specialists offer same-day ultrasound scans for diagnosis. Can you describe when the pain occurs?";
    }
  }

  if (type === "urogynaecology") {
    if (lowerMessage.includes("leak") || lowerMessage.includes("incontinence")) {
      return "Urinary incontinence is very common, affecting 50% of women post-childbirth. We offer both conservative treatments (pelvic floor therapy) and surgical options. Our in-house urodynamics testing can help diagnose the exact type. Would you like to know more about treatment options?";
    }
    if (lowerMessage.includes("prolapse")) {
      return "Pelvic organ prolapse occurs when pelvic organs drop from their normal position. We offer pessary fitting and surgical reconstruction. Early assessment is important. Have you noticed any specific symptoms like heaviness or bulging?";
    }
  }

  if (type === "aesthetic") {
    if (lowerMessage.includes("labiaplasty") || lowerMessage.includes("surgery")) {
      return "Labiaplasty is a precision surgical procedure to reshape the labia. Recovery typically takes 1-2 weeks. We also offer non-surgical alternatives like laser rejuvenation with no downtime. Would you like to know about the consultation process?";
    }
    if (lowerMessage.includes("laser") || lowerMessage.includes("non-surgical")) {
      return "Our non-surgical options include FDA-approved laser rejuvenation, O-Shot (PRP), and intimate fillers. These treatments have minimal to no downtime. Would you like details about a specific treatment?";
    }
  }

  if (type === "menopause") {
    if (lowerMessage.includes("hrt") || lowerMessage.includes("hormone")) {
      return "Bio-identical HRT is personalized to your hormone profile and can effectively manage symptoms like hot flushes, mood changes, and sleep issues. We provide comprehensive blood work and MHRA-regulated treatment. Would you like to know about the consultation process?";
    }
    if (lowerMessage.includes("hot") || lowerMessage.includes("flush") || lowerMessage.includes("sweat")) {
      return "Hot flushes and night sweats are common menopause symptoms caused by hormone fluctuations. HRT, lifestyle changes, and specific medications can help. Our BMS-accredited specialists can create a personalized treatment plan. What other symptoms are you experiencing?";
    }
  }

  // Default response
  return "That's a great question! For personalized medical advice, I recommend booking a consultation with our specialists. They can provide a comprehensive assessment and treatment plan tailored to your needs. Would you like me to help you with anything else, or would you like to book an appointment?";
};

const AIChatbotModal = ({ isOpen, onClose, chatbotType }: AIChatbotModalProps) => {
  const config = chatbotConfig[chatbotType];
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(() => `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);
  const [useAI, setUseAI] = useState(true); // Toggle between AI and mock
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // API endpoint - change this to your production URL
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  // Initialize chat with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "initial",
          text: config.initialMessage,
          sender: "ai",
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, config.initialMessage, messages.length]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      if (useAI) {
        // Call real AI API
        const conversationHistory = messages
          .filter(m => m.id !== "initial") // Exclude initial message
          .slice(-5) // Last 5 messages for context
          .map(m => ({
            role: m.sender === "user" ? "user" : "assistant",
            content: m.text
          }));

        const response = await fetch(`${API_BASE_URL}/api/chatbot/query`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: messageText,
            chatbotType: chatbotType,
            sessionId: sessionId,
            conversationHistory: conversationHistory
          }),
        });

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();

        if (data.success) {
          const aiMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: data.data.response,
            sender: "ai",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, aiMessage]);
        } else {
          throw new Error(data.message || "Failed to get response");
        }
      } else {
        // Use mock response (fallback)
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
        const aiResponse = getMockAIResponse(messageText, chatbotType);
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: aiResponse,
          sender: "ai",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiMessage]);
      }
    } catch (error) {
      console.error('Chatbot error:', error);
      
      // If AI fails, try mock response
      if (useAI) {
        console.log('AI failed, using mock response');
        const aiResponse = getMockAIResponse(messageText, chatbotType);
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: aiResponse,
          sender: "ai",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiMessage]);
      } else {
        // Show error message
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "Sorry, I'm having trouble responding right now. Please try again or contact our support team.",
          sender: "ai",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-xl">
                    <Bot size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{config.title}</h3>
                    <p className="text-sm opacity-90">{config.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Close chat"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Quick Questions Pills */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {config.quickQuestions.map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickQuestion(question)}
                      className="px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-full text-xs font-semibold transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-4 ${
                      message.sender === "user"
                        ? "bg-primary text-white"
                        : "bg-white border border-gray-200 text-gray-800 shadow-sm"
                    }`}
                  >
                    {message.sender === "ai" && (
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                        <MessageCircle size={16} className="text-secondary" />
                        <span className="text-xs font-semibold text-secondary">
                          AI Assistant
                        </span>
                      </div>
                    )}
                    {message.sender === "user" ? (
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                    ) : (
                      <div className="prose prose-sm max-w-none">
                        <ReactMarkdown
                          components={{
                            p: ({ children }) => (
                              <p className="text-sm leading-relaxed mb-3 last:mb-0 text-gray-800">
                                {children}
                              </p>
                            ),
                            strong: ({ children }) => (
                              <strong className="font-semibold text-gray-900">
                                {children}
                              </strong>
                            ),
                            ol: ({ children }) => (
                              <ol className="list-decimal list-outside ml-4 space-y-2 mb-3 text-sm text-gray-800">
                                {children}
                              </ol>
                            ),
                            ul: ({ children }) => (
                              <ul className="list-disc list-outside ml-4 space-y-2 mb-3 text-sm text-gray-800">
                                {children}
                              </ul>
                            ),
                            li: ({ children }) => (
                              <li className="text-sm leading-relaxed text-gray-800">
                                {children}
                              </li>
                            ),
                            h1: ({ children }) => (
                              <h1 className="text-lg font-bold mb-2 text-gray-900">
                                {children}
                              </h1>
                            ),
                            h2: ({ children }) => (
                              <h2 className="text-base font-bold mb-2 text-gray-900">
                                {children}
                              </h2>
                            ),
                            h3: ({ children }) => (
                              <h3 className="text-sm font-bold mb-2 text-gray-900">
                                {children}
                              </h3>
                            ),
                            code: ({ children }) => (
                              <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono text-gray-800">
                                {children}
                              </code>
                            ),
                            blockquote: ({ children }) => (
                              <blockquote className="border-l-4 border-secondary pl-4 italic text-gray-700 my-3">
                                {children}
                              </blockquote>
                            ),
                          }}
                        >
                          {message.text}
                        </ReactMarkdown>
                      </div>
                    )}
                    <span
                      className={`text-xs mt-2 block ${
                        message.sender === "user"
                          ? "text-white/70"
                          : "text-gray-400"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 rounded-2xl p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-secondary rounded-full animate-bounce"></span>
                        <span className="w-2 h-2 bg-secondary rounded-full animate-bounce delay-100"></span>
                        <span className="w-2 h-2 bg-secondary rounded-full animate-bounce delay-200"></span>
                      </div>
                      <span className="text-xs text-gray-500">AI is typing...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions (shown when no messages) */}
            {messages.length <= 2 && (
              <div className="px-6 py-3 bg-white border-t border-gray-100">
                <p className="text-xs text-gray-500 mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {config.suggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickQuestion(suggestion)}
                      className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-6 bg-gradient-to-r from-gray-50 to-white border-t border-gray-200">
              <div className="flex items-center gap-3 max-w-4xl mx-auto">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about your health..."
                    className="w-full h-14 pl-6 pr-14 border-2 border-gray-200 rounded-full focus:outline-none focus:border-primary focus:shadow-lg transition-all text-gray-900 placeholder-gray-400 bg-white font-medium"
                  />
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400">
                    <Sparkles size={20} />
                  </div>
                </div>
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  className="h-14 w-14 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary disabled:from-gray-300 disabled:to-gray-400 text-white rounded-full transition-all disabled:cursor-not-allowed flex items-center justify-center flex-shrink-0 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                  aria-label="Send message"
                >
                  <Send size={22} className="ml-0.5" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center max-w-2xl mx-auto">
                💬 AI-powered medical guidance • Always consult a doctor for diagnosis
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AIChatbotModal;
