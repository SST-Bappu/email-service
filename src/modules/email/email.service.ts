import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  constructor() {}

  snedEmail(message): string {
    console.log(message);
    return 'Email sent!';
  }
}
