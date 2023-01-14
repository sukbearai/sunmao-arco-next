import React from 'react';
import dynamic from 'next/dynamic';

const SunmaoEditor = dynamic(() => import('@/components/SunmaoEditor'), {
  ssr: false,
});

export default function Editor() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <SunmaoEditor></SunmaoEditor>
    </div>
  );
}

Editor.displayName = 'SunmaoEditor';
