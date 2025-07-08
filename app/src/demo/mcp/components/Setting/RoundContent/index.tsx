// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// Licensed under the 【火山方舟】原型应用软件自用许可协议
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at 
//     https://www.volcengine.com/docs/82379/1433703
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Input, InputNumber, Slider, Tooltip } from '@arco-design/web-react';
import { IconQuestionCircle } from '@arco-design/web-react/icon';

import DeepResearchPoster from '@/demo/mcp/assets/DeepResearchPoster.png';
import { useEffect, useState } from 'react';
import { useChatConfigStore } from '@/demo/mcp/store/ChatConfigStore/useChatConfigStore';

import s from './index.module.less';

export function RoundContent() {
  const [apiKey, setApiKey] = useState('');
  const {
    maxPlanningRounds,
    setMaxPlanningRounds,
  } = useChatConfigStore();

  const handleApiKeyChange = (value: string) => {
    setApiKey(value);
    localStorage.setItem('apiKey', value);
  };

  useEffect(() => {
    const storedApiKey = localStorage.getItem('apiKey');
    if (storedApiKey) {
      setApiKey(storedApiKey);
    }
  }, []);
  return (
    <div className={s.drawer}>
      <main className={s.main}>
        <div className={s.poster}>
          <div className={s.left}>
            <div className={s.t}>DeepSearch 问题拆解</div>
            <div className={s.d}>
              模拟人类的思维模式，根据问题的复杂程度，对问题进行系统拆解和总结
            </div>
          </div>
          <img src={DeepResearchPoster} className={s.img} />
        </div>
        <div className={s.sliderContainer}>
          <div className={s.title}>
            <span>问题拆解最大层数</span>
            <Tooltip content="当前问题最多可以进行多少轮次问题拆解，影响回答速度与回答丰富度。">
              <IconQuestionCircle className={s.iconQuestion} />
            </Tooltip>
          </div>
          <div className={s.sliderBox}>
            <Slider
              className={s.slider}
              value={maxPlanningRounds}
              min={1}
              max={10}
              onChange={val => setMaxPlanningRounds(val as number)}
            />
            <InputNumber
              className={s.inputNumber}
              size="small"
              min={1}
              max={10}
              precision={0}
              value={maxPlanningRounds}
              onChange={setMaxPlanningRounds}
            />
          </div>
        </div>
        <div className={s.sliderContainer}>
          <div className={s.title}>
            <span>美行云大模型鉴权</span>
            <Tooltip content="在飞书中使用美行云大模型网关申请的API密钥，它通常以sk-开头。">
              <IconQuestionCircle className={s.iconQuestion} />
            </Tooltip>
          </div>
            <Input
              placeholder="请输入您的 API Key"
              value={apiKey}
              onChange={handleApiKeyChange}
            />
        </div>
      </main>
    </div>
  );
}
