import type { User } from "@prisma/client";
import { db } from "../../lib/db";

export async function loader() {
  try {
    const [users, totalCount] = await Promise.all([
      db.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      }),
      db.user.count(),
    ]);

    return Response.json({
      success: true,
      users: users as User[],
      totalCount,
      message: "All users returned",
    });
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      {
        success: false,
        error: "Something went wrong",
      },
      { status: 500 }
    );
  }
}