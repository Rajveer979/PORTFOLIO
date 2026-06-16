const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

const isAnalyticsEnabled = () => Boolean(MEASUREMENT_ID) && import.meta.env.PROD;

const getGlobal = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  window.dataLayer = window.dataLayer || [];

  if (!window.gtag) {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }

  return window;
};

export const initAnalytics = async () => {
  if (!isAnalyticsEnabled()) {
    return false;
  }

  const global = getGlobal();

  if (!global) {
    return false;
  }

  const existingScript = document.querySelector(`script[data-ga-measurement-id="${MEASUREMENT_ID}"]`);

  if (existingScript) {
    return true;
  }

  await new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(MEASUREMENT_ID)}`;
    script.dataset.gaMeasurementId = MEASUREMENT_ID;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Google Analytics'));
    document.head.appendChild(script);
  });

  global.gtag('js', new Date());
  global.gtag('config', MEASUREMENT_ID, { send_page_view: false });

  return true;
};

export const trackEvent = (eventName, params = {}) => {
  if (!isAnalyticsEnabled()) {
    return;
  }

  const global = getGlobal();

  if (!global) {
    return;
  }

  global.gtag('event', eventName, params);
};

export const trackPageView = (path) => {
  if (!isAnalyticsEnabled()) {
    return;
  }

  const global = getGlobal();

  if (!global) {
    return;
  }

  global.gtag('event', 'page_view', {
    page_path: path || `${window.location.pathname}${window.location.search}`,
    page_title: document.title,
  });
};

export const trackSectionView = (section) => {
  trackEvent('section_view', { section });
};

export const trackOutboundLink = (label, url) => {
  let domain = '';

  try {
    domain = new URL(url, window.location.origin).hostname;
  } catch (error) {
    domain = 'unknown';
  }

  trackEvent('external_link_click', {
    link_label: label,
    domain,
  });
};
