import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://jkdsepbnigcztrfcwkpj.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprZHNlcGJuaWdjenRyZmN3a3BqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyMTMxNDIsImV4cCI6MjA3NTc4OTE0Mn0.BNJgx8nRWnYo8XxGV0pMYbm3bo7MK1AQEDlqC6RxnF0';

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