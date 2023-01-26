import { NextRequest, NextResponse } from "next/server";

export const config = {
  // cuando compile, lo use como una function 
  //y no como una api normal
  runtime: "edge"
};


// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextRequest) => {
  return NextResponse.json({
    message: `Hello world ${req.url}`,
  });
};