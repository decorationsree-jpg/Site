import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// ✅ Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/Aboutpage";
import ContactPage from "./pages/ContactPage";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

// ✅ Service Pages
import BirthdayBalloonDecoration from "@/pages/services/BirthdayBalloonDecoration";
import HaldiFlowerDecoration from "@/pages/services/HaldiFlowerDecoration";
import EngagementFlowerDecoration from "@/pages/services/EngagementFlowerDecoration";
import WeddingFlowerDecoration from "@/pages/services/WeddingFlowerDecoration";
import HalfSareeFlowerDecoration from "@/pages/services/HalfSareeFlowerDecoration";
import DhotiFunctionDecoration from "@/pages/services/DhotiFunctionDecoration";
import AnniversaryEventDecoration from "@/pages/services/AnniversaryEventDecoration";
import HouseWarmingFlowerDecoration from "@/pages/services/HouseWarmingFlowerDecoration";
import BabyShowerFlowerDecoration from "@/pages/services/BabyShowerFlowerDecoration";
import CradleCeremonyFlowerDecoration from "@/pages/services/CradleCeremonyFlowerDecoration";
import OfficeInaugurationDecoration from "@/pages/services/OfficeInaugurationDecoration";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter basename="/">
        <ScrollToTop />
        <Routes>

          {/* ✅ Home */}
          <Route path="/" element={<Index />} />

          {/* ✅ About Page */}
          
          <Route path="/about" element={<AboutPage />} />

          {/* ✅ Contact Page */}
          <Route path="/contact" element={<ContactPage />} />

          {/* ✅ Redirect /service/... to /services/... correctly */}
          <Route
            path="/service/:slug"
            element={
              <Navigate
                to={`/services/${window.location.pathname.split('/')[2]}`}
                replace
              />
            }
          />

          {/* ✅ Individual Service Pages */}
          <Route path="/services/birthday-balloon-decoration" element={<BirthdayBalloonDecoration />} />
          <Route path="/services/haldi-flower-decoration" element={<HaldiFlowerDecoration />} />
          <Route path="/services/engagement-flower-decoration" element={<EngagementFlowerDecoration />} />
          <Route path="/services/wedding-flower-decoration" element={<WeddingFlowerDecoration />} />
          <Route path="/services/half-saree-flower-decoration" element={<HalfSareeFlowerDecoration />} />
          <Route path="/services/dhoti-function-decoration" element={<DhotiFunctionDecoration />} />
          <Route path="/services/house-warming-flower-decoration" element={<HouseWarmingFlowerDecoration />} />
          <Route path="/services/anniversary-event-decoration" element={<AnniversaryEventDecoration />} />
          <Route path="/services/baby-shower-flower-decoration" element={<BabyShowerFlowerDecoration />} />
          <Route path="/services/cradle-ceremony-flower-decoration" element={<CradleCeremonyFlowerDecoration />} />
          <Route path="/services/office-inauguration-decoration" element={<OfficeInaugurationDecoration />} />

          {/* ✅ 404 */}
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </BrowserRouter>

      <WhatsAppButton />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
