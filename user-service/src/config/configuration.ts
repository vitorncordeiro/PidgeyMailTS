import type { EnvConfig } from './env.validation.js';

export const configuration = (): EnvConfig => ({
  NODE_ENV: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test' ? process.env.NODE_ENV : 'development',
  PORT: parseInt(process.env.PORT || '3000', 10),
  LOG_LEVEL:
    process.env.LOG_LEVEL === 'error' ||
    process.env.LOG_LEVEL === 'warn' ||
    process.env.LOG_LEVEL === 'log' ||
    process.env.LOG_LEVEL === 'debug' ||
    process.env.LOG_LEVEL === 'verbose'
      ? process.env.LOG_LEVEL
      : 'debug',
  DATABASE_URL: process.env.DATABASE_URL,
  REDIS_URL: process.env.REDIS_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1h',
  KAFKA_BROKERS: process.env.KAFKA_BROKERS,
  RABBITMQ_URL: process.env.RABBITMQ_URL,
});
