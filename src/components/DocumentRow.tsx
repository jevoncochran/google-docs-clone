import React from "react";
import DocIcon from "./DocIcon";
import { useRouter } from "next/navigation";

interface DocumentRowProps {
  doc: { fileName: string; id: string; timestamp: any };
}

const DocumentRow = ({ doc }: DocumentRowProps) => {
  const router = useRouter();

  return (
    <tr
      onClick={() => router.push(`/docs/${doc.id}`)}
      className="cursor-pointer"
    >
      <td>
        <div className="flex items-center">
          <DocIcon additionalClasses="mr-4" />
          {doc.fileName}
        </div>
      </td>
      <td>me</td>
      {/* TODO: This is displaying date created instead of date opened */}
      {/* Also, we want to format this as text data not numeral date with slashes */}
      <td>{doc.timestamp.toDate().toLocaleDateString()}</td>
    </tr>
  );
};

export default DocumentRow;
