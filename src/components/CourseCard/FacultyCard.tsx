// import React from "react";
// import { motion } from "framer-motion";
// import { Card } from "@/components/ui/card";
// import { ChevronRight } from "lucide-react";
// import Link from "next/link";

// interface Faculty {
//   name: string;
//   nameEn: string;
//   id: string;
//   icon: React.ComponentType<{ className?: string }>;
//   accent: string;
//   borderAccent: string;
//   description: string;
// }

// const FacultyCard: React.FC<{ faculty: Faculty }> = ({ faculty }) => {
//   const IconComponent = faculty.icon;

//   return (
//     <Link
//       href={`/faculty/${faculty.id}`}
//       aria-label={`ดูรายละเอียดของ ${faculty.name}`}
//     >
//       <motion.div
//         whileHover={{ scale: 1.02 }}
//         whileTap={{ scale: 0.98 }}
//       >
//         <Card className="group relative overflow-hidden border border-gray-100 hover:border-transparent transition-all duration-300 cursor-pointer">
//           <motion.div
//             className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${faculty.accent} transition-opacity duration-300`}
//             initial={false}
//           />
//           <div className="relative p-4 sm:p-5 flex flex-col items-start gap-3">
//             <div
//               className={`p-2.5 rounded-lg bg-white shadow-sm ${faculty.borderAccent} transition-colors duration-300 shrink-0`}
//             >
//               <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
//             </div>
//             <div className="space-y-1">
//               <h2 className="text-lg sm:text-xl font-medium text-gray-900">
//                 {faculty.name}
//               </h2>
//               <p className="text-sm text-gray-500">{faculty.nameEn}</p>
//               <p className="text-sm text-gray-600 line-clamp-2">
//                 {faculty.description}
//               </p>
//             </div>
//             <ChevronRight
//               className="hidden md:block absolute right-4 sm:right-5 top-4 sm:top-5 w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform duration-300"
//             />
//           </div>
//         </Card>
//       </motion.div>
//     </Link>
//   );
// };

// export default FacultyCard;

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface Faculty {
  name: string;
  nameEn: string;
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  borderAccent: string;
  description: string;
}

const FacultyCard: React.FC<{ faculty: Faculty }> = ({ faculty }) => {
  const IconComponent = faculty.icon;

  return (
    <Link
      href={`/faculty/${faculty.id}`}
      aria-label={`ดูรายละเอียดของ ${faculty.name}`}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="h-full "
      >
        <Card className="group relative overflow-hidden border border-gray-100 hover:border-transparent transition-all duration-300 cursor-pointer h-full">
          <motion.div
            className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${faculty.accent} transition-opacity duration-300`}
            initial={false}
          />
          <div className="relative p-4 sm:p-5 flex flex-col items-start gap-3 h-full">
            <div
              className={`p-2.5 rounded-lg bg-white shadow-sm ${faculty.borderAccent} transition-colors duration-300 shrink-0`}
            >
              <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="space-y-1 flex-grow">
              <h2 className="text-lg sm:text-xl font-medium text-gray-900">
                {faculty.name}
              </h2>
              <p className="text-sm text-gray-500">{faculty.nameEn}</p>
              <p className="text-sm text-gray-600 line-clamp-2">
                {faculty.description}
              </p>
            </div>
            <ChevronRight className="hidden md:block absolute right-4 sm:right-5 top-4 sm:top-5 w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </Card>
      </motion.div>
    </Link>
  );
};

export default FacultyCard;
