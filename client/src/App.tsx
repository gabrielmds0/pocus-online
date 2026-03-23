import { useEffect } from "react";
import ReactGA from "react-ga4";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { useInitSessionTracking } from "./hooks/useFormTracking";
import { captureUtmParams } from "./hooks/useTracking";
import Home from "./pages/Home";

function App() {
  useInitSessionTracking();

  useEffect(() => {
    captureUtmParams();

    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (gaId) {
      ReactGA.initialize(gaId);
    } else {
      console.warn("GA_MEASUREMENT_ID is not configured. Set VITE_GA_MEASUREMENT_ID in .env");
    }
  }, []);

  return (
    <ErrorBoundary>
      <TooltipProvider>
        <Toaster />
        <Home />
      </TooltipProvider>
    </ErrorBoundary>
  );
}

export default App;
