import { customInitApp } from "@/utils/db";
import { getFirestore } from "firebase-admin/firestore";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";

type Params = { params: { id: string } };

customInitApp();
const db = getFirestore();

export async function PUT(req: Request, { params }: Params) {
  try {
    const session = await getServerSession(authOptions);
    const { id } = params;
    const body = await req.json();

    const { text } = body;

    await db
      .collection("userDocs")
      .doc(session?.user?.email)
      .collection("docs")
      .doc(id)
      .set({ text }, { merge: true });

    return new Response(JSON.stringify("ok"), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
