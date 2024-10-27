"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CourseCardProps {
  courseId: string;
  image: string;
  courseName: string;
  description: string;
  category: string;
  date: string;
  initialLikes: number;
  facultyName: string;
}

export default function HomePage() {
  const [facultyCourses, setFacultyCourses] = useState<{
    [facultyName: string]: CourseCardProps[];
  }>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/api/courses");
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();

        // Group courses by facultyName
        const groupedByFaculty = data.reduce(
          (
            acc: { [facultyName: string]: CourseCardProps[] },
            course: CourseCardProps
          ) => {
            const facultyName = course.facultyName;

            if (!acc[facultyName]) {
              acc[facultyName] = [];
            }
            acc[facultyName].push(course);
            return acc;
          },
          {}
        );

        console.log("groupedByFaculty", groupedByFaculty);
        setFacultyCourses(groupedByFaculty);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError("Could not load courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-white max-w-[86rem]">
      <div className="max-w-[100vw] mx-auto px-8 sm:px-12 lg:px-8 md:max-w-[90rem]">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-2 sm:py-4 lg:py-4"
        >
          <div className="max-w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              เลือกรายวิชาเสรีที่คุณสนใจ
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-500">
              เริ่มต้นการเรียนรู้ของคุณที่นี่
              ค้นพบรายวิชาเสรีที่น่าสนใจจากคณะชั้นนำ
            </p>
          </div>
        </motion.section>

        {/* Loading/Error State */}
        {loading && (
          <p className="text-gray-500 text-center">Loading courses...</p>
        )}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Course Sections */}
        {Object.entries(facultyCourses).map(([facultyName, courses]) => (
          <section key={facultyName} className="py-8 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-medium text-gray-900">
                  {facultyName}
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  ดูรายวิชาเสรีทั้งหมดจาก {facultyName}
                </p>
              </div>

              <Button
                variant="ghost"
                className="mt-4 sm:mt-0 group hover:bg-gray-50"
                asChild
              >
                <Link href={`/faculty/${facultyName}/courses`}>
                  <span>ดูทั้งหมด</span>
                  <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {courses.map((course) => (
                <Card
                  key={course.courseId}
                  className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
                >
                  <CardContent className="p-0">
                    <div className="relative h-56 sm:h-64 overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.courseName}
                        fill
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <CardHeader className="p-0 space-y-1">
                        <CardTitle className="line-clamp-2 text-xl font-bold tracking-tight transition-colors group-hover:text-blue-600">
                          {course.courseName}
                        </CardTitle>
                        <CardDescription className="line-clamp-2 text-sm text-gray-600">
                          {course.description}
                        </CardDescription>
                      </CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <Badge
                            variant="secondary"
                            className="rounded-full mr-2 text-xs"
                          >
                            {course.courseId}
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="rounded-full text-xs"
                          >
                            {course.category}
                          </Badge>
                        </div>
                        <time className="text-sm text-gray-500">
                          {course.date}
                        </time>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="text-sm text-gray-500 flex items-center">
                          <Heart className="mr-1 text-gray-400" />
                          {course.initialLikes} Hearts
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
