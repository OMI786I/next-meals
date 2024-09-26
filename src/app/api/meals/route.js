import connectMongoDB from "@/app/lib/mongodb";
import ProductModel from "../../../../models/ProductModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, slug, image, summary, instructions, creator, creator_email } =
    await request.json();
  await connectMongoDB();
  const newProduct = await ProductModel.create({
    title,
    slug,
    image,
    summary,
    instructions,
    creator,
    creator_email,
  });
  return NextResponse.json(
    { message: "Product Created", newProduct },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const meals = await ProductModel.find();
  return NextResponse.json({ meals });
}
