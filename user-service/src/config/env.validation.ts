import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().int().positive().default(3000),
  LOG_LEVEL: z.enum(['error', 'warn', 'log', 'debug', 'verbose']).default('debug'),
  DATABASE_URL: z.string().url().optional(),
  REDIS_URL: z.string().url().optional(),
  JWT_SECRET: z.string().min(32).optional(),
  JWT_REFRESH_SECRET: z.string().min(32).optional(),
  JWT_EXPIRES_IN: z.string().default('1h'),
  KAFKA_BROKERS: z.string().optional(),
  RABBITMQ_URL: z.string().url().optional(),
});

export type EnvConfig = z.infer<typeof envSchema>;
