"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import Login from "@/components/Login";
import DocIcon from "@/components/DocIcon";
import { Dialog, Button } from "@/lib/materialTailwind";
import axios from "axios";

export default function Home() {
  const { data: session } = useSession();

  const [showModal, setShowModal] = useState(false);
  const [newDocumentTitle, setNewDocumentTitle] = useState("");

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
    <Dialog
      size="xs"
      open={showModal}
      handler={toggleModal}
      className="bg-white shadow-none h-[200px] p-5 flex flex-col justify-between"
    >
      <input
        type="text"
        value={newDocumentTitle}
        onChange={(e) => setNewDocumentTitle(e.target.value)}
        placeholder="Enter name of document..."
        onKeyDown={(e) => e.key === "Enter" && createDcoument()}
        className="outline-none w-full"
      />
      <div>
        <Button
          onClick={toggleModal}
          className="bg-transparent shadow-none hover:shadow-none text-blue-600"
        >
          CANCEL
        </Button>
        <Button color="blue" className="ml-4" onClick={createDcoument}>
          CREATE
        </Button>
      </div>
    </Dialog>
  );

  if (!session) {
    return <Login />;
  }

  return (
    <div>
      {newDocModal}
      <section className="bg-[#F0F3F4] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="py-6 flex justify-between items-center">
            <h2 className="text-gray-700 text-lg">Start a new document</h2>
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
              <tr>
                <td>
                  <div className="flex items-center">
                    <DocIcon additionalClasses="mr-4" />
                    Jevon info
                  </div>
                </td>
                <td>me</td>
                <td>Sept 29, 2023</td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center">
                    <DocIcon additionalClasses="mr-4" />
                    Zenfeat - Full Stack Developer - Sep 2023
                  </div>
                </td>
                <td>me</td>
                <td>Sept 16, 2023</td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center">
                    <DocIcon additionalClasses="mr-4" />
                    eSumry - Full Stack Developer - Sep 2023
                  </div>
                </td>
                <td>me</td>
                <td>Sept 16, 2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
