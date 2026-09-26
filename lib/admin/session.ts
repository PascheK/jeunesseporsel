// Session du tableau de bord : cookie signé (HMAC-SHA256) contenant la date d'expiration.
// Utilise Web Crypto pour fonctionner à la fois dans le middleware (edge) et les routes API (node).

export const ADMIN_COOKIE = "admin_session";
export const SESSION_DURATION_S = 60 * 60 * 12; // 12 heures

const encoder = new TextEncoder();

const toHex = (buffer: ArrayBuffer) =>
  Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

const getSecret = () => {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) throw new Error("ADMIN_SESSION_SECRET manquant ou trop court");
  return secret;
};

const sign = async (value: string) => {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  return toHex(await crypto.subtle.sign("HMAC", key, encoder.encode(value)));
};

// Comparaison à temps constant de deux chaînes (via leur empreinte SHA-256).
export const safeEqual = async (a: string, b: string) => {
  const [ha, hb] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(a)),
    crypto.subtle.digest("SHA-256", encoder.encode(b))
  ]);
  const va = new Uint8Array(ha);
  const vb = new Uint8Array(hb);
  let diff = 0;
  for (let i = 0; i < va.length; i++) diff |= va[i] ^ vb[i];
  return diff === 0;
};

export const createSessionToken = async () => {
  const expires = Math.floor(Date.now() / 1000) + SESSION_DURATION_S;
  return `${expires}.${await sign(String(expires))}`;
};

export const isValidSessionToken = async (token: string | undefined) => {
  if (!token) return false;
  const [expires, signature] = token.split(".");
  if (!expires || !signature || Number(expires) < Date.now() / 1000) return false;
  try {
    return await safeEqual(signature, await sign(expires));
  } catch {
    return false;
  }
};
