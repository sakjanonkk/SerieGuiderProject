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