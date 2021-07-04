require(['src/app-state', 'src/stores/message'], function(appState, messageStore) {
  const users = [
    'Lottie',
    'Lorine',
    'Roger',
    'Meda',
    'Shea',
    'Dane',
    'Shaun',
    'Reed',
    'Agustin',
    'Preston',
  ];
  const messages = [
    {
      id: 'bfc455e8-aac7-4ea3-aec7-dc0b603aa213',
      author: 'Preston',
      content:
        'Mollitia quia consequuntur molestiae minima fuga. At iusto ut laudantium id temporibus. Nam et dolor est in sed quasi molestiae.\n' +
        ' \rLibero perspiciatis magni expedita. Impedit numquam expedita veniam corrupti. Vel earum officiis et quam. Est omnis ad iste culpa sed ut cupiditate. Magnam natus neque quia incidunt unde et. Et consequatur quia doloremque.\n' +
        ' \rSed molestiae dignissimos sunt rerum rerum est quia. Aperiam similique corrupti alias at ducimus commodi pariatur commodi voluptatum. Corporis voluptate molestiae et necessitatibus voluptatem minus est libero. Aut et quo necessitatibus delectus quo quia. Quia rerum perferendis possimus eaque eius.',
      createdAt: '2020-08-02T05:32:38.944Z',
      timeLabel: '13:32:38',
    },
    {
      id: 'd664ca63-dcd8-48a3-8ab8-437e0604bdc9',
      author: 'Agustin',
      content:
        'Ea at ea rerum porro. Nemo ut minus sed rerum. Expedita eius reprehenderit et a rerum. Vel tempora id id in earum suscipit omnis. Expedita voluptas et magni omnis in. Quod ut et omnis nostrum dolores aliquam voluptatem consequatur quia.',
      createdAt: '2021-04-16T19:29:09.898Z',
      timeLabel: '03:29:09',
    },
    {
      id: '1a8a409d-8f54-46c7-bc3b-d860440e4a6e',
      author: 'Shea',
      content: 'corrupti quia quaerat',
      createdAt: '2020-12-22T03:00:03.497Z',
      timeLabel: '11:00:03',
    },
    {
      id: '060ac8c4-6371-4029-9ce9-417386387bdc',
      author: 'Preston',
      content: 'Nam dolores in.\nEx atque amet maxime quia laborum.',
      createdAt: '2020-11-30T10:47:55.657Z',
      timeLabel: '18:47:55',
    },
    {
      id: '6d746113-6e06-40e5-acf9-e845bdc299b5',
      author: 'Agustin',
      content: 'error',
      createdAt: '2020-09-14T11:59:47.969Z',
      timeLabel: '19:59:47',
    },
    {
      id: 'df3a7729-6824-4552-9d65-a9603566342d',
      author: 'Meda',
      content: 'in',
      createdAt: '2020-10-30T15:34:23.304Z',
      timeLabel: '23:34:23',
    },
    {
      id: 'a48db985-c9c9-4989-a3a2-cb41c3b103ff',
      author: 'Preston',
      content: 'Numquam dolorum ipsam voluptatum dolorum odio optio ullam sint.',
      createdAt: '2020-07-12T15:37:22.320Z',
      timeLabel: '23:37:22',
    },
    {
      id: '4e5e8697-5ab4-4ad3-af20-96e8bdfce908',
      author: 'Lorine',
      content:
        'Quisquam ut consequuntur corrupti autem esse quo sed magnam. Ducimus amet aliquam. Molestiae quae aut excepturi maiores ut vero ab ut. Ab ducimus est eos eum at voluptas et rerum.\n' +
        ' \rMollitia quod sed eos in repellendus aut. Sit omnis voluptatem qui at. Odio soluta modi delectus molestiae. Et recusandae id eum voluptatem esse molestiae sed. Voluptatibus impedit qui illo nemo. Quis quis et sit rerum voluptas itaque maiores.\n ' +
        ' \rEveniet illo commodi blanditiis reiciendis sint et soluta assumenda. Quibusdam error eum in aut possimus nobis exercitationem quia omnis. Omnis natus in non quia veritatis laudantium sit id explicabo. Et laudantium doloremque labore blanditiis r eprehenderit nesciunt velit sapiente minus.',
      createdAt: '2020-08-01T05:44:01.760Z',
      timeLabel: '13:44:01',
    },
    {
      id: '95db6f02-f883-45b1-b07c-4ea7ba51515b',
      author: 'Meda',
      content:
        'Eius possimus libero. Molestiae error odit reprehenderit et et assumenda. Enim distinctio molestiae expedita sunt dolor commodi nulla alias. Itaque aliquid voluptatem voluptatibus.\n' +
        ' \rVoluptatem temporibus earum commodi quo dolor qui voluptatem. Ullam quae mollitia. Nobis qui qui officia. Sint qui animi exercitationem est rerum. Deserunt ex natus quis pariatur. Corporis architecto ratione ea.\n' +
        ' \rUt rerum asperiores omnis. Ut minus in et dolorem. Enim eveniet qui distinctio voluptatem reprehenderit et neque.',
      createdAt: '2020-11-29T21:14:11.407Z',
      timeLabel: '05:14:11',
    },
    {
      id: '14466deb-d64e-438d-a723-1c95e1481ea9',
      author: 'Shaun',
      content: 'et',
      createdAt: '2021-04-22T22:16:56.837Z',
      timeLabel: '06:16:56',
    },
    {
      id: '27b61e53-8140-4323-87b1-4e6fc80b44e5',
      author: 'Meda',
      content:
        'Officiis dolorum saepe sit non ratione quis quo harum omnis. Modi qui delectus adipisci vitae debitis odio non. Quia qui aut sed laudantium repellendus earum neque. Rem et illum dolore. Dicta velit consequatur odio autem deserunt maxime mini ma harum. Nisi sequi qui et.\n' +
        ' \rEarum qui ab inventore et velit quod nihil. Officia doloribus quia sit. Aut dignissimos explicabo. Est at fuga illo libero et. Eveniet eos nisi. Rem distinctio enim ea magni.\n' +
        ' \rSunt nihil corrupti. Quidem maiores vitae animi at aliquid enim. Non non eius dolor ut facere adipisci. Dicta in animi eum voluptatibus. Alias expedita consequatur adipisci. Eveniet nostrum esse et sit rerum laboriosam quaerat.',
      createdAt: '2020-11-12T17:06:20.188Z',
      timeLabel: '01:06:20',
    },
    {
      id: '53962252-a6be-4d48-84b0-af87b910e756',
      author: 'Meda',
      content:
        'Temporibus expedita voluptates quia ex. Sit dolore magni. Aperiam distinctio eaque labore ut quos ut illum. Molestias illo distinctio. Qui quis sint aliquid voluptas commodi ut. Beatae dolores nesciunt aliquam pariatur modi ab vel atque in.',
      createdAt: '2020-12-23T19:51:39.386Z',
      timeLabel: '03:51:39',
    },
    {
      id: '36c7c7c0-25f8-4746-b101-40d9fe75c314',
      author: 'Dane',
      content: 'Et error est quo est sit est ea animi.',
      createdAt: '2021-01-31T18:27:56.369Z',
      timeLabel: '02:27:56',
    },
    {
      id: '80d4d5ca-9713-4b53-afa3-a3a4e806f8c8',
      author: 'Preston',
      content:
        'Maiores placeat optio harum illum nam molestias. Quia harum quae. Unde at repellat consequuntur iusto maiores veniam nulla incidunt autem.',
      createdAt: '2021-02-13T09:34:07.418Z',
      timeLabel: '17:34:07',
    },
    {
      id: '62fde7e6-c717-4714-89a1-96f9bdb6d5a2',
      author: 'Dane',
      content:
        'Et non veritatis voluptatem ut. Nulla autem numquam repellendus nostrum veniam. Voluptate voluptatem nesciunt. Exercitationem id cupiditate. Voluptas temporibus magni ut quidem eius consectetur natus perferendis. Nulla provident molestias be atae eaque et.',
      createdAt: '2021-02-14T12:09:57.696Z',
      timeLabel: '20:09:57',
    },
    {
      id: 'dc72e172-de06-43d8-b5d8-85f4a3ca68ff',
      author: 'Shea',
      content: 'Labore suscipit assumenda eum omnis similique dolorum reprehenderit.',
      createdAt: '2020-10-26T22:06:35.114Z',
      timeLabel: '06:06:35',
    },
    {
      id: 'cb363e77-3e80-472f-bc6a-d87edaf4a6ef',
      author: 'Lorine',
      content: 'Molestias sit officiis eaque itaque.\nLaboriosam magnam earum animi.',
      createdAt: '2020-11-28T01:43:45.352Z',
      timeLabel: '09:43:45',
    },
    {
      id: '3b685421-1a27-4520-98fc-4a18123b5415',
      author: 'Dane',
      content: 'illo rerum ex',
      createdAt: '2021-01-04T03:35:07.267Z',
      timeLabel: '11:35:07',
    },
    {
      id: 'f906fc99-9407-4ac0-9d19-46a53708e8cf',
      author: 'Lottie',
      content: 'Quae repellat rerum quae nemo atque.',
      createdAt: '2020-08-07T17:47:14.333Z',
      timeLabel: '01:47:14',
    },
    {
      id: '232ddcab-5ee6-4a66-95ae-1aedeb36b2f5',
      author: 'Shea',
      content: 'ut voluptas mollitia',
      createdAt: '2020-09-12T17:38:11.930Z',
      timeLabel: '01:38:11',
    },
    {
      id: '9b7b0bb3-dd43-47c9-9f7e-04b887dd7aed',
      author: 'Lorine',
      content:
        'Velit nam voluptas. Facilis reprehenderit eaque ipsum fugiat. Occaecati id vel eligendi qui eaque repudiandae. Et incidunt occaecati.',
      createdAt: '2021-04-23T09:34:30.165Z',
      timeLabel: '17:34:30',
    },
    {
      id: 'bacde2da-3f00-407a-ad04-79505e9cf24b',
      author: 'Shaun',
      content:
        'Sunt aliquam at harum consequatur nisi sequi consequatur. Nobis facilis repellendus et. Ut facilis incidunt pariatur. Et quibusdam sint suscipit. Commodi sapiente odit porro consectetur delectus quas magnam. Natus id deleniti provident.\n' +
        ' \rNisi aspernatur id voluptatem voluptatum aliquam adipisci. Laudantium quo rem tempora est necessitatibus. Iusto beatae expedita. Quo voluptatum in cupiditate totam non. Cum provident labore dolores laborum cumque libero sequi magni.\n' +
        ' \rUt deserunt facere debitis repellendus rem aspernatur. Perferendis fugit ratione dolore excepturi culpa molestias non nisi aut. Et necessitatibus non sit. Saepe saepe occaecati dicta.',
      createdAt: '2021-04-08T05:05:29.961Z',
      timeLabel: '13:05:29',
    },
    {
      id: 'c11cd4e4-c964-418f-89eb-47bde385204d',
      author: 'Roger',
      content: 'Omnis voluptatibus explicabo labore corrupti accusamus.',
      createdAt: '2020-11-19T16:16:24.700Z',
      timeLabel: '00:16:24',
    },
    {
      id: '9c827d55-15e7-4689-a720-b36a93342369',
      author: 'Roger',
      content:
        'Explicabo molestiae possimus vitae commodi repudiandae perspiciatis nemo laboriosam. Omnis consequatur ab at officia consectetur magnam ipsum. Quia sit facere omnis temporibus laboriosam. Praesentium est pariatur temporibus perferendis iusto . Necessitatibus consectetur est perferendis repellendus.',
      createdAt: '2020-11-14T02:44:33.586Z',
      timeLabel: '10:44:33',
    },
    {
      id: '51420061-bedb-47b7-a3f8-42f8c9773640',
      author: 'Lottie',
      content:
        'Libero consequatur in et doloremque consectetur ipsum non. Voluptate expedita exercitationem. Sed dolorum explicabo neque dolores. Consequatur culpa sit nemo dolores at. Deserunt cumque sunt ducimus officiis a architecto. Consequatur quia as periores.',
      createdAt: '2021-05-25T12:22:31.586Z',
      timeLabel: '20:22:31',
    },
    {
      id: 'ad6172e9-27cf-4c5e-9934-548d30a5c35e',
      author: 'Meda',
      content: 'voluptatem',
      createdAt: '2021-04-07T16:58:25.402Z',
      timeLabel: '00:58:25',
    },
    {
      id: 'd8c6ed49-3abc-4399-ab3f-6d4ce4ec0475',
      author: 'Dane',
      content:
        'Recusandae ea recusandae et ab dicta consequuntur quis molestias mollitia. Expedita numquam consequatur iusto dolorem expedita. Ut error aut. Doloremque dignissimos commodi dolorum corporis assumenda tempore et nemo. Voluptatem non facere of ficiis saepe ea et.\n' +
        ' \rUt harum est quam nobis occaecati. Nostrum ea aut ut porro ea. Eum provident temporibus ea. Praesentium natus natus. Commodi et facilis magni eaque ipsa quos sint sunt voluptatibus. Ducimus quasi eum ut vel.\n' +
        ' \rQuam et animi cupiditate ab pariatur nobis et. Enim molestiae nihil. Modi quasi sunt nostrum. Sed in voluptas voluptatem. Ut facere odit deleniti consequuntur.',
      createdAt: '2020-12-23T02:03:31.407Z',
      timeLabel: '10:03:31',
    },
    {
      id: '6eb98cd4-7eb3-485c-a313-8e99379af463',
      author: 'Lorine',
      content:
        'Ut ratione mollitia qui ut quia eos corporis quaerat.\n' +
        'Quibusdam dolores velit perspiciatis sed suscipit excepturi voluptatem quia in.\n' +
        'Mollitia qui et error ut illo suscipit accusantium cupiditate.\n' +
        'Qui voluptatem nihil est beatae ut sint.\n' +
        'Est fugiat unde aut impedit facere ea vitae omnis nisi.',
      createdAt: '2021-06-21T19:13:07.626Z',
      timeLabel: '03:13:07',
    },
    {
      id: '9b046a8f-bc8a-42d5-929d-43633244e933',
      author: 'Meda',
      content: 'aut',
      createdAt: '2020-08-12T12:53:25.876Z',
      timeLabel: '20:53:25',
    },
    {
      id: '41baa368-d71c-4b2b-914f-75e330393634',
      author: 'Roger',
      content:
        'Quo voluptas quidem. Qui voluptatem mollitia et. Necessitatibus error non blanditiis voluptas. Deserunt voluptatem nostrum dolore quia doloribus et eius.\n' +
        ' \rOdio ut iste harum aperiam ut non neque ut et. Sed nam nihil est maiores. Sit ut optio similique commodi et amet occaecati officia. Sit explicabo sunt consequatur possimus quia. Non voluptas consequatur sint consequuntur accusamus voluptatem.\n' +
        ' \rEt et molestias. Aut totam similique nisi omnis. Quae expedita ut laudantium iure neque et. Numquam minus molestiae ad quam accusantium at. Ut exercitationem in similique explicabo sed consequuntur.',
      createdAt: '2021-05-01T00:13:37.508Z',
      timeLabel: '08:13:37',
    },
  ];

  appState.username = users[parseInt(Math.random() * users.length)];

  const results = messageStore.fetchSync();
  if (results.length === 0) {
    messages.forEach(message => {
      messageStore.add(message);
    });
  }
});
