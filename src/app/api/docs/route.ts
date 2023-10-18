import { customInitApp } from "@/utils/db";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { serverTimestamp } from "firebase/firestore";

customInitApp();
const db = getFirestore();

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    const body = await req.json();

    const { fileName } = body;

    console.log(fileName);
    console.log(session?.user?.email);
    console.log(serverTimestamp());

    const userDoc = await db
      .collection("userDocs")
      .doc(session?.user?.email)
      .collection("docs")
      .add({
        fileName,
        timestamp: Timestamp.now(),
      });

    return new Response(JSON.stringify(userDoc), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
