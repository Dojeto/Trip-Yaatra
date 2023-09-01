import { NextResponse } from "next/server";

export const GET = (req) => {
  return NextResponse.json({ msg: 'Backend Is Working 💥' }, { status: 200 })
};