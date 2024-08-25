import { LemonSqueezy } from '@lemonsqueezy/lemonsqueezy.js'
import { NextResponse } from 'next/server'

const lemonSqueezy = new LemonSqueezy(process.env.LEMON_SQUEEZY_API_KEY)

export async function POST(req) {
  if (req.method === 'POST') {
    try {
      const { variantId, customerId } = await req.json()

      const checkout = await lemonSqueezy.createCheckout({
        storeId: process.env.LEMON_SQUEEZY_STORE_ID,
        variantId: variantId,
        customData: {
          customerId: customerId,
        },
      })

      return NextResponse.json({ checkoutUrl: checkout.data.attributes.url })
    } catch (error) {
      return NextResponse.json({ error: 'Error creating checkout' }, { status: 500 })
    }
  } else {
    return NextResponse.json({ error: `Method ${req.method} Not Allowed` }, { status: 405 })
  }
}