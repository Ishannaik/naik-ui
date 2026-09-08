import { NextResponse } from "next/server";
import { registryIndex } from "@/lib/registry";

export async function GET() {
  return NextResponse.json(registryIndex(), {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=60",
    },
  });
}
