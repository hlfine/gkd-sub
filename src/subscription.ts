import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 'com.kmxs.reader',
  name: '七猫免费小说',
  groups: [
    {
      key: 1,
      name: '阅读中广告',
      rules: '[id="com.kmxs.reader:id/bubble_close"]',
      snapshotUrls: ['https://i.gkd.li/snapshot/1724762024501'],
    },
    {
      key: 2,
      name: '阅读中广告',
      rules: '[id="com.kmxs.reader:id/ad_direct_close"]',
      snapshotUrls: ['https://i.gkd.li/snapshot/1724762024501'],
    },
  ]
});
