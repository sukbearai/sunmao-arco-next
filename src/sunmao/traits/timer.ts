import { Type } from '@sinclair/typebox';
import { implementRuntimeTrait } from '@sunmao-ui/runtime';

const TimerTraitFactory = () => {
  // 记录每个组件对应的Timer，以便用来清除定时器
  const map = new Map();

  return (props) => {
    const {
      time,
      content,
      immediate,
      componentId,
      subscribeMethods,
      mergeState,
    } = props;
    // clear method
    const clear = () => {
      const timer = map.get(componentId);

      if (timer) {
        clearTimeout(timer);
        mergeState({
          status: 'stopped',
        });
        map.delete(componentId);
      }
    };

    const start = () => {
      clear();

      const timer = setTimeout(() => {
        alert(content);
        mergeState({
          status: 'finished',
        });
      }, time || 0);

      mergeState({
        status: 'waiting',
      });
      map.set(componentId, timer);
    };

    subscribeMethods({
      start,
      clear,
    });

    // 返回 Trait Result
    return {
      props: {
        componentDidMount: [
          () => {
            if (immediate) {
              start();
            }
          },
        ],
        componentDidUnmount: [
          () => {
            clear();
          },
        ],
      },
    };
  };
};

export default implementRuntimeTrait({
  version: 'coutom/v1',
  metadata: {
    name: 'timer',
    description: 'Create a timer to alert,and cloud be clear.',
  },
  spec: {
    properites: Type.Object({
      time: Type.Number(),
      content: Type.String(),
      immediate: Type.Boolean(),
    }),
    state: Type.Object({
      status: Type.KeyOf(
        Type.Object({
          waiting: Type.Boolean(),
          finished: Type.Boolean(),
          stopped: Type.Boolean(),
        })
      ),
    }),
    methods: [
      {
        name: 'start',
        parameters: Type.Object({}),
      },
      {
        name: 'clear',
        parameters: Type.Object({}),
      },
    ],
  },
})(TimerTraitFactory);
