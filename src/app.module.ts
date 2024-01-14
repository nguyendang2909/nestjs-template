import { Module } from '@nestjs/common';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import winston from 'winston';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_CONFIG } from './configs';

@Module({
  imports: [
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike(APP_CONFIG.APP_NAME, {
              prettyPrint: true,
              colors: true,
            }),
          ),
        }),
        // other transports...
      ],
      // other options
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
