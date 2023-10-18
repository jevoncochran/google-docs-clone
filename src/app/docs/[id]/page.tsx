"use client";

import { useState, useEffect } from "react";
import Login from "@/components/Login";
import { useSession } from "next-auth/react";
import DocIcon from "@/components/DocIcon";
import { useRouter } from "next/navigation";
import { getDoc, doc, onSnapshot } from "firebase/firestore";
import db from "@/firebase/config";
import { Button } from "@/lib/materialTailwind";
import { CiLock as LockIcon } from "react-icons/ci";
import Image from "next/image";

const DocPage = ({ params }: { params: { id: string } }) => {
  const { data: session } = useSession();

  const { id } = params;

  const router = useRouter();

  const [document, setDocument] = useState(null);

  useEffect(() => {
    const docRef = doc(db, `userDocs/${session?.user?.email}/docs`, id);
    const unsub = onSnapshot(docRef, (doc) => {
      setDocument({ ...doc.data(), id });
      return () => unsub();
    });
  }, [session?.user?.email]);

  useEffect(() => {
    console.log(document);
  }, [document]);

  if (!session) {
    return <Login />;
  }
  
  return (
    <div>
      <header className="flex justify-between items-center p-3 pb-1">
        <div onClick={() => router.push("/")} className="cursor-pointer">
          <DocIcon />
        </div>

        <div className="flex-grow px-2">
          <h2>{document?.fileName}</h2>
          <div className="flex items-center text-sm space-x-1">
            <p className="option">File</p>
            <p className="option">Edit</p>
            <p className="option">View</p>
            <p className="option">Insert</p>
            <p className="option">Format</p>
            <p className="option">Tools</p>
            <p className="option">Extensions</p>
            <p className="option">Help</p>
          </div>
        </div>

        <Button className="flex items-center justify-between bg-[#C1E7FE] hover:bg-[#B1D7EE] text-black rounded-full w-[115px] shadow-none cursor-pointer">
          <LockIcon size="1.2rem" />
          Share
        </Button>

        <Image
          src={session.user?.image!}
          alt={session.user?.name!}
          height={50}
          width={50}
          className="ml-5 rounded-full"
        />
      </header>
    </div>
  );
};

export default DocPage;
