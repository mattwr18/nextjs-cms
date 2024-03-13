export interface ChannelsObject {
  [key: string]: string | bigint | null | undefined;
  Email: string | null | undefined;
  Signal: string | null | undefined;
  Telegram: bigint | null | undefined;
  Threema: string | null | undefined;
  WhatsApp: string | null | undefined;
}

export const Role: {
  USER: 'USER';
  ADMIN: 'ADMIN';
} = {
  USER: 'USER',
  ADMIN: 'ADMIN',
};

export type Role = (typeof Role)[keyof typeof Role];
