import { Global, Module } from '@nestjs/common';
import { EmailService } from './email.service';

@Global()
@Module({
  // controllers: [EmailMqController],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
