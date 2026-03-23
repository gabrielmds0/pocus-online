import { useCallback, useEffect } from "react";
import ReactGA from "react-ga4";

interface TrackingData {
  [key: string]: string | number | boolean | null | undefined;
}

interface UseFormTrackingConfig {
  formName?: string;
}

interface UseFormTrackingReturn {
  trackFormStart: (additionalData?: TrackingData) => void;
  trackFormValidationError: (errors?: string[]) => void;
  trackFormDataCaptured: (data?: TrackingData) => void;
  trackFormSubmit: (additionalData?: TrackingData) => void;
  trackFormSuccess: (data?: TrackingData) => void;
  trackFormError: (error: Error | string | unknown) => void;
  trackFormRedirect: (url: string) => void;
}

export const useFormTracking = ({
  formName = "form",
}: UseFormTrackingConfig = {}): UseFormTrackingReturn => {
  const trackFormStart = useCallback(
    (additionalData: TrackingData = {}) => {
      ReactGA.event({ category: "Form", action: "form_start", label: formName, ...additionalData });
    },
    [formName]
  );

  const trackFormValidationError = useCallback(
    (errors: string[] = []) => {
      ReactGA.event({ category: "Form", action: "form_validation_error", label: formName, value: errors.length, error_fields: errors.join(", ") } as Parameters<typeof ReactGA.event>[0]);
    },
    [formName]
  );

  const trackFormDataCaptured = useCallback(
    (data: TrackingData = {}) => {
      ReactGA.event({ category: "Form", action: "form_data_captured", label: formName, ...data });
    },
    [formName]
  );

  const trackFormSubmit = useCallback(
    (additionalData: TrackingData = {}) => {
      ReactGA.event({ category: "Form", action: "form_submit", label: formName, form_name: formName, ...additionalData } as Parameters<typeof ReactGA.event>[0]);
    },
    [formName]
  );

  const trackFormSuccess = useCallback(
    (data: TrackingData = {}) => {
      ReactGA.event({ category: "Form", action: "form_success", label: formName, ...data });
    },
    [formName]
  );

  const trackFormError = useCallback(
    (error: Error | string | unknown) => {
      const message = error instanceof Error ? error.message : typeof error === "string" ? error : "Unknown error";
      ReactGA.event({ category: "Form", action: "form_error", label: formName, error_message: message } as Parameters<typeof ReactGA.event>[0]);
    },
    [formName]
  );

  const trackFormRedirect = useCallback(
    (url: string) => {
      ReactGA.event({ category: "Form", action: "form_redirect", label: formName, redirect_url: url } as Parameters<typeof ReactGA.event>[0]);
    },
    [formName]
  );

  return {
    trackFormStart,
    trackFormValidationError,
    trackFormDataCaptured,
    trackFormSubmit,
    trackFormSuccess,
    trackFormError,
    trackFormRedirect,
  };
};

export const getCaptureData = (pageLoadTime: number, modalOpenTime: number | null = null) => {
  const urlParams = new URLSearchParams(window.location.search);
  const now = Date.now();
  const currentDate = new Date();

  const getDeviceType = (): "mobile" | "tablet" | "desktop" => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return "tablet";
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) return "mobile";
    return "desktop";
  };

  const timeOnSite = Math.round((now - pageLoadTime) / 1000);
  const formFillTime = modalOpenTime ? Math.round((now - modalOpenTime) / 1000) : 0;

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = daysOfWeek[currentDate.getDay()];

  const hour = currentDate.getHours();
  let timeOfDay: "morning" | "afternoon" | "evening" | "night" = "morning";
  if (hour >= 12 && hour < 18) timeOfDay = "afternoon";
  else if (hour >= 18 && hour < 24) timeOfDay = "evening";
  else if (hour >= 0 && hour < 6) timeOfDay = "night";

  let sessionId = sessionStorage.getItem("session_id");
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
    sessionStorage.setItem("session_id", sessionId);
  }

  const visitCount = parseInt(localStorage.getItem("visit_count") || "0", 10);

  return {
    utm_source: urlParams.get("utm_source") || "direct",
    utm_medium: urlParams.get("utm_medium") || "direct",
    utm_campaign: urlParams.get("utm_campaign") || "none",
    utm_content: urlParams.get("utm_content") || null,
    utm_term: urlParams.get("utm_term") || null,
    fbclid: urlParams.get("fbclid") || null,
    gclid: urlParams.get("gclid") || null,
    page_path: window.location.pathname,
    page_title: document.title,
    referrer: document.referrer || "direct",
    page_url: window.location.href,
    device_type: getDeviceType(),
    screen_resolution: `${window.screen.width}x${window.screen.height}`,
    viewport_size: `${window.innerWidth}x${window.innerHeight}`,
    browser_language: navigator.language,
    user_agent: navigator.userAgent,
    session_timestamp: new Date().toISOString(),
    time_on_site_seconds: timeOnSite,
    form_fill_time_seconds: formFillTime,
    day_of_week: dayOfWeek,
    time_of_day: timeOfDay,
    hour_of_day: hour,
    session_id: sessionId,
    visit_count: visitCount,
    is_returning_visitor: visitCount > 1,
  };
};

export const useInitSessionTracking = () => {
  useEffect(() => {
    if (!sessionStorage.getItem("session_id")) {
      sessionStorage.setItem("session_id", `session_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`);
    }

    const visitCount = parseInt(localStorage.getItem("visit_count") || "0", 10) + 1;
    localStorage.setItem("visit_count", visitCount.toString());
  }, []);
};
