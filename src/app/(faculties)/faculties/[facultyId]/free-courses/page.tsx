import React from 'react';
import { notFound } from 'next/navigation';
import CourseCard from '@/components/CourseCard/CourseCard';
import { type CourseInfo } from '@/types/courseType';

// สร้าง type สำหรับ params
interface PageProps {
  params: {
    facultyId: string;
  };
}

const FACULTY_MAP = {
  education: {
    name: "คณะศึกษาศาสตร์",
    id: "ED"
  },
  engineering: {
    name: "คณะวิศวกรรมศาสตร์",
    id: "EN"
  }
} as const;

export default async function FacultyCoursesPage({ params }: PageProps) {
  const faculty = FACULTY_MAP[params.facultyId as keyof typeof FACULTY_MAP];
  
  if (!faculty) {
    notFound();
  }

  // TODO: Fetch courses for this faculty
  const courses: CourseInfo[] = []; // Replace with actual data fetching

  return (
    <div className="py-8 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          รายวิชาเสรีทั้งหมดจาก{faculty.name}
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.courseID} {...course} />
        ))}
      </div>

      {courses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">ไม่พบรายวิชาเสรีในขณะนี้</p>
        </div>
      )}
    </div>
  );
}