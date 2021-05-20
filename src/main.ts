import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap(): Promise<void> {
    const app: NestExpressApplication = await NestFactory.create<NestExpressApplication>(AppModule);

    const configService: ConfigService = app.get(ConfigService);
    const port: number = Number(configService.get<number>('MT_SERVER_PORT'));

    app.useStaticAssets(join(__dirname, '..', 'src', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', 'src', 'views'));
    app.setViewEngine('pug');

    await app.listen(port);
}
bootstrap();
