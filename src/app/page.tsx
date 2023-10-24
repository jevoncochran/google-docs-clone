"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Dialog, Button } from "@/lib/materialTailwind";
import axios from "axios";
import db from "@/firebase/config";
import { collection, onSnapshot, query } from "firebase/firestore";
import DocumentRow from "@/components/DocumentRow";
import Header from "@/components/Header";
import { Document } from "@/types";

export default function Home() {
  const { data: session } = useSession();

  const [showModal, setShowModal] = useState(false);
  const [newDocumentTitle, setNewDocumentTitle] = useState("");
  const [documents, setDocuments] = useState<Document[]>([]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const createDcoument = () => {
    axios
      .post("/api/docs", { fileName: newDocumentTitle })
      .then((res) => console.log(res.data));

    setNewDocumentTitle("");
    toggleModal();
  };

  const newDocModal = (
    // <Dialog
    //   size="xs"
    //   open={showModal}
    //   handler={toggleModal}
    //   className="bg-white shadow-none h-[200px] p-5 flex flex-col justify-between"
    // >
    //   <input
    //     type="text"
    //     value={newDocumentTitle}
    //     onChange={(e) => setNewDocumentTitle(e.target.value)}
    //     placeholder="Enter name of document..."
    //     onKeyDown={(e) => e.key === "Enter" && createDcoument()}
    //     className="outline-none w-full"
    //   />
    //   <div>
    //     <Button
    //       onClick={toggleModal}
    //       className="bg-transparent shadow-none hover:shadow-none text-blue-600"
    //     >
    //       CANCEL
    //     </Button>
    //     <Button color="blue" className="ml-4" onClick={createDcoument}>
    //       CREATE
    //     </Button>
    //   </div>
    // </Dialog>
    <div>hello</div>
  );

  useEffect(() => {
    const q = query(collection(db, `userDocs/${session?.user?.email}/docs`));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let docArr: Document[] = [];

      querySnapshot.forEach((doc: any) => {
        docArr.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(docArr);
    });

    return () => unsubscribe();
  }, [session?.user?.email]);

  return (
    <div>
      {/* <Header /> */}
      {newDocModal}
      <section className="bg-[#F0F3F4] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="py-6 flex justify-between items-center">
            <h2 className="text-gray-700 text-lg">Create a new document</h2>
            <BsThreeDotsVertical size="1.2em" />
          </div>
          <div>
            <Image
              src={
                "https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png"
              }
              alt="new Google Jock"
              height={150}
              width={150}
              onClick={toggleModal}
              className="border-2 rounded-md cursor-pointer hover:border hover:border-blue-500"
            />
            <p className="mt-2 font-semibold text-sm text-gray-700">Blank</p>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-3xl mx-auto py-8">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th>Previous 30 Days</th>
                <th>Owned by anyone</th>
                <th>Last opened by me</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <DocumentRow key={doc.id} doc={doc} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
