const { json } = require("@remix-run/node");

export async function loader({ request }) {
  return json({ success: true }, 200);
}
