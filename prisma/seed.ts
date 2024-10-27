import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Step 0: Clean up existing data to avoid duplicates
  await prisma.like.deleteMany({});
  await prisma.coursesData.deleteMany({});
  await prisma.facultyData.deleteMany({});
  await prisma.categoryData.deleteMany({});

  // Step 1: Insert sample category data
  await prisma.categoryData.createMany({
    data: [
      { categoryId: 'language', categoryName: 'กลุ่มวิชาภาษา' },
      { categoryId: 'social_science', categoryName: 'กลุ่มวิชาสังคมศาสตร์ ประวัติศาสตร์และโบราณคดี' },
      { categoryId: 'philosophy_religion', categoryName: 'กลุ่มวิชาปรัชญาและศาสนา' },
      { categoryId: 'science', categoryName: 'คณะวิทยาศาสตร์' },
      { categoryId: 'agriculture', categoryName: 'คณะเกษตรศาสตร์' },
      { categoryId: 'education', categoryName: 'คณะศึกษาศาสตร์' },
      { categoryId: 'medicine', categoryName: 'คณะแพทยศาสตร์' },
      { categoryId: 'pharmacy', categoryName: 'คณะเภสัชศาสตร์' },
      { categoryId: 'public_health', categoryName: 'คณะสาธารณสุขศาสตร์' },
      { categoryId: 'dentistry', categoryName: 'คณะทันตแพทยศาสตร์' },
      { categoryId: 'general_education', categoryName: 'สถาบันการสอนวิชาศึกษาทั่วไป' },
    ],
  });

  // Step 2: Insert sample faculty data
  await prisma.facultyData.createMany({
    data: [
      { facultyId: 'HS', facultyTHName: 'มนุษยศาสตร์และสังคมศาสตร์', facultyENName: 'Humanities and Social Sciences', facultyDescription: 'Faculty of Humanities and Social Sciences description', accentColor: '#0000FF', borderAccentColor: '#FF0000' },
      { facultyId: 'SC', facultyTHName: 'วิทยาศาสตร์', facultyENName: 'Science', facultyDescription: 'Faculty of Science description', accentColor: '#00FF00', borderAccentColor: '#00FFFF' },
      { facultyId: 'AG', facultyTHName: 'เกษตรศาสตร์', facultyENName: 'Agriculture', facultyDescription: 'Faculty of Agriculture description', accentColor: '#FFAA00', borderAccentColor: '#FFFF00' },
      { facultyId: 'ED', facultyTHName: 'ศึกษาศาสตร์', facultyENName: 'Education', facultyDescription: 'Faculty of Education description', accentColor: '#FFAABB', borderAccentColor: '#FF99CC' },
      { facultyId: 'MD', facultyTHName: 'แพทยศาสตร์', facultyENName: 'Medicine', facultyDescription: 'Faculty of Medicine description', accentColor: '#BBBBBB', borderAccentColor: '#CCCCCC' },
      { facultyId: 'PH', facultyTHName: 'เภสัชศาสตร์', facultyENName: 'Pharmacy', facultyDescription: 'Faculty of Pharmacy description', accentColor: '#CCDD00', borderAccentColor: '#DDDD00' },
      { facultyId: 'PHH', facultyTHName: 'สาธารณสุขศาสตร์', facultyENName: 'Public Health', facultyDescription: 'Faculty of Public Health description', accentColor: '#FF5555', borderAccentColor: '#FF7777' },
      { facultyId: 'DT', facultyTHName: 'ทันตแพทยศาสตร์', facultyENName: 'Dentistry', facultyDescription: 'Faculty of Dentistry description', accentColor: '#999999', borderAccentColor: '#BBBBBB' },
      { facultyId: 'GE', facultyTHName: 'ศึกษาทั่วไป', facultyENName: 'General Education', facultyDescription: 'Institute of General Education description', accentColor: '#CCCCAA', borderAccentColor: '#AAAABB' },
    ],
  });

  // Step 3: Insert sample courses data with provided images
  await prisma.coursesData.createMany({
    data: [
      // Humanities and Social Sciences
      { courseId: 'HS311001', image: 'https://m1r.ai/Q2uIK.svg', courseName: 'ภาษาจีน 1', categoryId: 'language', courseYear: 1, courseDescription: 'ภาษาจีนเบื้องต้นสำหรับผู้เริ่มต้น', facultyId: 'HS' },
      { courseId: 'HS321001', image: 'https://m1r.ai/bt81.svg', courseName: 'ภาษาญี่ปุ่นขั้นต้น 1', categoryId: 'language', courseYear: 1, courseDescription: 'ภาษาญี่ปุ่นเบื้องต้นสำหรับผู้เริ่มต้น', facultyId: 'HS' },
      { courseId: 'HS331001', image: 'https://m1r.ai/spAm.svg', courseName: 'ภาษาเกาหลี 1', categoryId: 'language', courseYear: 1, courseDescription: 'ภาษาเกาหลีขั้นต้นสำหรับผู้เริ่มต้น', facultyId: 'HS' },
      { courseId: 'HS331002', image: 'https://m1r.ai/kRVhE.svg', courseName: 'ภาษาเกาหลี 2 (มีเงื่อนไขรายวิชา)', categoryId: 'language', courseYear: 2, courseDescription: 'ภาษาเกาหลีระดับกลาง (มีเงื่อนไขรายวิชา)', facultyId: 'HS' },
      { courseId: 'HS332101', image: 'https://m1r.ai/vlrZ.svg', courseName: 'ภาษาเกาหลี 3 (มีเงื่อนไขรายวิชา)', categoryId: 'language', courseYear: 3, courseDescription: 'ภาษาเกาหลีขั้นสูง (มีเงื่อนไขรายวิชา)', facultyId: 'HS' },
      { courseId: 'HS711101', image: 'https://m1r.ai/oPnO.svg', courseName: 'ภาษาสเปนขั้นพื้นฐาน 1', categoryId: 'language', courseYear: 1, courseDescription: 'ภาษาสเปนขั้นพื้นฐานสำหรับผู้เริ่มต้น', facultyId: 'HS' },
      { courseId: 'HS801109', image: 'https://m1r.ai/GWuZ.svg', courseName: 'ประวัติศาสตร์ยุโรปสมัยใหม่', categoryId: 'social_science', courseYear: 2, courseDescription: 'ศึกษาประวัติศาสตร์ยุโรปในยุคสมัยใหม่', facultyId: 'HS' },
      { courseId: 'HS821003', image: 'https://m1r.ai/Xu22.svg', courseName: 'ปรัชญาเบื้องต้น', categoryId: 'philosophy_religion', courseYear: 1, courseDescription: 'ความรู้เบื้องต้นเกี่ยวกับปรัชญา', facultyId: 'HS' },
      
      // Science
      { courseId: 'SC002002', image: 'https://m1r.ai/fJIi2.svg', courseName: 'นิติวิทยาศาสตร์เบื้องต้น', categoryId: 'science', courseYear: 1, courseDescription: 'หลักสูตรโครงการพิเศษ นานาชาติ และโครงการพิเศษนานาชาติลงได้', facultyId: 'SC' },
      { courseId: 'SC002003', image: 'https://m1r.ai/bfTp.svg', courseName: 'การวิเคราะห์ดีเอ็นเอในนิติวิทยาศาสตร์', categoryId: 'science', courseYear: 1, courseDescription: 'การวิเคราะห์ DNA ในงานนิติวิทยาศาสตร์', facultyId: 'SC' },

      // Agriculture
      { courseId: 'AG103007', image: 'https://m1r.ai/ildqJ.svg', courseName: 'แมงมุมวิทยา', categoryId: 'agriculture', courseYear: 1, courseDescription: 'วิชาที่เกี่ยวกับการศึกษาของแมงมุม', facultyId: 'AG' },
      { courseId: 'AG104003', image: 'https://m1r.ai/SkZdM.svg', courseName: 'แมลงอุตสาหกรรม', categoryId: 'agriculture', courseYear: 1, courseDescription: 'การเพาะพันธุ์และใช้ประโยชน์จากแมลง', facultyId: 'AG' },

      // Education
      { courseId: 'ED060001', image: 'https://m1r.ai/kw9Du.svg', courseName: 'กิจกรรมพลศึกษา (แบดมินตัน)', categoryId: 'education', courseYear: 1, courseDescription: 'หลักสูตรโครงการพิเศษลงได้', facultyId: 'ED' },
      { courseId: 'ED060016', image: 'https://m1r.ai/Ekm2.svg', courseName: 'กิจกรรมพลศึกษา (เทเบิลเทนนิส)', categoryId: 'education', courseYear: 1, courseDescription: 'หลักสูตรโครงการพิเศษลงได้', facultyId: 'ED' },

      // Medicine
      { courseId: 'MD660401', image: 'https://m1r.ai/92nTL.svg', courseName: 'ยาในชีวิตประจำวัน', categoryId: 'medicine', courseYear: 1, courseDescription: 'หลักสูตรโครงการพิเศษ และโครงการพิเศษนานาชาติลงได้', facultyId: 'MD' },
      { courseId: 'MD530207', image: 'https://m1r.ai/wr4A.svg', courseName: 'การจัดการชีวิต', categoryId: 'medicine', courseYear: 2, courseDescription: 'หลักสูตรโครงการพิเศษ และโครงการพิเศษนานาชาติลงได้', facultyId: 'MD' },

      // Pharmacy
      { courseId: 'PH614201', image: 'https://m1r.ai/NY9mF.svg', courseName: 'สารพิษในชีวิตประจำวัน', categoryId: 'pharmacy', courseYear: 1, courseDescription: 'หลักสูตรโครงการพิเศษลงได้', facultyId: 'PH' },

      // Public Health
      { courseId: 'PH511101', image: 'https://m1r.ai/KKKqu.svg', courseName: 'แนะนําการสาธารณสุข', categoryId: 'public_health', courseYear: 1, courseDescription: 'หลักสูตรโครงการพิเศษลงได้', facultyId: 'PHH' },
      { courseId: 'PH515330', image: 'https://m1r.ai/t18G.svg', courseName: 'ความรอบรู้ด้านสุขภาพเพื่อส่งเสริมสุขภาพทางเพศ', categoryId: 'public_health', courseYear: 1, courseDescription: 'หลักสูตรโครงการพิเศษลงได้', facultyId: 'PHH' },

      // General Education
      { courseId: 'GE821245', image: 'https://m1r.ai/D14H.svg', courseName: 'สมาธิเพื่อพัฒนาชีวิต', categoryId: 'general_education', courseYear: 1, courseDescription: 'หลักสูตรโครงการพิเศษลงได้', facultyId: 'GE' },
      { courseId: 'GE363879', image: 'https://m1r.ai/5YUB.svg', courseName: 'ผู้ประกอบการนวัตกรรม', categoryId: 'general_education', courseYear: 1, courseDescription: 'หลักสูตรโครงการพิเศษลงได้', facultyId: 'GE' },
    ],
  });

  console.log('Seeding complete');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
