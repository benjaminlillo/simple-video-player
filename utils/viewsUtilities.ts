"use server"
import prisma from "@/lib/prisma"
export const addView = async () => {
  await prisma.view.create({
    data: {}
  })
  return
}

export const getViewsCount = async () => {
  const views = await prisma.view.count()
  return views
}