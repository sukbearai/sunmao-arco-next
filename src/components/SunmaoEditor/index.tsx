import React from 'react';
import { initSunmaoUIEditor } from '@sunmao-ui/editor';
import '@sunmao-ui/editor/dist/index.css';
import libs from '@/sunmao/libs';
import { widgets} from '@sunmao-ui/arco-lib'
import applicationSchema from  '@/schema/application.json';
import { Application } from '@sunmao-ui/core';

export default function SunmaoEditor() {
  const { Editor } = initSunmaoUIEditor({
    defaultApplication:applicationSchema as Application,
    widgets,
    runtimeProps: {
      libs,
    },
  });
  return <Editor />;
}

