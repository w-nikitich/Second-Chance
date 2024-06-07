export class CreateUserDto {
  nickname: string;

  deviceId: string;

  password?: string;

  usedTitleId?: number;
}
