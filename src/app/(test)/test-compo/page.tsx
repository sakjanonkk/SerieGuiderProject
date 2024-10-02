"use client";

import React from 'react';
import UserDropdown from '@/components/navigation/dropdownNav';

const TestCompo = () => {
  return (
    <div>
      <h1>Hi</h1>
      {/* เรียกใช้ UserDropdown component */}
      <UserDropdown />
    </div>
  );
};

export default TestCompo;
