// 'use client';

// import React, { useState, useCallback, useEffect } from 'react';
// import { X } from 'lucide-react';
// import { CourseInfo } from '@/types/courseType';
// import { FACULTY_MAP } from '@/constants/faculty';

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { notFound } from 'next/navigation';
// import CourseCard from '@/components/CourseCard/CourseCard';
// import { Input } from "@/components/ui/input";
// import { 
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Search, SlidersHorizontal, BookOpen } from 'lucide-react';

// interface CoursesContentProps {
//   facultyId: string;
//   initialCourses: CourseInfo[];
// }

// export function CoursesContent({ facultyId, initialCourses }: CoursesContentProps) {
//   const [courses] = useState(initialCourses);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState<string>('all');
//   const [selectedYear, setSelectedYear] = useState<string>('all');
//   const [categories, setCategories] = useState<string[]>(['all']);
//   const [years, setYears] = useState<string[]>(['all']);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const faculty = FACULTY_MAP[facultyId as keyof typeof FACULTY_MAP];

//   useEffect(() => {
//     const uniqueCategories = ['all', ...new Set(initialCourses.map(course => course.category))];
//     const uniqueYears = ['all', ...new Set(initialCourses.map(course => course.date))];
//     setCategories(uniqueCategories);
//     setYears(uniqueYears);
//   }, [initialCourses]);

//   const handleSearch = useCallback((value: string) => {
//     setIsLoading(true);
//     try {
//       setSearchQuery(value);
//     } catch (err) {
//       setError('เกิดข้อผิดพลาดในการค้นหา');
//     } finally {
//       setIsLoading(false);
//     }
//   }, []);

//   const clearFilter = useCallback((type: 'search' | 'category' | 'year' | 'all') => {
//     switch (type) {
//       case 'search':
//         setSearchQuery('');
//         break;
//       case 'category':
//         setSelectedCategory('all');
//         break;
//       case 'year':
//         setSelectedYear('all');
//         break;
//       case 'all':
//         setSearchQuery('');
//         setSelectedCategory('all');
//         setSelectedYear('all');
//         break;
//     }
//   }, []);

//   const filteredCourses = courses.filter(course => {
//     const matchesSearch = searchQuery === '' || 
//       course.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       course.courseID.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       course.description.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
//     const matchesYear = selectedYear === 'all' || course.date === selectedYear;
    
//     return matchesSearch && matchesCategory && matchesYear;
//   });

//   // แสดง error ถ้ามี
//   if (error) {
//     return (
//      <h1>gi</h1>
//     );
//   }

//   return (
//     <div className="min-h-screen py-8">
//       <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <Card className="mb-8">
//           <CardHeader>
//             <div className="flex items-center gap-3 mb-2">
//               <BookOpen className="w-8 h-8 text-primary" />
//               <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
//                 รายวิชาเสรีจาก {faculty.name}
//               </CardTitle>
//             </div>
//             <div className="text-gray-500">
//             {filteredCourses.length > 0 ? (
//                   `พบทั้งหมด ${filteredCourses.length} รายวิชา`
//                 ) : (
//                   `ขณะนี้ยังไม่มีวิชาเสรีจากคณะ${faculty.name}`
//                 )}
              
//             </div>
//           </CardHeader>
          
//           <CardContent>
//             {/* Search and Filters Section */}
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
//               <div className="md:col-span-5 relative">
//                 <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                 <Input
//                   placeholder="ค้นหารายวิชา, รหัสวิชา..."
//                   className="pl-9"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//               </div>
              
//               <div className="md:col-span-3">
//                 <Select
//                   value={selectedCategory}
//                   onValueChange={setSelectedCategory}
//                 >
//                   <SelectTrigger>
//                     <SelectValue placeholder="หมวดหมู่" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {categories.map((category) => (
//                       <SelectItem key={category} value={category}>
//                         {category === 'all' ? 'ทุกหมวดหมู่' : category}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
              
//               <div className="md:col-span-3">
//                 <Select
//                   value={selectedYear}
//                   onValueChange={setSelectedYear}
//                 >
//                   <SelectTrigger>
//                     <SelectValue placeholder="ปีการศึกษา" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {years.map((year) => (
//                       <SelectItem key={year} value={year}>
//                         {year === 'all' ? 'ทุกปีการศึกษา' : year}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
              
//               <div className="md:col-span-1">
//                 <Button
//                   variant="outline"
//                   className="w-full"
//                   onClick={() => clearFilter('all')}
//                 >
//                   <SlidersHorizontal className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>

