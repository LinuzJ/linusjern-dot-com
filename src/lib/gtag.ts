export const GA_TRACKING_ID = 'G-YHTJBWQQFT';

export const pageview = (url: any) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
