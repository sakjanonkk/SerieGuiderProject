export interface CourseInfo {
  image: string;
  faculty: string;
  courseName: string;
  courseID: string;
  description: string;
  category: string;
  date: string;
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// ถ้าต้องการเพิ่ม types อื่นๆ ที่เกี่ยวกับ course สามารถเพิ่มได้ที่นี่
export interface CourseDetails extends CourseInfo {
  credit?: number;
  instructor?: string;
  prerequisites?: string[];
  // เพิ่ม fields อื่นๆ ตามต้องการ
}

export type CourseCategoryType = 'Coding' | 'Design' | 'Business' | 'Art' | 'Science';