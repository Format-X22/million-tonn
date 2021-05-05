import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { INestApplication } from '@nestjs/common';

async function bootstrap(): Promise<void> {
    const app: INestApplication = await NestFactory.create(AppModule);

    const configService: ConfigService = app.get(ConfigService);
    const port: number = Number(configService.get<number>('MT_SERVER_PORT'));

    await app.listen(port);
}
bootstrap();
