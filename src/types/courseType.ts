// src/types/courseType.ts

export interface CourseInfo {
  image: string;
  faculty: string;
  courseName: string;
  courseID: string;
  description: string;
  category: string;
  date: string;
  likesCount?: number; // Add this line
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  initialLikes: number;
}

// ถ้าต้องการเพิ่ม types อื่นๆ ที่เกี่ยวกับ course สามารถเพิ่มได้ที่นี่
export interface CourseDetails extends CourseInfo {
  credit?: number;
  instructor?: string;
  prerequisites?: string[];
  // เพิ่ม fields อื่นๆ ตามต้องการ
}

export type CourseCategoryType = 'Coding' | 'Design' | 'Business' | 'Art' | 'Science';


export interface CourseType {
  courseId: string; // ใช้ camelCase ให้สอดคล้องกับ TypeScript conventions
  image: string;
  courseName: string;
  description: string;
  category: string;
  date: string;
  initialLikes: number;
  facultyName: string;
}