import { z } from "zod";

export const OrderInputSchema = z.object({
    baseAssest: z.string(),
    quoteAssest: z.string(),
  price: z.number(),
  quantity: z.number(),
  side: z.enum(['buy', 'sell']),
  type: z.enum(['limit', 'market']),
  kind: z.enum(['ioc']).optional(),
});