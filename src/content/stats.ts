/**
 * Homepage stats band.
 *
 * ⚠️⚠️ PLACEHOLDER VALUES — DO NOT PUBLISH AS-IS ⚠️⚠️
 *
 * These numbers are TEMPLATE VALUES, not Hexary Labs' real figures. They exist
 * so the section can be designed and reviewed. Every `value` below must be
 * replaced with a verified number (or the section removed) before launch.
 *
 * `value` is the count-up target; `prefix`/`suffix` bracket it.
 */
export const statsArePlaceholder = true;

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

/* Round template values — deliberately generic so they cannot be mistaken for
   verified claims, but non-zero so the count-up animation is reviewable. */
export const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Products shipped" }, // PLACEHOLDER
  { value: 10, suffix: "M+", label: "Users reached" }, // PLACEHOLDER
  { value: 100, prefix: "$", suffix: "M+", label: "Raised by our clients" }, // PLACEHOLDER
];
