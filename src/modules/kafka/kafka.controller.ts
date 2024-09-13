import { Controller } from '@nestjs/common';
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { EmailService } from '../email/email.service';

@Controller()
export class KafkaController {
  constructor(private readonly emailService: EmailService) {}
  @MessagePattern('registration')
  killDragon(@Payload() message, @Ctx() context: KafkaContext) {
    const originalMessage = context.getMessage();
    // const partition = context.getPartition();
    // const { headers, timestamp } = originalMessage;
    // console.log('Message:', message);
    console.log('Original message:', originalMessage);
    this.emailService.snedEmail(message);
    // console.log(partition, headers, timestamp);
  }
}
