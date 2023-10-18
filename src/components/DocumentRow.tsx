import React from "react";
import DocIcon from "./DocIcon";

interface DocumentRowProps {
  doc: { fileName: string; id: string; timestamp: any };
}

const DocumentRow = ({ doc }: DocumentRowProps) => {
  return (
    <tr>
      <td>
        <div className="flex items-center">
          <DocIcon additionalClasses="mr-4" />
          {doc.fileName}
        </div>
      </td>
      <td>me</td>
      <td>Sept 29, 2023</td>
    </tr>
  );
};

export default DocumentRow;
