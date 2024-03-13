import { ChannelsObject } from './definitions';

export const fullName = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => {
  return `${firstName} ${lastName}`;
};

export const contributorChannels = (contributor: {
  email?: string | null | undefined;
  signal_phone_number?: string | null;
  telegram_id?: bigint | null;
  threema_id?: string | null;
  whats_app_phone_number?: string | null;
}) => {
  const {
    email,
    signal_phone_number,
    telegram_id,
    threema_id,
    whats_app_phone_number,
  } = contributor;
  const channelsObject: ChannelsObject = {
    Email: email,
    Signal: signal_phone_number,
    Telegram: telegram_id,
    Threema: threema_id,
    WhatsApp: whats_app_phone_number,
  };
  const keys = Object.keys(channelsObject).filter((key) => channelsObject[key]);
  return keys[0];
};

export const convertToDateTimeLocalString = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};
