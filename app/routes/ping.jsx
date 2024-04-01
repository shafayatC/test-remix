const { json } = require("@remix-run/node");

export async function action({ request }) {
  return json({ success: true }, 200);
}
