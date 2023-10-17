import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <section className="bg-[#F0F3F4] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="py-6 flex justify-between items-center">
            <h2 className="text-gray-700 text-lg">Start a start document</h2>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#2096F3"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#fff"
                      className="w-10 h-10 mr-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                    Jevon info
                  </div>
                </td>
                <td>me</td>
                <td>Sept 29, 2023</td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#2096F3"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#fff"
                      className="w-10 h-10 mr-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                    Zenfeat - Full Stack Developer - Sep 2023
                  </div>
                </td>
                <td>me</td>
                <td>Sept 16, 2023</td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#2096F3"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#fff"
                      className="w-10 h-10 mr-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
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
