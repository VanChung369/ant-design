import { Request, Response } from 'express';

const getNotices = (req: Request, res: Response) => {
  res.json({
    data: [
      {
        id: '000000001',
        avatar:
          'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/MSbDR4FR2MUAAAAAAAAAAAAAFl94AQBr',
        title: 'You received 14 new weekly newspapers',
        datetime: '2017-08-09',
        type: 'notification',
      },
      {
        id: '000000002',
        avatar:
          'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/hX-PTavYIq4AAAAAAAAAAAAAFl94AQBr',
        title: 'Admin you recommended has passed the third round of interview',
        datetime: '2017-08-08',
        type: 'notification',
      },
      {
        id: '000000003',
        avatar:
          'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/jHX5R5l3QjQAAAAAAAAAAAAAFl94AQBr',
        title: 'This template can distinguish between multiple notification types',
        datetime: '2017-08-07',
        read: true,
        type: 'notification',
      },
      {
        id: '000000004',
        avatar:
          'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/Wr4mQqx6jfwAAAAAAAAAAAAAFl94AQBr',
        title: 'Icons on the left are used to distinguish between different types',
        datetime: '2017-08-07',
        type: 'notification',
      },
      {
        id: '000000005',
        avatar:
          'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/Mzj_TbcWUj4AAAAAAAAAAAAAFl94AQBr',
        title:
          'The content should not exceed two lines, and it will be automatically truncated when it exceeds',
        datetime: '2017-08-07',
        type: 'notification',
      },
      {
        id: '000000006',
        avatar:
          'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/eXLzRbPqQE4AAAAAAAAAAAAAFl94AQBr',
        title: 'Admin commented on you',
        description: 'Description',
        datetime: '2017-08-07',
        type: 'message',
        clickClose: true,
      },
      {
        id: '000000007',
        avatar:
          'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/w5mRQY2AmEEAAAAAAAAAAAAAFl94AQBr',
        title: 'Admin replied to you',
        description:
          'This template is used to remind who has interacted with you, and the avatar of "who" is placed on the left',
        datetime: '2017-08-07',
        type: 'message',
        clickClose: true,
      },
      {
        id: '000000008',
        avatar:
          'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/wPadR5M9918AAAAAAAAAAAAAFl94AQBr',
        title: 'title',
        description:
          'This template is used to remind who has interacted with you, and the avatar of "who" is placed on the left',
        datetime: '2017-08-07',
        type: 'message',
        clickClose: true,
      },
      {
        id: '000000009',
        title: 'mission name',
        description: 'The task needs to be started before 2017-01-12 20:00',
        extra: 'has not started',
        status: 'todo',
        type: 'event',
      },
      {
        id: '000000010',
        title: 'Third -party emergency code change',
        description:
          'Guanlin is submitted in 2017-01-06, and you need to complete the code change task before 2017-01-07',
        extra: 'Expire immediately',
        status: 'urgent',
        type: 'event',
      },
      {
        id: '000000011',
        title: 'Information security test',
        description: 'Assign Takeshi to complete the update and release before 2017-01-09',
        extra: 'It took 8 days',
        status: 'doing',
        type: 'event',
      },
      {
        id: '000000012',
        title: 'ABCD Version release',
        description:
          'Guanlin Submit in 2017-01-06, you need to complete the code change task before 2017-01-07',
        extra: 'in progress',
        status: 'processing',
        type: 'event',
      },
    ],
  });
};

export default {
  'GET /api/notices': getNotices,
};