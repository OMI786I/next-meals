import connectMongoDB from "@/app/lib/mongodb";
import ProductModel from "../../../../../models/ProductModel";
import { NextResponse } from "next/server";

// This is the handler for dynamic routes
export async function GET(request, { params }) {
  // Extract the 'slug' parameter from the route
  const { slug } = params;

  // Connect to MongoDB
  await connectMongoDB();

  // Find the product with the matching slug
  const product = await ProductModel.findOne({ slug });

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  // Return the found product
  return NextResponse.json(product);
}
