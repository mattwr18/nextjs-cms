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
  email: string;
  telegram_chat_id: number;
  created_at: Date;
  updated_at: Date;
  username: string;
  telegram_id: number;
  note: string;
  zip_code: string;
  city: string;
  phone: string;
  deactivated_at: Date;
  threema_id: string;
  data_processing_consented_at: Date;
  telegram_onboarding_token: string;
  signal_phone_number: string;
  signal_onboarding_completed_at: Date;
  additional_email: string;
  additional_consent_given_at: Date;
  organization_id: string;
  whats_app_phone_number: string;
  whats_app_message_template_responded_at: Date;
  deactivated_by_user_id: number;
  deactivated_by_admin: boolean;
  whats_app_message_template_sent_at: Date;
  unsubscribed_at: Date;
};

export type Request = {
  id: string;
  title: string;
  text: string;
  created_at: Date;
  updated_at: Date;
  user_id: string;
  schedule_send_for: Date;
  broadcasted_at: Date;
};
