import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      HOME
      <Link className={buttonVariants()} href="/admin">
        Open My Admin
      </Link>
    </div>
  );
};

export default page;
