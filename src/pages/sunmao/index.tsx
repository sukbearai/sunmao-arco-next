import React from 'react';
import { initSunmaoUI, SunmaoLib } from '@sunmao-ui/runtime';
import { type Application, type RuntimeModule } from '@sunmao-ui/core';
import Font from '@/summaoComponents/Font';

type SunmaoApplication = {
    application: Application;
    modules?: RuntimeModule[];
  };
  
const myUI: SunmaoLib = {
    components: [Font],
};

export default async  function SunmaoApp() {
    const application:SunmaoApplication = {
        application:await import('@/schema/application.json') as Application,
        modules:[]
    }
    const { App } = initSunmaoUI({libs:[myUI]});
  
   
  
    return <>
        <div>页面其他内容</div>
        <App options={application} />
    </>;
  }
  
