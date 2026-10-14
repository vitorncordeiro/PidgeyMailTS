import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { envSchema } from './config/env.validation.js';
import { PrismaModule } from './database/prisma.module.js';
import { RabbitMqModule } from './messaging/rabbitmq/rabbitmq.module.js';
import { AuthModule } from './auth/auth.module.js';
import { TerminusModule } from '@nestjs/terminus';
import { HealthModule } from './health/health.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.local'],
      validate: (config) => envSchema.parse(config),
    }),
    ConfigModule,
    PrismaModule,
    RabbitMqModule,
    AuthModule,
    TerminusModule,
    HealthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
