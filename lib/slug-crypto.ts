// lib/slug-crypto.ts (Node / Next.js server)
import crypto from "crypto";
const KEY = process.env.PROFILE_SLUG_KEY!; // 32 bytes base64 or hex
if (!KEY) throw new Error("PROFILE_SLUG_KEY not set");

// utils
const toBase64Url = (b: Buffer) =>
  b.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
const fromBase64Url = (s: string) => {
  s = s.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  return Buffer.from(s, "base64");
};

// use 32-byte key (AES-256)
const key = Buffer.from(KEY, "base64"); // store key as base64 in env

export function encryptSlug(payload: Record<string, any>): string {
  const iv = crypto.randomBytes(12); // 96-bit IV for GCM
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  const plaintext = Buffer.from(JSON.stringify(payload), "utf8");
  const ciphertext = Buffer.concat([cipher.update(plaintext), cipher.final()]);
  const tag = cipher.getAuthTag();

  // final token: iv | tag | ciphertext  -> base64url
  const token = Buffer.concat([iv, tag, ciphertext]);
  return toBase64Url(token);
}

export function decryptSlug(tokenB64Url: string): Record<string, any> {
  const token = fromBase64Url(tokenB64Url);
  if (token.length < 12 + 16) throw new Error("Invalid token");

  const iv = token.slice(0, 12);
  const tag = token.slice(12, 28);
  const ciphertext = token.slice(28);

  const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
  decipher.setAuthTag(tag);
  const plain = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  return JSON.parse(plain.toString("utf8"));
}
