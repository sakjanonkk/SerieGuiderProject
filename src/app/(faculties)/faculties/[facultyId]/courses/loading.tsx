// 'use client';
// import React, { useEffect, useState } from 'react';
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { CourseInfo } from '@/types/courseType';

// interface LoadingProps {
//   facultyId: string;
// }

// export function Loading({ facultyId }: LoadingProps) {
//   const [categories, setCategories] = useState<string[]>(['all']);
//   const [years, setYears] = useState<string[]>(['all']);
//   const [courses, setCourses] = useState<CourseInfo[]>([]);

//   useEffect(() => {
//     async function fetchCourses() {
//       try {
//         // แทนที่ด้วย API ของคุณเพื่อดึงข้อมูล courses
//         const response = await fetch(`/api/courses?facultyId=${facultyId}`);
//         const data: CourseInfo[] = await response.json();
//         setCourses(data);

//         const uniqueCategories = ['all', ...new Set(data.map(course => course.category))];
//         const uniqueYears = ['all', ...new Set(data.map(course => course.date))];
//         setCategories(uniqueCategories);
//         setYears(uniqueYears);
//       } catch (error) {
//         console.error('Failed to fetch courses', error);
//       }
//     }
//     fetchCourses();
//   }, [facultyId]);

//   return (
//     <div className="min-h-screen py-8">
//       <div className="max-w-[90rem] mx-auto px-4">
//         <Card className="mb-8 animate-pulse">
//           <CardHeader>
//             <div className="h-8 bg-gray-200 rounded w-1/2 mb-4" />
//             <div className="h-4 bg-gray-200 rounded w-1/4" />
//           </CardHeader>
//         </Card>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {[...Array(8)].map((_, i) => (
//             <Card key={i}>
//               <CardContent className="p-4">
//                 <div className="h-48 bg-gray-200 rounded-md mb-4" />
//                 <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
//                 <div className="h-4 bg-gray-200 rounded w-1/2" />
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Loading;


'use client';

import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from 'react';
import { CourseInfo } from '@/types/courseType';
import { Spinner } from '@/components/ui/spinner';
import { FACULTY_MAP } from '@/constants/faculty';

interface LoadingProps {
  facultyId: string;
  faculty: { name: string; };
  initialCourses: CourseInfo[];
}

export function Loading({ facultyId, faculty, initialCourses }: LoadingProps) {
  const [categories, setCategories] = useState<string[]>(['all']);
  const [years, setYears] = useState<string[]>(['all']);
  const [courses, setCourses] = useState<CourseInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchCourses() {
      setIsLoading(true);
      try {
        let data: CourseInfo[] = [];

        if (initialCourses.length > 0) {
          data = initialCourses;
        } else {
          // Uncomment this section to fetch from API
          // const response = await fetch(`/api/courses?facultyId=${facultyId}`);
          // data = await response.json();
        }

        setCourses(data);
        const uniqueCategories = ['all', ...new Set(data.map(course => course.category))];
        const uniqueYears = ['all', ...new Set(data.map(course => course.date))];
        setCategories(uniqueCategories);
        setYears(uniqueYears);
      } catch (error) {
        console.error('Failed to fetch courses', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCourses();
  }, [facultyId, initialCourses]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center py-8">
        <Spinner />
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center py-8">
        <p className="text-center text-gray-500">
          ขณะนี้ยังไม่มีวิชาเสรีจากคณะ {faculty ? faculty.name : 'ไม่ทราบชื่อคณะ'}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-[90rem] mx-auto px-4">
        <Card className="mb-8">
          <CardHeader>
            <h1 className="text-2xl font-bold">รายวิชาเสรีทั้งหมดจากคณะ {faculty.name}</h1>
          </CardHeader>
          <CardContent>
            {/* List of courses can be rendered here if needed */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Loading;