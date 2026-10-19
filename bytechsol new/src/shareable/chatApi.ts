const UNAVAILABLE = 'The assistant is temporarily unavailable. Please contact our team or try again later.';

export async function getChatApiUrl(signal: AbortSignal): Promise<string> {
  const local = ['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname);
  const response = await fetch('/chat-config.json', { cache: 'no-store', signal });
  if (!response.ok) throw new Error(UNAVAILABLE);
  const config = await response.json().catch(() => null);
  const value = typeof config?.apiUrl === 'string' ? config.apiUrl.trim() : '';
  if (!value && local) return '/api/chat';
  if (!value) throw new Error(UNAVAILABLE);
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error(UNAVAILABLE);
  }
  const localHttp = local && ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname) && url.protocol === 'http:';
  if ((url.protocol !== 'https:' && !localHttp) || url.username || url.password || url.hash) {
    throw new Error(UNAVAILABLE);
  }
  return url.href;
}
