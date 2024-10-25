
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FC } from 'react'; 

// กำหนด interface สำหรับ props ของ component
interface SignInComponentProps {
  signIn: () => void; // ประเภทของ signIn คือ function ที่ไม่มี parameter และไม่มีการคืนค่า
}

// ใช้ FC (Function Component) พร้อมกับ props ที่กำหนดไว้
const warning_login: FC<SignInComponentProps> = ({ signIn }) => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <Card className="p-6 max-w-full sm:max-w-md text-center shadow-lg">
        <Image
          src="/animate/warning-animate.svg" // ใส่ path ของรูปภาพที่คุณต้องการ
          alt="Illustration"
          width={500} // กำหนดความกว้าง
          height={400} // กำหนดความสูง
          className="mx-auto h-48 sm:h-64 md:h-72 lg:h-80 w-auto"
        />
        <h2 className="text-xl font-bold mb-4">Please Sign In</h2>
        <p className="mb-6 text-gray-500">
          You need to sign in to view your profile and manage your account.
        </p>
        <Button variant="default" onClick={signIn}>
          Sign In
        </Button>
      </Card>
    </div>
  );
};

export default warning_login;
