import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Check if we have real Supabase credentials
export const hasValidSupabaseConfig = 
  supabaseUrl !== 'https://placeholder.supabase.co' && 
  supabaseAnonKey !== 'placeholder-key' &&
  !supabaseUrl.includes('your-project-id') &&
  !supabaseAnonKey.includes('your_anon_key_here') &&
  supabaseUrl.includes('supabase.co') &&
  supabaseUrl.startsWith('https://') &&
  supabaseAnonKey.length > 20

// Log configuration status for debugging (only in development)
if (process.env.NODE_ENV === 'development') {
  console.log('Supabase configuration status:', {
    hasValidConfig: hasValidSupabaseConfig,
    urlValid: supabaseUrl !== 'https://placeholder.supabase.co' && supabaseUrl.includes('supabase.co'),
    keyValid: supabaseAnonKey !== 'placeholder-key' && supabaseAnonKey.length > 20
  })
}

export const supabase = hasValidSupabaseConfig 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Client pour les opérations admin (côté serveur uniquement)
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-key'

export const supabaseAdmin = hasValidSupabaseConfig && supabaseServiceRoleKey !== 'placeholder-service-key'
  ? createClient(
      supabaseUrl,
      supabaseServiceRoleKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )
  : null