export async function POST() {
  return new Response(`${+Date.now()}`);
}
