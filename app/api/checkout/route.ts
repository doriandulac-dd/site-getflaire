import { NextRequest } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const lookupKey = formData.get("lookup_key") as string;

    if (!lookupKey || typeof lookupKey !== 'string') {
      return new Response('Lookup key is required', { status: 400 });
    }

    // Récupérer le price via lookup_key
    const prices = await stripe.prices.list({
      lookup_keys: [lookupKey],
      expand: ['data.product'],
    });

    if (prices.data.length === 0) {
      return new Response('Price not found', { status: 404 });
    }

    const price = prices.data[0];

    // Créer la session Checkout
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
      automatic_tax: { enabled: true },
      billing_address_collection: 'required',
      customer_creation: 'always',
    });

    if (!session.url) {
      return new Response('Failed to create checkout session', { status: 500 });
    }

    return Response.redirect(session.url, 303);
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return new Response('Internal server error', { status: 500 });
  }
}