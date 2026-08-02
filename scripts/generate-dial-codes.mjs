import { writeFileSync } from "node:fs";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";

const OUT = new URL("../src/lib/dialCodes.ts", import.meta.url);
const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

const MARKETS = [
  "US", "CA", "MX", "BR", "AR", "CL", "CO",
  "GB", "IE", "FR", "DE", "NL", "BE", "CH", "AT", "ES", "PT", "IT",
  "SE", "NO", "DK", "FI", "PL", "CZ", "HU", "RO", "GR", "UA", "TR",
  "AE", "SA", "QA", "KW", "IL", "EG",
  "ZA", "NG", "KE", "MA",
  "AU", "NZ", "JP", "KR", "CN", "HK", "TW", "SG", "MY", "TH", "VN", "PH", "ID", "IN",
];

const supported = new Set(getCountries());
const unknown = MARKETS.filter((iso) => !supported.has(iso));
if (unknown.length) throw new Error(`Not in libphonenumber metadata: ${unknown.join(", ")}`);

const NAME_OVERRIDES = { HK: "Hong Kong", MO: "Macao" };

const countries = MARKETS.map((iso) => ({
  iso,
  name: NAME_OVERRIDES[iso] ?? regionNames.of(iso),
  dial: `+${getCountryCallingCode(iso)}`,
})).sort((a, b) => a.name.localeCompare(b.name, "en"));

const rows = countries
  .map((c) => `  { iso: "${c.iso}", name: ${JSON.stringify(c.name)}, dial: "${c.dial}" },`)
  .join("\n");

writeFileSync(
  OUT,
  `export type DialCode = { iso: string; name: string; dial: string };

export const DEFAULT_DIAL_ISO = "US";

export const dialCodes: DialCode[] = [
${rows}
];
`,
  "utf8",
);

console.log(`Wrote ${countries.length} countries to src/lib/dialCodes.ts`);
