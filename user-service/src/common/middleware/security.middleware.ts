import { Injectable } from '@nestjs/common';
import helmet from 'helmet';

@Injectable()
export class SecurityMiddleware {
  static use(): ReturnType<typeof helmet> {
    return helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
    });
  }
}
