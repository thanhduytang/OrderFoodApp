import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51KcT9LGV9ncMdqixuWZRbzMxZcEErHFsoxrTbR2InKeSBMWAuoe780VJC0o7dSzFWi7NEustwddzroCWKVh7eeTX009up3SoRK"
);

export const cardTokenRequest = (card) => {
  stripe.createToken(card);
};

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      amount,
      name,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("Something went wrong processing your payment.");
    }
    return res.json();
  });
};
