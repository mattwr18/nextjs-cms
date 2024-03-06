export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date;
};

export type Contributor = {
  id: string;
  first_name: string;
  last_name: string;
  email: string | null;
  telegram_chat_id: bigint | null;
  created_at: Date;
  updated_at: Date;
  username: string | null;
  telegram_id: bigint | null;
  note: string | null;
  zip_code: string | null;
  city: string | null;
  phone: string | null;
  deactivated_at: Date | null;
  threema_id: string | null;
  data_processing_consented_at: Date | null;
  telegram_onboarding_token: string | null;
  signal_phone_number: string | null;
  signal_onboarding_completed_at: Date | null;
  additional_email: string | null;
  additional_consent_given_at: Date | null;
  organization_id: string | null;
  whats_app_phone_number: string | null;
  whats_app_message_template_responded_at: Date | null;
  deactivated_by_user_id: string | null;
  deactivated_by_admin: boolean | null;
  whats_app_message_template_sent_at: Date | null;
  unsubscribed_at: Date | null;
};

export type Request = {
  id: string;
  title: string;
  text: string | null;
  created_at: Date;
  updated_at: Date;
  user_id: string;
  schedule_send_for: Date;
  broadcasted_at: Date;
};

export interface ChannelsObject {
  [key: string]: string | bigint | null;
  Email: string | null;
  Signal: string | null;
  Telegram: bigint | null;
  Threema: string | null;
  WhatsApp: string | null;
}

export interface useTranslationOptions {
  keyPrefix?: string;
}
