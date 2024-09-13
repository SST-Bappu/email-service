import { Global, Module } from '@nestjs/common';
import { KafkaController } from './kafka.controller';
import { EmailModule } from '../email/email.module';

@Global()
@Module({
  controllers: [KafkaController],
  providers: [],
  imports: [EmailModule],
})
export class KafkaModule {}
