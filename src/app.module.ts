import { Module, CacheModule, CacheInterceptor } from '@nestjs/common'
import { APP_INTERCEPTOR } from '@nestjs/core'

import { RenderModule } from 'nest-next'
import Next from 'next'

import AppModule from 'src/app'

@Module({
    imports: [
        RenderModule.forRootAsync(
            Next({ dev: process.env.NODE_ENV !== 'production' })
        ),
        CacheModule.register(),
        AppModule
    ],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: CacheInterceptor
        }
    ]
})
export default class RootModule {}
