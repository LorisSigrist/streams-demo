import { z } from "zod";

export const ContactSchema = z.object({
    id: z.string().uuid(),
    position: z.string(),
    name: z.string(),
    email: z.string().email(),
});