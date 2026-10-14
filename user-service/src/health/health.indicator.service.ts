import { Injectable } from '@nestjs/common';
import { HealthCheckService, HttpHealthIndicator, TypeOrmHealthIndicator } from '@nestjs/terminus';

@Injectable()
export class HealthIndicatorService {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private typeOrmHealthIndicator: TypeOrmHealthIndicator
  ) {}

  check() {
    return this.health.check([
      () => this.http.pingCheck('api', `${process.env.APP_URL || 'http://localhost:3000'}/api/health`),
    ]);
  }
}
