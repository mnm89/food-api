import { Injectable, OnApplicationBootstrap } from '@nestjs/common';

@Injectable()
export class SeedService implements OnApplicationBootstrap {
  onApplicationBootstrap() {
    // seed database with default data
  }
}