//             {/* Active Filters */}
//             {(selectedCategory !== 'all' || selectedYear !== 'all' || searchQuery) && (
//               <div className="flex flex-wrap gap-2 mt-4">
//                 {selectedCategory !== 'all' && (
//                   <Badge variant="secondary">
//                     หมวดหมู่: {selectedCategory}
//                   </Badge>
//                 )}
//                 {selectedYear !== 'all' && (
//                   <Badge variant="secondary">
//                     ปีการศึกษา: {selectedYear}
//                   </Badge>
//                 )}
//                 {searchQuery && (
//                   <Badge variant="secondary">
//                     ค้นหา: {searchQuery}
//                   </Badge>
//                 )}
//               </div>
//             )}
//           </CardContent>
//         </Card>

//         {/* Courses Grid */}
//         {filteredCourses.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredCourses.map((course) => (
//               <CourseCard key={course.courseID} {...course} />
//             ))}
//           </div>
//         ) : (
//           <Card>
//             <CardContent className="flex flex-col items-center justify-center py-12">
//               <BookOpen className="w-12 h-12 text-gray-400 mb-4" />
//               <p className="text-gray-500 text-center mb-2">ไม่พบรายวิชาที่ตรงกับเงื่อนไขการค้นหา</p>
//               <Button
//                 variant="outline"
//                 onClick={() => clearFilter('all')}
//               >
//                 ล้างตัวกรองทั้งหมด
//               </Button>
//             </CardContent>
//           </Card>
//         )}
//       </div>
//     </div>
//   );
// }


// 'use client';

// import React, { useState, useCallback, useEffect } from 'react';
// import { CircleX } from 'lucide-react';
// import { CourseInfo } from '@/types/courseType';
// import { FACULTY_MAP } from '@/constants/faculty';

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { notFound } from 'next/navigation';
// import CourseCard from '@/components/CourseCard/CourseCard';
// import { Input } from "@/components/ui/input";
// import { 
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Search, SlidersHorizontal, BookOpen } from 'lucide-react';

// interface CoursesContentProps {
//   facultyId: string;
//   initialCourses: CourseInfo[];
// }

// export function CoursesContent({ facultyId, initialCourses }: CoursesContentProps) {
//   const [courses] = useState(initialCourses);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState<string>('all');
//   const [selectedYear, setSelectedYear] = useState<string>('all');
//   const [categories, setCategories] = useState<string[]>(['all']);
//   const [years, setYears] = useState<string[]>(['all']);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const faculty = FACULTY_MAP[facultyId as keyof typeof FACULTY_MAP];

//   useEffect(() => {
//     const uniqueCategories = ['all', ...new Set(initialCourses.map(course => course.category))];
//     const uniqueYears = ['all', ...new Set(initialCourses.map(course => course.date))];
//     setCategories(uniqueCategories);
//     setYears(uniqueYears);
//   }, [initialCourses]);

//   const handleSearch = useCallback((value: string) => {
//     setIsLoading(true);
//     try {
//       setSearchQuery(value);
//     } catch (err) {
//       setError('เกิดข้อผิดพลาดในการค้นหา');
//     } finally {
//       setIsLoading(false);
//     }
//   }, []);

//   const clearFilter = useCallback((type: 'search' | 'category' | 'year' | 'all') => {
//     switch (type) {
//       case 'search':
//         setSearchQuery('');
//         break;
//       case 'category':
//         setSelectedCategory('all');
//         break;
//       case 'year':
//         setSelectedYear('all');
//         break;
//       case 'all':
//         setSearchQuery('');
//         setSelectedCategory('all');
//         setSelectedYear('all');
//         break;
//     }
//   }, []);

//   const filteredCourses = courses.filter(course => {
//     const matchesSearch = searchQuery === '' || 
//       course.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       course.courseID.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       course.description.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
//     const matchesYear = selectedYear === 'all' || course.date === selectedYear;
    
//     return matchesSearch && matchesCategory && matchesYear;
//   });

//   if (error) {
//     return <h1>Error occurred</h1>;
//   }

//   return (
//     <div className="min-h-screen   sm:py-6 lg:py-6 max-w-[86rem] lg:w-[86rem]">
//       <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section with improved styling */}
//         <Card className="mb-8 shadow-md">
//           <CardHeader className="space-y-4">
//             <div className="flex items-center gap-3">
//               <BookOpen className="w-8 h-8 text-primary" />
//               <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
//                 รายวิชาเสรีจาก {faculty.name}
//               </CardTitle>
//             </div>
//             <div className="text-gray-500 text-lg">
//               {filteredCourses.length > 0 
//                 ? `พบทั้งหมด ${filteredCourses.length} รายวิชา`
//                 : `ขณะนี้ยังไม่มีวิชาเสรีจากคณะ${faculty.name}`
//               }
//             </div>
//           </CardHeader>
          
