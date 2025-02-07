import { NextResponse } from "next/server";
import { unsplash } from "@/app/lib/unsplash";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query") || "nature";

  try {
    const result = await unsplash.search.getPhotos({
      query,
      perPage: 10,
    });

    if (result.errors) {
      return NextResponse.json({ error: result.errors }, { status: 400});
    }

    return NextResponse.json(result.response.results);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar imagens" }, { status: 500 });
  }
}