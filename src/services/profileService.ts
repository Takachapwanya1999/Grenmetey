import { supabase } from './supabaseClient';
import type { User as AppUser, Address } from '../types';

export async function upsertProfileFromUser(u: AppUser) {
  const { error } = await supabase.from('profiles').upsert({
    id: u.id,
    email: u.email,
    first_name: u.firstName,
    last_name: u.lastName,
    phone: u.phone,
    address: u.address as unknown as Record<string, unknown>,
    role: u.role,
  });
  if (error) throw error;
}

export async function fetchProfile(id: string): Promise<Partial<AppUser> | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('email, first_name, last_name, phone, address, role, created_at')
    .eq('id', id)
    .single();
  if (error) return null;
  if (!data) return null;
  const addr = (data.address || {}) as Address;
  return {
    email: data.email,
    firstName: data.first_name || '',
    lastName: data.last_name || '',
    phone: data.phone || '',
    address: addr,
    role: (data.role as AppUser['role']) || 'customer',
    createdAt: data.created_at ? new Date(data.created_at) : new Date(),
  } as Partial<AppUser>;
}
