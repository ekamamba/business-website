const requests = new Map<string, number>();

const LIMIT_MS = 30_000;

export function isRateLimited(ip: string): boolean {
  const now = Date.now();

  const lastRequest = requests.get(ip);

  if (lastRequest && now - lastRequest < LIMIT_MS) {
    return true;
  }

  requests.set(ip, now);

  return false;
}