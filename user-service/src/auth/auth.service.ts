import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async sign(payload: Record<string, unknown>): Promise<string> {
    return this.jwtService.sign(payload);
  }
}
