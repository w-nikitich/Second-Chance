
import { JwtService } from '@nestjs/jwt';

const a = new JwtService();
const token = a.sign({ userId: 1 }, { secret: 'SECRET' });
const decoded = a.verify(token, {
  secret: 'SECRET',
});
console.log('====================================');
console.log(decoded);
console.log(token);
console.log('====================================');
