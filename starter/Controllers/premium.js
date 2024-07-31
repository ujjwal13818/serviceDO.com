import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51PiIkgJ59zhrSaEw6JD1FSBe42IOlVkWR23qWROi1HZmTOnIhusInMcB0ZTwjEJxbBCy27Z8L08UoRGbMsx7syUL00nRI5hWPZ",
  {
    apiVersion: "2022-11-15", // Ensure this is the version you're using
  }
);

export const premiumController = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: "price_1PiY1iJ59zhrSaEwMUXAXmcH",
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: "http://localhost:5173/home",
      cancel_url: "http://localhost:5173/home",
    });
    res.json({ id: session.id });
  } catch (error) {
    console.error("Error in premium controller:", error);
    res.status(500).send({
      success: false,
      message: "Error in premium process",
      error: error.message,
    });
  }
};
