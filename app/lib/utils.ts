import { Contributor } from './definitions';

export const fullName = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => {
  return `${firstName} ${lastName}`;
};

export const contributorChannels = (contributor: Contributor) => {
  const {
    email,
    signal_phone_number,
    telegram_id,
    threema_id,
    whats_app_phone_number,
  } = contributor;
  const channelsObject = {
    Email: email,
    Signal: signal_phone_number,
    Telegram: telegram_id,
    Threema: threema_id,
    WhatsApp: whats_app_phone_number,
  };
  const keys = Object.keys(channelsObject).filter((key) => channelsObject[key]);
  return keys[0];
};
