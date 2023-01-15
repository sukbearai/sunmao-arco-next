# sunmao-ui-start-next

⭐️ This is a beginner's sunmao project rendered by nextjs.

## Project struct

```
├── README
├── package.json
├── src
|  ├── components  # the common components
|  |  ├── SunmaoEditor # sunmao editor
|  |  ├── SunmaoRenderer # sunmao runtime
|  ├── locale  # i18n
|  ├── mock
|  ├── page # page templates
|  |  ├── index.tsx # entry file
|  |  ├── layout.tsx  # layout
|  ├── public
|  |  ├── assets  # the static assets
|  ├── schema # Application Schema
|  ├── store # redux
|  ├── style # global style
|  ├── sunmao  # the sunmao lib
|  |  ├── components # the implements of the sunmao components
|  |  ├── lib.ts
|  |  ├── methods  # the implements of the util methods
|  |  ├── traits  # the implements of the trait
|  |  └── widgets  # the implements of the widgets
|  ├── utils
|  ├── context # global configuration
|  ├── declaration.d.ts
|  ├── routes.ts
|  ├── settings.json
|  ├── react-app-env.d.ts
├── tsconfig-base.json
├── tsconfig.json
└── yarn.lock
```
## 🌈 Usage

```bash
$ yarn

$ yarn dev

// access the editor: http://localhost:3000/editor
```

## ✨ Documents

[](https://github.com/smartxworks/sunmao-ui/tree/develop/docs/zh)

## 💡 Some ideas

The time cost of application templates: relying on R&D roles to stack manpower to produce admin templates, front-end to do this type of template is actually very time-consuming, and different templates also cannot be quickly copied. But if the designer based on existing Figma UI Kit to do page templates, the same time production efficiency will be four to five times or even more than ten times that of R&D.
A feasible workflow: using D2C tools to create application templates and using DSM design systems to formulate, designers can generate other theme templates from existing Figma templates and adapt to different theme styles.

应用模版的时间成本：依靠研发角色堆人力生产admin等模版，前端去做这类模版实际上是非常耗时的 ，不同的模版也没办法快速复制，但如果设计师基于现成的Figma UI Kit 去做页面模板，同样时间生产效率会是研发的四五倍甚至十倍以上。

实际可行的工作流：借助D2C工具制作应用模版，并借用DSM设计系统制定，设计师可以将已有的figma模版生成其他主题模板，适配不同的主题风格。

D2C UI Kit:

- [Arco Toolbox 你的多啦A梦口袋](https://www.figma.com/community/plugin/1097814681219767573)
