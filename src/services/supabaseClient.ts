import { createClient } from '@supabase/supabase-js';

// Read from Vite env (ensure these are defined in your .env file)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!isSupabaseConfigured) {
  // Non-fatal warning so local dev without env still builds
  // Auth calls will throw if attempted without proper env
  // eslint-disable-next-line no-console
  console.warn('[Supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. Set them in your .env file.');
}

export const supabase = createClient(
  supabaseUrl || 'http://localhost:54321',
  supabaseAnonKey || 'missing-anon-key'
);
