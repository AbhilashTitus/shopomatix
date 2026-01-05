import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(request: NextRequest) {
    try {
        // Validate environment variables
        const keyId = process.env.RAZORPAY_KEY_ID;
        const keySecret = process.env.RAZORPAY_KEY_SECRET;

        if (!keyId || !keySecret) {
            console.error('Razorpay credentials not configured');
            return NextResponse.json(
                { error: 'Payment gateway not configured. Please contact support.' },
                { status: 500 }
            );
        }

        // Initialize Razorpay inside the function to avoid build-time errors
        const razorpay = new Razorpay({
            key_id: keyId,
            key_secret: keySecret,
        });

        const { planId, amount, currency } = await request.json();

        const options = {
            amount: amount * 100, // amount in paise
            currency: currency || 'INR',
            receipt: `membership_${planId}_${Date.now()}`,
            notes: {
                planId: planId,
                type: 'membership_subscription'
            },
        };

        const order = await razorpay.orders.create(options);

        return NextResponse.json({
            id: order.id,
            amount: order.amount,
            currency: order.currency,
        });
    } catch (error) {
        console.error('Error creating Razorpay membership order:', error);
        return NextResponse.json(
            { error: 'Failed to create membership order' },
            { status: 500 }
        );
    }
}
