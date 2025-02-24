


// "use client";

// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
// import moment from "moment";

// const parseDate = (dateString) => {
//   const [day, month, year] = dateString.split("/");
//   return new Date(`${year}-${month}-${day}`);
// };

// const History = ({ history }) => {
//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">History</h2>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>TEMPLATE</TableHead>
//             <TableHead>AI RESP</TableHead>
//             <TableHead>DATE</TableHead>
//             <TableHead>WORDS</TableHead>
//             <TableHead>COPY</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {history.length > 0 ? (
//             history.map((item) => (
//               <TableRow key={item.id}>
//                 <TableCell>{item.templateSlug}</TableCell>
//                 <TableCell>
//                   {item.createdAt ? moment(parseDate(item.createdAt)).format("MM/DD/YYYY") : "N/A"}
//                 </TableCell>
//                 <TableCell>
//                   {item.createdAt ? parseDate(item.createdAt).toLocaleDateString() : "N/A"}
//                 </TableCell>
//                 <TableCell>{item.aiResponse.split(" ").length}</TableCell>
//                 <TableCell>
//                   <Button onClick={() => copyToClipboard(item.aiResponse)} variant="outline">
//                     Copy
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))
//           ) : (
//             <TableRow>
//               <TableCell colSpan="5" className="text-center p-4">No history found</TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default History;

"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import moment from "moment";

const parseDate = (dateString) => {
  const [day, month, year] = dateString.split("/");
  return new Date(`${year}-${month}-${day}`);
};

const History = ({ history }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">History</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>TEMPLATE</TableHead>
            <TableHead>AI RESPONSE</TableHead>
            <TableHead>DATE</TableHead>
            <TableHead>WORDS</TableHead>
            <TableHead>COPY</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {history.length > 0 ? (
            history.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.templateSlug}</TableCell>
                
                {/* ✅ AI Response (Limited to 100 chars for better table layout) */}
                <TableCell className="max-w-[300px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {item.aiResponse ? item.aiResponse.substring(0, 100) + "..." : "No Response"}
                </TableCell>
                
                {/* ✅ Proper Date Formatting */}
                <TableCell>
                  {item.createdAt ? moment(parseDate(item.createdAt)).format("MM/DD/YYYY") : "N/A"}
                </TableCell>

                {/* ✅ Word Count */}
                <TableCell>{item.aiResponse ? item.aiResponse.split(" ").length : 0}</TableCell>

                {/* ✅ Copy Button */}
                <TableCell>
                  <Button onClick={() => copyToClipboard(item.aiResponse)} variant="outline">
                    Copy
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="5" className="text-center p-4">No history found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default History;
