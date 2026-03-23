type UtmParam =
  | 'utm_source'
  | 'utm_medium'
  | 'utm_campaign'
  | 'utm_content'
  | 'utm_term'
  | 'gclid'
  | 'fbclid';

type FormDataParam = 'name' | 'email' | 'phone';

type TrackingParam = UtmParam | FormDataParam | 'session_id';

interface FormData {
  name?: string;
  email?: string;
  phone?: string;
}

interface StoredParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
  session_id?: string;
  name?: string;
  email?: string;
  phone?: string;
}

const UTM_PARAMS: UtmParam[] = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'fbclid'
];

const ALL_PARAMS: TrackingParam[] = [
  ...UTM_PARAMS,
  'session_id',
  'name',
  'email',
  'phone'
];

export function captureUtmParams(): void {
  const params = new URLSearchParams(window.location.search);

  UTM_PARAMS.forEach((param) => {
    const value = params.get(param);
    if (value) {
      sessionStorage.setItem(param, value);
    }
  });

  if (!sessionStorage.getItem('session_id')) {
    sessionStorage.setItem('session_id', crypto.randomUUID());
  }
}

export function saveFormData(data: FormData): void {
  if (data.name) sessionStorage.setItem('name', data.name);
  if (data.email) sessionStorage.setItem('email', data.email);
  if (data.phone) sessionStorage.setItem('phone', data.phone);
}

export function buildTrackedUrl(baseUrl: string | null | undefined): string | null {
  if (!baseUrl) return null;

  try {
    const url = new URL(baseUrl);

    ALL_PARAMS.forEach((key) => {
      const value = sessionStorage.getItem(key);
      if (value && !url.searchParams.has(key)) {
        url.searchParams.set(key, value);
      }
    });

    return url.toString();
  } catch {
    return baseUrl;
  }
}

export function getStoredUtms(): Partial<Record<UtmParam, string>> {
  const utms: Partial<Record<UtmParam, string>> = {};

  UTM_PARAMS.forEach((key) => {
    const value = sessionStorage.getItem(key);
    if (value) {
      utms[key] = value;
    }
  });

  return utms;
}
