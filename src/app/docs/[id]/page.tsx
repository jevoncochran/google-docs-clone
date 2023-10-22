"use client";

import {
  useState,
  useEffect,
  ChangeEvent,
  useCallback,
  useRef,
  useContext,
} from "react";
import Login from "@/components/Login";
import { signOut, useSession } from "next-auth/react";
import DocIcon from "@/components/DocIcon";
import { useRouter } from "next/navigation";
import { doc, onSnapshot } from "firebase/firestore";
import db from "@/firebase/config";
import { Button } from "@/lib/materialTailwind";
import { CiLock as LockIcon } from "react-icons/ci";
import Image from "next/image";
import TextEditor from "@/components/TextEditor";
import debounce from "lodash.debounce";
import axios from "axios";
import { UiContext } from "@/context/UiContext";

const DocPage = ({ params }: { params: { id: string } }) => {
  const { data: session } = useSession();

  const { id } = params;

  const router = useRouter();

  const { toggleAccountMenu } = useContext(UiContext);

  const [document, setDocument] = useState(null);
  const [title, setTitle] = useState(document?.fileName);

  let titleRef = useRef(null);

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);

    deboundedUpdateTitle(e.target.value);
  };

  const deboundedUpdateTitle = useCallback(
    debounce((title) => {
      axios.put(`/api/docs/${id}`, { fileName: title });
    }, 500),
    []
  );

  useEffect(() => {
    const docRef = doc(db, `userDocs/${session?.user?.email}/docs`, id);
    const unsub = onSnapshot(docRef, (doc) => {
      setDocument({ ...doc.data(), id });
      return () => unsub();
    });
  }, [session?.user?.email]);

  return (
    <div>
      <header className="flex justify-between items-center p-3 pb-1 h-[64px]">
        <div onClick={() => router.push("/")} className="cursor-pointer">
          <DocIcon />
        </div>

        <div className="flex-grow px-2">
          <div>
            <input
              type="text"
              value={title ?? document?.fileName}
              ref={titleRef}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  titleRef.current?.blur();
                }
              }}
              onChange={(e) => onTitleChange(e)}
              className=" w-fit p-1 border border-white hover:border-gray-800 rounded-md box-border"
            />
          </div>
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
          onClick={toggleAccountMenu}
          className="ml-5 rounded-full cursor-pointer"
        />
      </header>
      {document && <TextEditor docId={id} text={document?.text} />}
    </div>
  );
};

export default DocPage;
