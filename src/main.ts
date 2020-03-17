import { NestFactory } from '@nestjs/core'

import {
    FastifyAdapter,
    NestFastifyApplication
} from '@nestjs/platform-fastify'

import compression from 'fastify-compress'

import RootModule from './app.module'

const bootstrap = async () => {
    const app = await NestFactory.create<NestFastifyApplication>(
        RootModule,
        new FastifyAdapter()
    )

    app.register(compression)

    await app.listen(3000, '0.0.0.0')
}

bootstrap()
