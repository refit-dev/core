import { Stripe } from "stripe";
import config from "../../config.ts";

export const stripe = new Stripe(config.STRIPE_SECRET, {
  apiVersion: "2026-09-30.endive",
});
export default stripe;
