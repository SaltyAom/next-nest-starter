import {
    FastifyAdapter,
    NestFastifyApplication
} from '@nestjs/platform-fastify'

import { Test } from '@nestjs/testing'

import AppModule from 'src/app'

describe('AppController (e2e)', () => {
    let app: NestFastifyApplication

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            imports: [
                AppModule
            ]
        }).compile()

        app = module.createNestApplication<NestFastifyApplication>(
            new FastifyAdapter()
        )
        await app.init()
    })

    it(`[/hello] getRoot() returns 'Hello World!'`, () => {
        return app
            .inject({
                method: 'GET',
                url: '/hello'
            })
            .then(({ payload }) => expect(payload).toEqual('Hello World!'))
    })

    afterEach(async () => {
        await app.close()
    })
})
