export const bulletin = {
    body: [
      {
        type: 'title',
        content: '最新版本',
      },
      {
        type: 'text',
        content: `
        <ul>
          <li>vuepress：2.0.0-rc.13</li>
          <li>reco 主题：2.0.0-rc.15</li>
        </ul>`,
        style: 'font-size: 12px; color: #5D67E8;'
      },
      {
        type: 'title',
        content: 'QQ 频道：xxx',
      },
      {
        type: 'image',
        src: '/qq_channel.png',
      },
      {
        type: 'text',
        // content: `
        // <ul>
        //   <li>QQ群1：--</li>
        //   <li>QQ群2：--</li>
        //   <li>QQ群3：--</li>
        // </ul>`,
        content: `<br /><div><b>周知：</b>原 3 个 QQ 群成员活跃状态差异较大，且分布较分散，现停止新人加群，为了方便大家的交流，请移步 QQ 频道。</div>`,
        style: 'font-size: 12px; color: #5D67E8;'
      }
    ],
  }