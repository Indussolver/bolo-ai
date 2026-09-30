// PLACEHOLDER prices and rates. Replace with your real pricing before launch.
export const plans = [
  { id: "starter", name: "Starter", tagline: "Chhote business aur clinics ke liye",
    price: { m: 4999, y: 3999 }, minutes: 1500,
    features: ["1,500 minute har mahine", "2 bhashayein", "Call transcript aur WhatsApp summary", "Email support"], cta: "Starter shuru karein" },
  { id: "growth", name: "Growth", tagline: "Badhte business ke liye", featured: true,
    price: { m: 14999, y: 11999 }, minutes: 6000,
    features: ["6,000 minute har mahine", "Saari 8 bhashayein", "CRM aur payment integrations", "Live call summary", "Priority support"], cta: "Growth shuru karein" },
  { id: "enterprise", name: "Enterprise", tagline: "Bade call volume ke liye",
    price: null,
    features: ["Volume ke hisaab se custom rate", "Private cloud ya apna data centre", "Aapke lehje par custom training", "24x7 support aur SLA"], cta: "Team se baat karein" },
];

export const calc = {
  humanPerMin: 8,               // assumed cost of a human agent per minute
  boloPerMin: { m: 2.5, y: 2 }, // assumed Bolo cost per minute (monthly / yearly billing)
  yearlyDiscount: 20,           // % shown on the toggle badge
};