//           <CardContent className="space-y-6">
//             {/* Improved Search and Filters Section */}
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
//               <div className="md:col-span-5 relative">
//                 <Search className="absolute left-3 top-1/2 h-4 w-4 text-gray-400 transform -translate-y-1/2" />
//                 <Input
//                   placeholder="ค้นหารายวิชา, รหัสวิชา..."
//                   className="pl-9 h-10 focus:ring-2 focus:ring-primary/20"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//               </div>
              
//               <div className="md:col-span-3">
//                 <Select
//                   value={selectedCategory}
//                   onValueChange={setSelectedCategory}
//                 >
//                   <SelectTrigger className="h-10">
//                     <SelectValue placeholder="หมวดหมู่" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {categories.map((category) => (
//                       <SelectItem key={category} value={category}>
//                         {category === 'all' ? 'ทุกหมวดหมู่' : category}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
              
//               <div className="md:col-span-3">
//                 <Select
//                   value={selectedYear}
//                   onValueChange={setSelectedYear}
//                 >
//                   <SelectTrigger className="h-10">
//                     <SelectValue placeholder="ปีการศึกษา" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {years.map((year) => (
//                       <SelectItem key={year} value={year}>
//                         {year === 'all' ? 'ทุกปีการศึกษา' : year}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
              
//               <div className="md:col-span-1">
//                 <Button
//                   variant="outline"
//                   className="w-full h-10 hover:bg-gray-100"
//                   onClick={() => clearFilter('all')}
//                 >
//                   <SlidersHorizontal className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>

//             {/* Improved Active Filters */}
//             {(selectedCategory !== 'all' || selectedYear !== 'all' || searchQuery) && (
//               <div className="flex flex-wrap gap-2 pt-2">
//                 {selectedCategory !== 'all' && (
//                   <Badge variant="secondary" className="px-3 py-1 text-sm">
//                     หมวดหมู่: {selectedCategory}
//                     <button
//                       onClick={() => clearFilter('category')}
//                       className="ml-2 hover:text-primary"
//                     >
//                       <CircleX className="h-3 w-3 inline" />
//                     </button>
//                   </Badge>
//                 )}
//                 {selectedYear !== 'all' && (
//                   <Badge variant="secondary" className="px-3 py-1 text-sm">
//                     ปีการศึกษา: {selectedYear}
//                     <button
//                       onClick={() => clearFilter('year')}
//                       className="ml-2 hover:text-primary"
//                     >
//                       <CircleX className="h-3 w-3 inline" />
//                     </button>
//                   </Badge>
//                 )}
//                 {searchQuery && (
//                   <Badge variant="secondary" className="px-3 py-1 text-sm">
//                     ค้นหา: {searchQuery}
//                     <button
//                       onClick={() => clearFilter('search')}
//                       className="ml-2 hover:text-primary"
//                     >
//                       <CircleX className="h-3 w-3 inline" />
//                     </button>
//                   </Badge>
//                 )}
//               </div>
//             )}
//           </CardContent>
//         </Card>

//         {/* Improved Courses Grid with fixed aspect ratio and consistent spacing */}
//         {filteredCourses.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
//             {filteredCourses.map((course) => (
//               <div key={course.courseID} className="h-full">
//                 <CourseCard initialLikes={0} facultyName={''} {...course} />
//               </div>
//             ))}
//           </div>
//         ) : (
//           <Card className="shadow-md">
//             <CardContent className="flex flex-col items-center justify-center py-16">
//               <BookOpen className="w-16 h-16 text-gray-400 mb-6" />
//               <p className="text-gray-500 text-lg text-center mb-4">
//                 ไม่พบรายวิชาที่ตรงกับเงื่อนไขการค้นหา
//               </p>
//               <Button
//                 variant="outline"
//                 onClick={() => clearFilter('all')}
//                 className="hover:bg-gray-100"
//               >
//                 ล้างตัวกรองทั้งหมด
//               </Button>
//             </CardContent>
//           </Card>
//         )}
//       </div>
//     </div>
//   );
// }


'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { CircleX } from 'lucide-react';
import { CourseInfo } from '@/types/courseType';
import { FACULTY_MAP } from '@/constants/faculty';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CourseCard from '@/components/CourseCard/CourseCard';
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal, BookOpen } from 'lucide-react';

interface CoursesContentProps {
  facultyId: string;
  initialCourses: CourseInfo[];
}

