export type InquiryMode = "contact" | "quote";
export interface InquiryFormProps { mode?: InquiryMode; }

export interface InquiryPayload {
  name: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  timeline: string;
  message: string;
  load: string;
  signage: string;
  website: string;
}

export type InquiryStatus =
  | { state: "idle"; message: string }
  | { state: "sending"; message: string }
  | { state: "success"; message: string }
  | { state: "error"; message: string };
