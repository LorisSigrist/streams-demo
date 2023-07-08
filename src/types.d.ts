import { z } from 'zod';
import { ContactSchema } from '../shared.js';

export type Contact = z.infer<typeof ContactSchema>;