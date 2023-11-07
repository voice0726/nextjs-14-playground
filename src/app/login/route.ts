import { URL } from 'url';

import { NextRequest } from 'next/server';

import { signIn } from '@/auth';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const redirectTo = searchParams.get('redirect_to') || undefined;
  await signIn('google', {
    redirectTo,
    redirect: !!redirectTo,
  });
}
