import { loadStripe } from "@stripe/stripe-js";

export async function getStripeJs() {
  // const stripeJs = await loadStripe(process.env.NEXT_STRIPE_PUBLIC_KEY);
  const stripeJs = await loadStripe(`${process.env.NEXT_STRIPE_PUBLIC_KEY}`);

  return stripeJs;
}
