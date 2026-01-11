import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://htqdjxsvuachcmhmymie.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0cWRqeHN2dWFjaGNtaG15bWllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwNzU1NDcsImV4cCI6MjA4MzY1MTU0N30._n3yH_DYp7stBQzykn5SVRIKO-iruipoCPVIyjVZnPI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types pour TypeScript
export interface RiskAssessment {
  id: string;
  created_at: string;
  email: string;
  first_name: string;
  score: number;
  risk_level: string;
  answers: any;
  breakdown: any;
  email_sent: boolean;
  email_sent_at?: string;
  resend_message_id?: string;
  user_agent?: string;
  ip_address?: string;
}

export interface SubmitAssessmentData {
  email: string;
  firstName: string;
  score: number;
  riskLevel: string;
  answers: any;
  breakdown: any;
}