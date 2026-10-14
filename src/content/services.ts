/** Interior services and process. Confirm wording with the client. */
export const services = [
  {
    title: "Design consultation",
    body: "A walk-through of your space, how you live in it and what you want it to feel like. You leave with a clear direction and a realistic budget range.",
  },
  {
    title: "Space planning",
    body: "Measured layouts that get the proportions right before anything is bought: circulation, seating, storage and light.",
  },
  {
    title: "Furnishing & styling",
    body: "We select and supply the furniture, lighting, rugs and accessories, then style each room so it is ready to live in on handover.",
  },
  {
    title: "Custom pieces",
    body: "When the right piece doesn't exist, we have it made to your measurements, finishes and fabrics.",
  },
] as const;

export const processSteps = [
  { step: "01", title: "Consult", body: "We listen, visit or review your space, and agree the brief and budget." },
  { step: "02", title: "Plan", body: "Layouts, a material palette and a furniture schedule for your approval." },
  { step: "03", title: "Source", body: "We order, make and quality-check every piece on the schedule." },
  { step: "04", title: "Install", body: "Delivery, assembly and styling, finished down to the last cushion." },
] as const;
