export async function GET(request: Request) {
    return new Response(JSON.stringify({error: "You need to specify a district."}), {status: 400})
}
