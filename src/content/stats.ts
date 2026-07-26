export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Products shipped" },
  { value: 10, suffix: "M+", label: "Users reached" },
  { value: 100, prefix: "$", suffix: "M+", label: "Raised by our clients" },
];
