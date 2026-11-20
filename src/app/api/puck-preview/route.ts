import { NextResponse } from 'next/server'

// Temporary preview endpoint placeholder. The persisted Puck editor will be connected
// to authenticated Payload posts in the next implementation step.
export async function GET() {
  return NextResponse.json({
    status: 'not-configured',
    message: 'Puck preview persistence has not been wired up yet.',
  }, { status: 501 })
}