"use server"
import prisma from "@/lib/prisma"
export const AddView = async () => {
  await prisma.view.create({
    data: {}
  })
  return
}