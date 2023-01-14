import React from 'react';
import { type Application } from '@sunmao-ui/core';
import dynamic from 'next/dynamic';
import applicationSchema from  '@/schema/application.json';

const  SunmaoApp = dynamic(() => import('@/components/SunmaoRenderer'),{
  ssr: false
})

export default  function Sunmao() {
return (
  <SunmaoApp application={applicationSchema as Application} modules={[]}></SunmaoApp>
  );
}
