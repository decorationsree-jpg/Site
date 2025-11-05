import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919700450027?text=Hi!%20I%20need%20more%20details%20about%20event%20decorations."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white 
                 rounded-full p-4 shadow-lg flex items-center justify-center 
                 transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

// ✅ Default Export Added
export default WhatsAppButton;
