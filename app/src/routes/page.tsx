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

import { Helmet } from '@modern-js/runtime/head';
import './index.css';
import MCP from '@/demo/mcp';

const Index = () => (
  <div>
    <Helmet>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
      />
    </Helmet>
    <main>
      <div className="h-screen">
        <MCP botId={process.env.BOT_ID} url={`${process.env.DOMAIN || 'http://0.0.0.0:8888'}/api/v3/bots/chat/completions`} />
      </div>
    </main>
  </div>
);

export default Index;
