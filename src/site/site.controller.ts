import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class SiteController {
    @Get()
    @Render('pages/index')
    async root(): Promise<void> {}
}