export function CoursesContent({ facultyId, initialCourses }: CoursesContentProps) {
  const [courses, setCourses] = useState<CourseInfo[]>(initialCourses);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [categories, setCategories] = useState<string[]>(['all']);
  const [years, setYears] = useState<string[]>(['all']);
  const [error, setError] = useState<string | null>(null);

  const faculty = FACULTY_MAP[facultyId as keyof typeof FACULTY_MAP];

  useEffect(() => {
    const uniqueCategories = ['all', ...new Set(initialCourses.map(course => course.category))];
    const uniqueYears = ['all', ...new Set(initialCourses.map(course => course.date))];
    setCategories(uniqueCategories);
    setYears(uniqueYears);
    setCourses(initialCourses);
  }, [initialCourses]);

  const handleSearch = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  const clearFilter = useCallback((type: 'search' | 'category' | 'year' | 'all') => {
    switch (type) {
      case 'search':
        setSearchQuery('');
        break;
      case 'category':
        setSelectedCategory('all');
        break;
      case 'year':
        setSelectedYear('all');
        break;
      case 'all':
        setSearchQuery('');
        setSelectedCategory('all');
        setSelectedYear('all');
        break;
    }
  }, []);

  const filteredCourses = courses.filter(course => {
    const matchesSearch = searchQuery === '' || 
      course.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.courseID.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || course.date === selectedYear;
    
    return matchesSearch && matchesCategory && matchesYear;
  });

  if (!faculty) {
    return <h1>ไม่พบคณะนี้</h1>;
  }

  if (error) {
    return <h1>เกิดข้อผิดพลาด</h1>;
  }

  return (
    <div className="min-h-screen sm:py-6 lg:py-6 max-w-[86rem] lg:w-[86rem]">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ส่วนหัว */}
        <Card className="mb-8 shadow-md">
          <CardHeader className="space-y-4">
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                รายวิชาเสรีจาก {faculty.name}
              </CardTitle>
            </div>
            <div className="text-gray-500 text-lg">
              {filteredCourses.length > 0 
                ? `พบทั้งหมด ${filteredCourses.length} รายวิชา`
                : `ขณะนี้ยังไม่มีวิชาเสรีจากคณะ${faculty.name}`
              }
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* ส่วนค้นหาและกรอง */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              <div className="md:col-span-5 relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 text-gray-400 transform -translate-y-1/2" />
                <Input
                  placeholder="ค้นหารายวิชา, รหัสวิชา..."
                  className="pl-9 h-10 focus:ring-2 focus:ring-primary/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="md:col-span-3">
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="h-10">
                    <SelectValue placeholder="หมวดหมู่" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === 'all' ? 'ทุกหมวดหมู่' : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="md:col-span-3">
                <Select
                  value={selectedYear}
                  onValueChange={setSelectedYear}
                >
                  <SelectTrigger className="h-10">
                    <SelectValue placeholder="ปีการศึกษา" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year === 'all' ? 'ทุกปีการศึกษา' : year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="md:col-span-1">
                <Button
                  variant="outline"
                  className="w-full h-10 hover:bg-gray-100"
                  onClick={() => clearFilter('all')}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* แสดงตัวกรองที่ใช้งานอยู่ */}
            {(selectedCategory !== 'all' || selectedYear !== 'all' || searchQuery) && (
              <div className="flex flex-wrap gap-2 pt-2">
                {selectedCategory !== 'all' && (
                  <Badge variant="secondary" className="px-3 py-1 text-sm">
                    หมวดหมู่: {selectedCategory}
                    <button
                      onClick={() => clearFilter('category')}
                      className="ml-2 hover:text-primary"
                    >
                      <CircleX className="h-3 w-3 inline" />
                    </button>
                  </Badge>
                )}
                {selectedYear !== 'all' && (
                  <Badge variant="secondary" className="px-3 py-1 text-sm">
                    ปีการศึกษา: {selectedYear}
                    <button
                      onClick={() => clearFilter('year')}
                      className="ml-2 hover:text-primary"
                    >
                      <CircleX className="h-3 w-3 inline" />
                    </button>
                  </Badge>
                )}
                {searchQuery && (
                  <Badge variant="secondary" className="px-3 py-1 text-sm">
                    ค้นหา: {searchQuery}
                    <button
                      onClick={() => clearFilter('search')}
                      className="ml-2 hover:text-primary"
                    >
                      <CircleX className="h-3 w-3 inline" />
                    </button>
                  </Badge>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* แสดงรายวิชา */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
            {filteredCourses.map((course) => (
              <div key={course.courseID} className="h-full">
                <CourseCard initialLikes={0} facultyName={''} {...course} />
              </div>
            ))}
          </div>
        ) : (
          <Card className="shadow-md">
            <CardContent className="flex flex-col items-center justify-center py-16">
              <BookOpen className="w-16 h-16 text-gray-400 mb-6" />
              <p className="text-gray-500 text-lg text-center mb-4">
                ไม่พบรายวิชาที่ตรงกับเงื่อนไขการค้นหา
              </p>
              <Button
                variant="outline"
                onClick={() => clearFilter('all')}
                className="hover:bg-gray-100"
              >
                ล้างตัวกรองทั้งหมด
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
