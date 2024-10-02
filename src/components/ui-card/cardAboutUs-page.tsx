// import Link from "next/link";
// import Image from "next/image";
// import Icon from "@/components/icon/icon-lucide";
// import {
//   Card,
//   CardHeader,
//   CardContent
// } from "@/components/ui/card"; // จาก shadCN UI

// interface ProfileCardProps {
//   name: string;
//   githubUrl: string;
//   githubUsername: string;
//   instagramUrl: string;
//   instagramUsername: string;
//   profileImage: string;
// }

// const ProfileCard = ({
//   name,
//   githubUrl,
//   githubUsername,
//   instagramUrl,
//   instagramUsername,
//   profileImage,
// }: ProfileCardProps) => {
//   return (
//     <Card className="w-[250px] h-auto rounded-3xl shadow-md m-4">
//       <CardHeader>
//         <Image
//           src={profileImage}
//           alt={`Profile picture of ${name}`}
//           width={500} 
//           height={260} 
//           className="object-cover rounded-tr-3xl rounded-tl-3xl w-full h-[260px]"
//         />
//       </CardHeader>
//       <CardContent>
//         <p>{name}</p>
//         <p className="mt-2 underline underline-offset-2 font-bold">Contact</p>
//         <div className="grid grid-cols-1 gap-4 p-4">
//           <Link href={githubUrl}>
//             <div className="flex items-center">
//               <Icon
//                 name="github"
//                 className="w-[30px] h-[30px] mr-1"
//                 size={25}
//                 color="#374151"
//               />
//               <p className="text-[14px]">{githubUsername}</p>
//             </div>
//           </Link>
//           <Link href={instagramUrl}>
//             <div className="flex items-center">
//               <Icon
//                 name="instagram"
//                 className="w-[30px] h-[30px] mr-1"
//                 size={25}
//                 color="#374151"
//               />
//               <p className="text-[14px]">{instagramUsername}</p>
//             </div>
//           </Link>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default ProfileCard;



import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/icon/icon-lucide";
import {
  Card,
  CardHeader,
  CardContent
} from "@/components/ui/card"; // จาก shadCN UI

interface ProfileCardProps {
  name: string;
  githubUrl?: string;  // ทำให้ URL เป็น optional
  githubUsername: string;
  instagramUrl?: string;  // ทำให้ URL เป็น optional
  instagramUsername: string;
  profileImage?: string;  // ทำให้ URL ของรูปภาพเป็น optional
}

const ProfileCard = ({
  name,
  githubUrl,
  githubUsername,
  instagramUrl,
  instagramUsername,
  profileImage,
}: ProfileCardProps) => {
  return (
    <Card className="w-[250px] h-auto rounded-3xl shadow-md m-4">
      <CardHeader>
        {/* ตรวจสอบว่ามี profileImage หรือไม่ ถ้าไม่มีให้แสดง fallback */}
        {profileImage ? (
          <Image
            src={profileImage}
            alt={`Profile picture of ${name}`}
            width={500} 
            height={260} 
            className="object-cover rounded-tr-3xl rounded-tl-3xl w-full h-[260px]"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-[260px] bg-gray-200">
            <p>No image available</p>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <p>{name}</p>
        <p className="mt-2 underline underline-offset-2 font-bold">Contact</p>
        <div className="grid grid-cols-1 gap-4 p-4">
          {/* ตรวจสอบว่ามี githubUrl ก่อน */}
          {githubUrl ? (
            <Link href={githubUrl}>
              <div className="flex items-center">
                <Icon
                  name="github"
                  className="w-[30px] h-[30px] mr-1"
                  size={25}
                  color="#374151"
                />
                <p className="text-[14px]">{githubUsername}</p>
              </div>
            </Link>
          ) : (
            <p>No GitHub link</p>
          )}

          {/* ตรวจสอบว่ามี instagramUrl ก่อน */}
          {instagramUrl ? (
            <Link href={instagramUrl}>
              <div className="flex items-center">
                <Icon
                  name="instagram"
                  className="w-[30px] h-[30px] mr-1"
                  size={25}
                  color="#374151"
                />
                <p className="text-[14px]">{instagramUsername}</p>
              </div>
            </Link>
          ) : (
            <p>No Instagram link</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
