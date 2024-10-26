import React from 'react';
import Link from 'next/link';
import { ChevronRight } from "lucide-react";
import CourseCarousel from "@/components/CourseCarousel/CourseCarousel";
import { type CourseInfo} from '@/types/courseType';

interface FacultySectionProps {
  facultyName: string;
  facultyNameEn: string; // สำหรับใช้ใน URL
  courses: CourseInfo[];
}

const FacultyHeader = ({ facultyName, facultyNameEn, courses }: FacultySectionProps) => {
  return (
    <div className="pb-10">
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
          {facultyName}
        </h2>
        <Link
          href={`/faculties/${facultyNameEn}/free-courses`}
          className="group text-primary hover:underline text-sm sm:text-base md:text-lg lg:text-xl 
                     flex items-center space-x-1 mt-2 sm:mt-0"
        >
          <span>ดูรายวิชาเสรีทั้งหมดจาก{facultyName}</span>
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 
                                  group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      <CourseCarousel courses={courses} />
    </div>
  );
};

export default FacultyHeader;