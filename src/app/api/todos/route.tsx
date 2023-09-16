import prisma from "../../lib/db";
import { NextResponse } from "next/server";



export async function PUT(req:Request) {

  const data = await req.json();
  const todo = await prisma.todos.create({
    data: {
      title: data.title,
      description: '',
      created_at: new Date(),
    },
  }); 
  
}
