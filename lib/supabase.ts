import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Log environment variables for debugging (only in development)
if (process.env.NODE_ENV === 'development') {
  console.log('Supabase URL:', supabaseUrl)
  console.log('Supabase Anon Key (first 20 chars):', supabaseAnonKey.substring(0, 20) + '...')
}

// Check if we have real Supabase credentials
export const hasValidSupabaseConfig = supabaseUrl !== 'https://placeholder.supabase.co' && 
  supabaseAnonKey !== 'placeholder-key' &&
  !supabaseUrl.includes('your-project-id') &&
  !supabaseAnonKey.includes('your_anon_key_here') &&
  supabaseUrl.includes('supabase.co')

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Client pour les opérations admin (côté serveur uniquement)
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-key'

export const supabaseAdmin = createClient(
  supabaseUrl,
  supabaseServiceRoleKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)