import { Controller, Get, Render } from '@nestjs/common'

import AppService from './app.service'

@Controller()
export default class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    @Render('index')
    public index() {
        return
    }

    @Get('/hello')
    public getHello() {
        return this.appService.getHello()
    }

    @Get('/server-props')
    @Render('serverProps')
    public serverProps() {
        return {
            title: 'Next with Nest'
        }
    }
}
