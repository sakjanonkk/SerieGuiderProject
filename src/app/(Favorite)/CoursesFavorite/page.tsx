// app/favorites/page.tsx
import FavoriteCoursesContent from '@/components/FavoriteCoursesContent';

export const metadata = {
  title: 'รายวิชาที่ถูกใจ | MyWeb',
  description: 'รายการวิชาเสรีที่คุณสนใจ',
};

export default async function FavoritesPage() {
  // TODO: Fetch favorites data from your backend/database
  const initialFavorites = [
    {
      image: "https://m1r.ai/3YbL.svg",
      courseName: "นวัตกรรมการศึกษา",
      description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
      courseID: "ED813001",
      category: "Innovation",
      date: "2024",
      faculty: "คณะศึกษาศาสตร์",
      facultyAKA: "ED",
    },{
      image: "https://m1r.ai/3YbL.svg",
      courseName: "นวัตกรรมการศึกษา2",
      description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
      courseID: "ED813002",
      category: "Innovation",
      date: "2024",
      faculty: "คณะศึกษาศาสตร์",
      facultyAKA: "ED",
    },{
      image: "https://m1r.ai/3YbL.svg",
      courseName: "นวัตกรรมการศึกษา3",
      description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
      courseID: "ED813003",
      category: "Innovation",
      date: "2024",
      faculty: "คณะศึกษาศาสตร์",
      facultyAKA: "ED",
    },{
      image: "https://m1r.ai/3YbL.svg",
      courseName: "นวัตกรรมการศึกษา3",
      description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่3",
      courseID: "ED813003",
      category: "Innovation",
      date: "2024",
      faculty: "คณะวิทยาศาสตร์",
      facultyAKA: "ED",
    }
    // ... more courses
  ];
  
  return <FavoriteCoursesContent initialFavorites={initialFavorites} />;
}

// app/favorites/page.tsx
// import FavoriteCoursesContent from '@/components/FavoriteCoursesContent';
// import { getCoursesByFacultyId } from "@/lib/db/courses";
// import { getServerSession } from 'next-auth'; // หากคุณใช้ next-auth
// import { authOptions } from '@/lib/auth'; // ตัวเลือกการยืนยันตัวตนของคุณ

// export const metadata = {
//   title: 'รายวิชาที่ถูกใจ | MyWeb',
//   description: 'รายการวิชาเสรีที่คุณสนใจ',
// };

// export default async function FavoritesPage() {
//   // ดึงข้อมูล session ของผู้ใช้
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     // หากผู้ใช้ไม่ได้เข้าสู่ระบบ ให้ redirect ไปยังหน้าล็อกอินหรือแสดงข้อความที่เหมาะสม
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <p>กรุณาเข้าสู่ระบบเพื่อดูรายวิชาที่ถูกใจ</p>
//       </div>
//     );
//   }

//   // ดึงรายการวิชาที่ถูกใจของผู้ใช้จากฐานข้อมูล
//   const initialFavorites = await getCoursesByFacultyId(session.user.id);

//   return <FavoriteCoursesContent initialFavorites={initialFavorites} />;
// }
