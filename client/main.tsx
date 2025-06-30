import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StudyBooklets from "./pages/StudyBooklets";
import Level from "./pages/Level";
import Grade from "./pages/Grade";
import SchoolBooks from "./pages/SchoolBooks";
import MinisterialQuestions from "./pages/MinisterialQuestions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/study-booklets" element={<StudyBooklets />} />
          <Route path="/level/:levelId" element={<Level />} />
          <Route path="/grade/:gradeId" element={<Grade />} />
          <Route path="/school-books" element={<SchoolBooks />} />
          <Route
            path="/ministerial-questions"
            element={<MinisterialQuestions />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
