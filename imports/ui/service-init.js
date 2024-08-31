// src/services/group/group.constant.ts
const USER_GROUPS_DEFAULT = [
  { locked: true, title: 'Participants', _id: 'attend' },
  { locked: true, title: 'Speakers', _id: 'speaker' },
  { locked: true, title: 'Sponsors', _id: 'sponsor' },
  { locked: true, title: 'Staff', _id: 'staff' },
  {
    locked: true,
    title: 'External Support',
    _id: 'sup_ext',
  },
  { locked: true, title: 'Online', _id: 'online' },
  { locked: true, title: 'In-Person', _id: 'in_per' },
  {
    locked: true,
    title: 'Platform Support',
    _id: 'support',
  },
  // Messaging permission groups
  { locked: true, title: 'Do Not Message', _id: 'msg_not' },
  { locked: true, title: 'Messaging Off', _id: 'msg_off' },
  { locked: true, title: 'VIP', _id: 'vip' },
]
const USER_GROUPS_MENTOR = [
  { locked: true, title: 'Mentor', _id: 'mentor' },
  { locked: true, title: 'Mentee', _id: 'mentee' },
  { locked: true, title: 'Participants', _id: 'attend' },
  { locked: true, title: 'Sponsors', _id: 'sponsor' },
  { locked: true, title: 'Staff', _id: 'staff' },
  {
    locked: true,
    title: 'Platform Support',
    _id: 'support',
  },
]
const PARTY_GROUPS_DEFAULT = [
  {
    locked: true,
    title: 'Standard Table',
    _id: 'standard',
  },
]
const SESSION_GROUPS_DEFAULT = [
  {
    locked: true,
    title: 'Programme',
    _id: 'prog',
  },
]
const SPONSOR_GROUPS_DEFAULT = [
  {
    locked: true,
    title: 'Sponsors',
    _id: 'spon',
  },
]
const USER_GROUPS_COMPETITION = [
  { locked: true, title: 'Judge', _id: 'Judge' },
  { locked: true, title: 'Mediator', _id: 'Mediator' },
  { locked: true, title: 'Professional', _id: 'pro' },
  { locked: true, title: 'Supervisor', _id: 'sup' },
  { locked: true, title: 'Team Members', _id: 'team' },
  { locked: true, title: 'Team Leader', _id: 'lead' },
  { locked: true, title: 'Coach', _id: 'coach' },
  { locked: true, title: 'Observer', _id: 'observer' },
  { locked: true, title: 'Volunteer', _id: 'volunteer' },
]
const USER_GROUP_OPTIONS = USER_GROUPS_DEFAULT.map((x) => {
  return { label: x.title, value: x._id }
})
const USER_GROUPS_APP_DEFAULT = [
  { locked: true, title: 'Admin', _id: 'admin' },
  {
    locked: true,
    title: 'Platform Support',
    _id: 'support',
  },
  {
    locked: true,
    title: 'Staff',
    _id: 'staff',
  },
]
const SESSION_GROUP_OPTIONS = SESSION_GROUPS_DEFAULT.map(
  (x) => {
    return { label: x.title, value: x._id }
  },
)
const RESOURCE_GROUPS_DEFAULT = [
  {
    locked: true,
    title: 'Documents',
    _id: '_doc',
  },
  {
    locked: true,
    title: 'Sponsor Documents',
    _id: '_spon',
  },
  {
    locked: true,
    title: 'Certificates',
    _id: '_cert',
  },
  {
    locked: true,
    title: 'Presentations',
    _id: '_pre',
  },
  {
    locked: true,
    title: 'Speaker Presentation',
    _id: '_speak_pre',
  },
  {
    locked: true,
    title: 'Videos',
    _id: '_vid',
  },
  {
    locked: true,
    title: 'Images',
    _id: '_img',
  },
  {
    locked: true,
    title: 'Stage Screensavers',
    _id: '_img_stg',
  },
]
const RESOURCE_GROUPS_ICC = [
  {
    locked: true,
    title: 'ICC Rules',
    _id: '_icc_rules',
  },
  {
    locked: true,
    title: 'Mock Cases',
    _id: '_icc_cases',
  },
]

// src/services/feature/feature.constant.ts
const FEATURES = {
  _home: {
    _id: '_home',
    title: 'Home',
    about: '',
    icon: 'lindua:home2',
    color: '#20bf6b',
  },
  _stage: {
    _id: '_stage',
    title: 'Stage',
    about: '',
    icon: 'lindua:camera',
    color: '#eb3b5a',
  },
  // _workshop: {
  //   _id: '_workshop',
  //   title: 'Live Session',
  //   about: '',
  //   icon: 'moon:feed',
  //   color: '#fc5c65',
  //   // linear:group-work
  // },
  _expo: {
    _id: '_expo',
    title: 'Exhibition',
    about: '',
    icon: 'lindua:store',
  },
  _expo_manager: {
    _id: '_expo_manager',
    title: 'Expo Booth Manager',
    icon: 'linear:chart-settings',
  },
  _party: {
    _id: '_party',
    title: 'Networking',
    about: '',
    icon: 'lindua:glass-cocktail',
    color: '#a55eea',
  },
  _session: {
    _id: '_session',
    title: 'Programme',
    about: '',
    icon: 'linear:calendar-text',
  },
  _fight: {
    _id: '_fight',
    title: 'Session',
    about: '',
    icon: 'lindua:fencing',
  },
  _qna: {
    _id: '_qna',
    title: 'Q&A',
    about: '',
    icon: 'lindua:bubble-question',
  },
  _event: {
    _id: '_event',
    title: 'Event',
    about: '',
    icon: 'linear:calendar-full',
  },
  _event_upcoming: {
    _id: '_event_upcoming',
    title: 'Upcoming Events',
    about: '',
    icon: 'linear:calendar-full',
  },
  _people: {
    _id: '_people',
    title: 'People',
    about: '',
    icon: 'linear:users2',
  },
  _dirtemp: {
    _id: '_dirtemp',
    title: 'Directory',
    about: '',
    icon: 'linear:contacts',
  },
  _info: {
    _id: '_info',
    title: 'Info',
    about: '',
    icon: 'linear:notification-circle',
  },
  _about: {
    _id: '_about',
    title: 'About',
    about: '',
    isHidden: true,
    icon: 'linear:document',
  },
  _sponsor: {
    _id: '_sponsor',
    title: 'Sponsor',
    about: '',
    icon: 'linear:diamond4',
  },
  _survey: {
    _id: '_survey',
    title: 'Survey',
    about: '',
    icon: 'linear:register',
  },
  _calculator: {
    _id: '_calculator',
    title: 'Calculator',
    about: '',
    icon: 'linear:calculator',
  },
  _chat: {
    _id: '_chat',
    title: 'Chat',
    about: '',
    icon: 'linear:bubbles',
  },
  _message: {
    _id: '_message',
    title: 'Private Messaging',
    about: '',
    icon: 'linear:envelope',
  },
  _facebook: {
    _id: '_facebook',
    title: 'Facebook Integration',
    about: '',
    icon: 'moon:facebook',
  },
  _twitter: {
    _id: '_twitter',
    title: 'Twitter Integration',
    about: '',
    icon: 'moon:twitter',
  },
  _video: {
    _id: '_video',
    title: 'Video',
    about: '',
    icon: 'linear:film-play',
  },
  _discussion: {
    _id: '_discussion',
    title: 'Discussions',
    about: '',
    icon: 'lindua:bubbles',
  },
  _social: {
    _id: '_social',
    title: 'Social',
    about: '',
    icon: 'linear:layers',
  },
  _feed: {
    _id: '_feed',
    title: 'Feed',
    about: '',
    icon: 'linear:layers',
  },
  _photo_booth: {
    _id: '_photo_booth',
    title: 'Photo Booth',
    about: '',
    icon: 'linear:picture2',
  },
  _qns: {
    _id: '_qns',
    title: 'Notifications',
    about: '',
    icon: 'lindua:bell2',
  },
  _note: {
    _id: '_note',
    title: 'Notes',
    about: '',
    icon: 'linear:pencil3',
  },
  _doc: {
    _id: '_doc',
    title: 'Docs',
    about: '',
    icon: 'lindua:newsletter',
  },
  _gallery: {
    _id: '_gallery',
    title: 'Gallery',
    about: '',
    icon: 'moon:images2',
  },
  _header: {
    _id: '_header',
    title: 'Header Image',
    about: '',
    icon: 'moon:image2',
  },
  _pick: {
    _id: '_pick',
    title: 'Picker',
    about: '',
    isHidden: true,
    icon: 'moon:toggle',
  },
  _holder: {
    _id: '_holder',
    title: 'Placeholder',
    about: '',
    isHidden: true,
    icon: 'material:select-all',
  },
  /* Mentoring */
  _circle: {
    _id: '_circle',
    title: 'My Group',
    about: '',
    icon: 'linear:group-work',
  },
  /* Custom */
  _resource: {
    _id: '_resource',
    title: 'Resources',
    about: '',
    icon: 'lindua:newsletters',
  },
  _arbitration: {
    _id: '_arbitration',
    title: 'Resources',
    about: '',
    icon: 'lindua:newsletters',
  },
  /* Competition */
  _competition: {
    _id: '_competition',
    title: 'Info',
    about: '',
    icon: 'lindua:trophy',
    // teams moon:users3
  },
  _team: {
    _id: '_team',
    title: 'Teams',
    about: '',
    icon: 'moon:users3',
  },
  _my_team: {
    _id: '_my_team',
    title: 'My Team',
    about: '',
    icon: 'linear:users-plus',
  },
  _schedule_pick: {
    _id: '_schedule_pick',
    title: 'Schedule Picker',
    about: '',
    icon: 'lindua:calendar-time',
  },
  _countdown: {
    _id: '_countdown',
    title: 'Countdown Timer',
    about: '',
    icon: 'lindua:self-timer2',
  },
  _v_test: {
    _id: '_v_test',
    title: 'Version Test',
    about: '',
    icon: 'lindua:test-tube',
  },
}
const FEATURE_LIST = []
for (const key of Object.keys(FEATURES)) {
  FEATURE_LIST.push(FEATURES[key])
}

// src/services/page/page.init.ts
const PAGES = {
  __home: {
    _id: 'home_page',
    _type: '__home',
    title: 'Home Page',
    feature: '_home',
    icon: FEATURES._home.icon,
    _config: {},
  },
  __session: {
    _id: 'session_page',
    _type: '__session',
    title: 'Session Page',
    feature: '_session',
    icon: FEATURES._session.icon,
    _config: {
      headerTitle: 'Sessions',
      showHeader: true,
      showSearch: false,
      dataFilter: { grp_ids: ['prog'] },
    },
  },
  __fight: {
    _id: 'fight_page',
    _type: '__fight',
    title: 'Session Grid Page',
    feature: '_fight',
    icon: FEATURES._fight.icon,
    _config: {
      headerTitle: 'Sessions',
      showHeader: true,
      showTitle: true,
      showSearch: false,
      dataFilter: { grp_ids: ['fight'] },
    },
  },
  __qna: {
    _id: 'qna_page',
    _type: '__qna',
    title: 'Q&A Page',
    feature: '_qna',
    icon: FEATURES._qna.icon,
    _config: {
      headerTitle: 'Live Q&A',
      showHeader: true,
      showSearch: false,
      _type: 'q&a',
      dataFilter: { grp_ids: ['prog'] },
    },
  },
  __survey: {
    _id: 'survey_page',
    _type: '__survey',
    title: 'Survey Page',
    feature: '_survey',
    icon: FEATURES._survey.icon,
    _v: 522,
    _config: {
      headerTitle: 'Surveys',
      showHeader: true,
      showSearch: false,
    },
  },
  __event: {
    _id: 'event_page',
    _type: '__event',
    title: 'Event Page',
    feature: '_event',
    icon: FEATURES._event.icon,
    _config: {
      headerTitle: 'Events',
      showHeader: true,
      showSearch: false,
      dataFilter: { grp_ids: [] },
    },
  },
  __pick_stage: {
    _id: 'pick_stage_page',
    _type: '__pick_stage',
    title: 'Stage Picker Page',
    feature: '_pick',
    icon: FEATURES._pick.icon,
    _config: {
      list: [
        {
          _id: '36Ew',
          title: 'Stage 1',
          stage_id: '',
        },
        {
          _id: '0NdV',
          title: 'Stage 2',
          stage_id: '',
        },
      ],
    },
  },
  __people: {
    _id: 'people_page',
    _type: '__people',
    title: 'People Page',
    feature: '_people',
    icon: FEATURES._people.icon,
    _config: {
      headerTitle: 'Users',
      showHeader: true,
      isMsgOn: false,
      showSearch: false,
      dataFilter: { grp_ids: [] },
    },
  },
  __dirtemp: {
    _id: 'dirtemp_page',
    _type: '__dirtemp',
    title: 'Directory Page',
    feature: '_dirtemp',
    icon: FEATURES._dirtemp.icon,
    _config: {
      headerTitle: 'Directory',
      showHeader: true,
    },
  },
  __about: {
    _id: 'about_page',
    _type: '__about',
    title: 'About Page',
    feature: '_about',
    icon: FEATURES._about.icon,
  },
  __zoom: {
    _id: 'zoom_page',
    _type: '__zoom',
    title: 'Zoom Intro Page',
    feature: '_stage',
    icon: FEATURES._stage.icon,
  },
  __circle: {
    _id: 'circle_page',
    _type: '__circle',
    title: 'My Work Group Page',
    feature: '_circle',
    icon: FEATURES._circle.icon,
    _config: {
      headerTitle: 'My Group',
      showHeader: true,
      showSearch: false,
      dataFilter: { grp_ids: [] },
    },
  },
  __discussion: {
    _id: 'discussion_page',
    _type: '__discussion',
    title: 'Discussion Board Page',
    feature: '_discussion',
    icon: FEATURES._discussion.icon,
    _config: {
      headerTitle: 'Discussions',
      showHeader: true,
      showSearch: false,
      dataFilter: { grp_ids: [] },
    },
  },
  __social: {
    _id: 'social_page',
    _type: '__social',
    title: 'Social Feed Page',
    feature: '_social',
    icon: FEATURES._social.icon,
    _config: {
      headerTitle: 'Social Feed',
      showHeader: true,
      showSearch: false,
      _type: 'social',
      dataFilter: { grp_ids: [] },
    },
  },
  __feed: {
    _id: 'feed_page',
    _type: '__feed',
    title: 'Feed Page',
    feature: '_feed',
    icon: FEATURES._feed.icon,
    _config: {
      headerTitle: 'Discussion',
      showHeader: true,
      showSearch: false,
      _type: 'post',
      dataFilter: { grp_ids: [] },
    },
  },
  __chat: {
    _id: 'chat_page',
    _type: '__chat',
    title: 'Chat Page',
    feature: '_chat',
    icon: FEATURES._chat.icon,
    _config: {
      headerTitle: 'Chat',
      showHeader: true,
    },
  },
  __photo_booth: {
    _id: 'photo_booth_page',
    _type: '__photo_booth',
    title: 'Photo Booth',
    feature: '_photo_booth',
    _v: 475,
    icon: FEATURES._photo_booth.icon,
    _config: {
      headerIcon: 'linear:picture2',
      headerTitle: 'Photo Booth',
      showHeader: true,
      _type: 'booth',
      dataFilter: { grp_ids: [] },
    },
  },
  __resource_doc: {
    _id: 'resource_doc_page',
    _type: '__resource_doc',
    title: 'Document Gallery Page',
    feature: '_resource',
    icon: FEATURES._resource.icon,
    _config: {
      headerTitle: 'Documents',
      showHeader: true,
      showTitle: true,
      dataFilter: { grp_ids: ['_doc'] },
    },
  },
  __resource_vid: {
    _id: 'resource_vid_page',
    _type: '__resource_vid',
    title: 'Video Gallery Page',
    feature: '_video',
    icon: FEATURES._video.icon,
    _config: {
      headerTitle: 'Videos',
      showHeader: true,
      showTitle: true,
      dataFilter: { grp_ids: ['_vid'] },
    },
  },
  __resource_img: {
    _id: 'resource_img_page',
    _type: '__resource_img',
    title: 'Image Gallery Page',
    feature: '_gallery',
    icon: FEATURES._gallery.icon,
    _config: {
      headerTitle: 'Gallery',
      showHeader: true,
      showTitle: true,
      dataFilter: { grp_ids: ['_img'] },
    },
  },
  __doc: {
    _id: 'doc_page',
    _type: '__doc',
    title: 'Documents',
    feature: '_doc',
    icon: FEATURES._doc.icon,
  },
  __v_test: {
    _id: 'v_test_page',
    _type: '__v_test',
    title: 'Version Test',
    feature: '_v_test',
    icon: FEATURES._v_test.icon,
    isAdmin: true,
  },
  __qns: {
    _id: 'qns_page',
    _type: '__qns',
    title: 'Notifications Page',
    feature: '_qns',
    icon: FEATURES._qns.icon,
  },
  __note: {
    _id: 'note_page',
    _type: '__note',
    title: 'Notes Page',
    feature: '_note',
    icon: FEATURES._note.icon,
  },
  __stage: {
    _id: 'stage_page',
    _type: '__stage',
    title: 'Stage Page',
    feature: '_stage',
    icon: FEATURES._stage.icon,
  },
  // __workshop: {
  //   _id: 'workshop_page',
  //   _type: '__workshop',
  //   title: 'Live Session Page',
  //   feature: '_workshop',
  //   icon: FEATURES._workshop.icon,
  // },
  __party: {
    _id: 'party_page',
    _type: '__party',
    title: 'Networking Page',
    feature: '_party',
    icon: FEATURES._party.icon,
  },
  __expo: {
    _id: 'expo_page',
    _type: '__expo',
    title: 'Expo Page',
    feature: '_expo',
    icon: FEATURES._expo.icon,
  },
  __sponsor: {
    _id: 'sponsor_page',
    _type: '__sponsor',
    title: 'Sponsor Page',
    feature: '_sponsor',
    icon: FEATURES._sponsor.icon,
    _config: {
      headerTitle: 'Sponsors',
      showHeader: true,
      showTitle: true,
      dataFilter: { grp_ids: ['spon'] },
    },
  },
  __message: {
    _id: 'message_page',
    _type: '__message',
    title: 'Messages Page',
    feature: '_message',
    icon: FEATURES._message.icon,
  },
  __expo_manager: {
    _id: 'expo_manager_page',
    _type: '__expo_manager',
    title: 'Expo Booth Manager',
    feature: '_expo',
    icon: 'linear:chart-settings',
  },
  /* Competition */
  __team: {
    _id: 'team_page',
    _type: '__team',
    title: 'Teams Page',
    feature: '_team',
    _v: 481,
    icon: FEATURES._team.icon,
    _config: {
      headerTitle: 'Teams',
      showHeader: true,
      isMsgOn: false,
      showSearch: false,
      dataFilter: { grp_ids: [] },
    },
  },
  __my_team: {
    _id: 'my_team_page',
    _type: '__my_team',
    title: 'Team Manager Page',
    feature: '_team',
    icon: FEATURES._my_team.icon,
    _config: {},
  },
  __schedule_pick: {
    _id: 'schedule_page',
    _type: '__schedule_pick',
    title: 'Schedule Picker Page',
    feature: '_schedule_pick',
    icon: FEATURES._schedule_pick.icon,
  },
  /* Custom */
  __calculator: {
    _id: 'calculator_page',
    _type: '__calculator',
    title: 'ICC Calculator',
    feature: '_calculator',
    icon: FEATURES._calculator.icon,
  },
  /* Legacy */
  __resource: {
    _id: 'resource_page',
    _type: '__resource',
    title: 'Legacy Document Gallery Page',
    feature: '_resource',
    icon: FEATURES._resource.icon,
    _config: {
      headerTitle: 'Documents',
      showHeader: true,
      showTitle: true,
    },
  },
}

// src/services/layout/init/inner.init.ts
const LAYOUT_INNER = {
  A: {
    _id: 'layout_A',
    title: 'Model A Preset',
    icon: 'lindua:polygon2',
    _model: 'A',
    menu_id: 'compact_menu',
  },
  B: {
    _id: 'layout_B',
    title: 'Model B Preset',
    icon: 'lindua:polygon2',
    _model: 'B',
    bar: {
      tabs: {
        _style: 'icon-text',
        _items: [
          {
            _id: 'tab1',
            title: 'Agenda',
            icon: 'linear:calendar-text',
            page_id: '',
          },
          {
            _id: 'tab2',
            title: 'People',
            icon: 'linear:users2',
            page_id: '',
          },
          {
            _id: 'tab3',
            title: 'My',
            icon: 'linear:user',
            page_id: '',
          },
        ],
      },
      __actions: {
        _items: [],
      },
    },
  },
  C: {
    _id: 'layout_C',
    title: 'Model C Preset',
    icon: 'lindua:polygon2',
    _model: 'C',
    bar: {
      toggles: {
        _items: [
          {
            _id: 'toggle-c-1',
            showIcon: false,
            _action: 'menu',
            panelId: 'bubble_menu_inner_event',
            title: 'Menu',
          },
          {
            _id: 'toggle-c-2',
            showIcon: false,
            _action: 'menu',
            panelId: 'bubble_menu_inner_my',
            title: 'My',
          },
          {
            _id: 'toggle-c-3',
            showIcon: true,
            _action: 'panel',
            icon: 'moon:bell2',
            panelId: '_panel_qns',
          },
        ],
      },
      __actions: {
        _items: [],
      },
    },
  },
  D: {
    _id: 'layout_D',
    title: 'Model D Preset',
    icon: 'lindua:polygon2',
    _model: 'D',
    invertSides: false,
    img: '',
    bar: {
      topL: {
        _type: '__panels',
        align: 'top',
        __panels: [],
        __toggles: [],
        __tabs: [],
        __actions: [],
      },
      bottomL: {
        _type: '__toggles',
        align: 'top',
        __panels: [],
        __toggles: [
          {
            _id: 'toggle-d-1',
            showIcon: false,
            _action: 'menu',
            panelId: 'bubble_menu_inner_event',
            title: 'Event',
          },
          {
            _id: 'toggle-d-2',
            showIcon: false,
            _action: 'menu',
            panelId: 'bubble_menu_inner_my',
            title: 'My',
          },
        ],
        __tabs: [],
        __actions: [],
      },
      topR: {
        _type: '__panels',
        align: 'top',
        __panels: [],
        __toggles: [],
        __tabs: [],
        __actions: [],
      },
      bottomR: {
        _type: '__actions',
        align: 'bottom',
        __panels: [],
        __toggles: [],
        __tabs: [],
        __actions: [],
      },
    },
  },
  E: {
    _id: 'layout_E',
    title: 'Model E Preset',
    icon: 'lindua:polygon2',
    _model: 'E',
    bar: {
      _config: {
        align: 'center',
      },
      __toggles: [
        {
          _id: 'toggle-e-1',
          showIcon: false,
          _action: 'menu',
          panelId: 'bubble_menu_inner_event',
          title: 'Menu',
        },
      ],
    },
  },
}

// src/services/layout/init/outer.init.ts
const LAYOUT_OUTER = {
  A: {
    _id: 'layout_A',
    title: 'Model A Preset',
    icon: 'lindua:polygon2',
    _model: 'A',
    menu_id: 'compact_menu',
  },
  B: {
    _id: 'layout_B',
    title: 'Model B Preset',
    icon: 'lindua:polygon2',
    _model: 'B',
    bar: {
      tabs: {
        _style: 'icon-text',
        _items: [
          {
            _id: 'tab1',
            title: 'Agenda',
            icon: 'linear:calendar-text',
            page_id: '',
          },
          {
            _id: 'tab2',
            title: 'People',
            icon: 'linear:users2',
            page_id: '',
          },
          {
            _id: 'tab3',
            title: 'My',
            icon: 'linear:user',
            page_id: '',
          },
        ],
      },
      actions: {
        _items: [
          {
            _id: 'a-1',
            _action: 'note',
            icon: 'linear:pencil3',
            isEnabled: true,
            label: 'Note',
            title: 'Take a note',
          },
          {
            _id: 'a-2',
            _action: 'message',
            icon: 'linear:envelope',
            isEnabled: false,
            label: 'Message',
            title: 'Send a message',
          },
          {
            _id: 'a-3',
            _action: 'post',
            icon: 'linear:bubble-dots',
            isEnabled: false,
            label: 'Post',
            title: 'Create a post',
          },
          {
            _id: 'a-4',
            _action: 'tweet',
            icon: 'moon:twitter',
            isEnabled: false,
            label: 'Tweet',
            title: 'Create a Tweet',
          },
        ],
      },
    },
  },
  C: {
    _id: 'layout_C',
    title: 'Model C Preset',
    icon: 'lindua:polygon2',
    _model: 'C',
    bar: {
      toggles: {
        _items: [
          {
            _id: 'toggle-c-1',
            showIcon: false,
            _action: 'menu',
            panelId: 'bubble_menu_outer_portal',
            title: 'Event',
          },
          {
            _id: 'toggle-c-2',
            showIcon: false,
            _action: 'menu',
            panelId: 'bubble_menu_outer_my',
            title: 'My',
          },
          {
            _id: 'toggle-c-3',
            showIcon: true,
            _action: 'panel',
            icon: 'moon:bell2',
            panelId: '_panel_qns',
          },
        ],
      },
      actions: {
        _items: [
          {
            _id: 'a-1',
            _action: 'note',
            icon: 'linear:pencil3',
            isEnabled: true,
            label: 'Note',
            title: 'Take a note',
          },
          {
            _id: 'a-2',
            _action: 'message',
            icon: 'linear:envelope',
            isEnabled: false,
            label: 'Message',
            title: 'Send a message',
          },
          {
            _id: 'a-3',
            _action: 'post',
            icon: 'linear:bubble-dots',
            isEnabled: false,
            label: 'Post',
            title: 'Create a post',
          },
          {
            _id: 'a-4',
            _action: 'tweet',
            icon: 'moon:twitter',
            isEnabled: false,
            label: 'Tweet',
            title: 'Create a Tweet',
          },
        ],
      },
    },
  },
  D: {
    _id: 'layout_D',
    title: 'Model D Preset',
    icon: 'lindua:polygon2',
    _model: 'D',
    invertSides: false,
    img: '',
    bar: {
      topL: {
        _type: '__panels',
        align: 'top',
        __panels: [],
        __toggles: [],
        __tabs: [],
        __actions: [],
      },
      bottomL: {
        _type: '__toggles',
        align: 'top',
        __panels: [],
        __toggles: [
          {
            _id: 'toggle-d-1',
            showIcon: false,
            _action: 'menu',
            panelId: 'bubble_menu_outer_portal',
            title: 'Event',
          },
          {
            _id: 'toggle-d-2',
            showIcon: false,
            _action: 'menu',
            panelId: 'bubble_menu_outer_my',
            title: 'My',
          },
        ],
        __tabs: [],
        __actions: [],
      },
      topR: {
        _type: '__panels',
        align: 'top',
        __panels: [],
        __toggles: [],
        __tabs: [],
        __actions: [],
      },
      bottomR: {
        _type: '__actions',
        align: 'bottom',
        __panels: [],
        __toggles: [],
        __tabs: [],
        __actions: [],
      },
    },
  },
  E: {
    _id: 'layout_E',
    title: 'Model E Preset',
    icon: 'lindua:polygon2',
    _model: 'E',
    bar: {
      _config: {
        align: 'center',
      },
      __toggles: [
        {
          _id: 'toggle-e-1',
          showIcon: false,
          _action: 'menu',
          panelId: 'bubble_menu_outer_portal',
          title: 'Menu',
        },
      ],
    },
  },
}

// src/services/menu/init/bubble.init.ts
const BUBBLE_INNER_EVENT = {
  _id: 'bubble_menu_inner_event',
  title: 'Bubble Menu - Event',
  _type: 'bubble',
  header: 'main',
  icon: 'lindua:apps3',
  _items: [
    /* ROW 1 */
    {
      _id: '1',
      title: 'Row 1',
      isRow: true,
      expanded: true,
      noDrag: true,
      folderId: null,
    },
    /*  */
    // {
    //   folderId: '1',
    //   isItem: true,
    //   _id: 'QOn4FmX',
    //   _off: false,
    //   icon_on: true,
    //   icon: 'linear:camera-play',
    //   _mId: 'stage_menu',
    // },
    /* ROW 2 */
    {
      _id: '2',
      title: 'Row 2',
      isRow: true,
      expanded: true,
      noDrag: true,
      folderId: null,
    },
    /*  */
    {
      folderId: '2',
      isItem: true,
      _id: '2iht',
      _mId: 'photo_booth_menu',
    },
    {
      folderId: '2',
      isItem: true,
      _id: 'TzYX',
      _mId: 'resource_doc_menu',
      icon_on: true,
      icon: 'linear:papers',
    },
    {
      folderId: '2',
      isItem: true,
      _id: '_nb7',
      _mId: 'about_menu',
    },
    /* ROW 3 */
    {
      _id: '3',
      title: 'Row 3',
      isRow: true,
      expanded: true,
      noDrag: true,
      folderId: null,
    },
    /*  */
    {
      folderId: '3',
      isItem: true,
      _id: 'Yxib',
      _mId: 'sponsor_menu',
      icon_on: true,
      icon: 'linear:store',
    },
    {
      title: 'Participants',
      isFolder: true,
      expanded: true,
      folderId: '3',
      icon: 'linear:users2',
      _id: 'tZXkKWV',
    },
    /* Nested Rows */
    {
      title: 'Row 1',
      isRow: true,
      expanded: true,
      folderId: 'tZXkKWV',
      noDragging: true,
      _id: 'IthDz0d',
    },
    {
      title: 'Row 2',
      isRow: true,
      expanded: true,
      folderId: 'tZXkKWV',
      noDragging: true,
      _id: '5v8iCyO',
    },
    {
      title: 'Row 3',
      isRow: true,
      expanded: true,
      folderId: 'tZXkKWV',
      noDragging: true,
      _id: 'KwCNpk5',
    },
    /*  */
    {
      folderId: 'KwCNpk5',
      isItem: true,
      _id: 'YM7_wO8',
      _mId: 'attend_menu',
    },
    {
      folderId: 'KwCNpk5',
      isItem: true,
      _id: '-pe-x2A',
      _mId: 'speaker_menu',
    },
    {
      folderId: '3',
      isItem: true,
      _id: '6YWGApl',
      _mId: 'session_menu',
    },
  ],
}
const BUBBLE_INNER_MY = {
  _id: 'bubble_menu_inner_my',
  title: 'Bubble Menu - My',
  _type: 'bubble',
  header: 'user',
  icon: 'lindua:apps3',
  _items: [
    {
      _id: '1',
      title: 'Row 1',
      isRow: true,
      expanded: true,
      noDrag: true,
      folderId: null,
    },
    {
      _id: '2',
      title: 'Row 2',
      isRow: true,
      expanded: true,
      noDrag: true,
      folderId: null,
    },
    {
      _id: '3',
      title: 'Row 3',
      isRow: true,
      expanded: true,
      noDrag: true,
      folderId: null,
    },
    {
      folderId: '3',
      isItem: true,
      _id: 'Eu_EaPh',
      _mId: 'message_menu',
    },
    {
      folderId: '3',
      isItem: true,
      _id: 'wM3Eugo',
      _mId: 'note_menu',
    },
    {
      folderId: '2',
      isItem: true,
      _id: 'XIaU9O6',
      _mId: 'survey_menu',
    },
  ],
}
const BUBBLE_OUTER_PORTAL = {
  _id: 'bubble_menu_outer_portal',
  title: 'Bubble Menu - Portal',
  _type: 'bubble',
  header: 'main',
  icon: 'lindua:apps3',
  _items: [
    {
      _id: '1',
      title: 'Row 1',
      isRow: true,
      expanded: true,
      noDrag: true,
      folderId: null,
    },
    {
      _id: '2',
      title: 'Row 2',
      isRow: true,
      expanded: true,
      noDrag: true,
      folderId: null,
    },
    {
      _id: '3',
      title: 'Row 3',
      isRow: true,
      expanded: true,
      noDrag: true,
      folderId: null,
    },
    {
      folderId: '3',
      isItem: true,
      _id: 'dHkpjQv',
      _mId: 'event_menu',
    },
    {
      folderId: '3',
      isItem: true,
      _id: 'JTcJCkG',
      _mId: 'feed_menu',
    },
  ],
}
const BUBBLE_OUTER_MY = {
  _id: 'bubble_menu_outer_my',
  title: 'Bubble Menu - My',
  _type: 'bubble',
  header: 'user',
  icon: 'lindua:apps3',
  _items: [
    {
      _id: '1',
      title: 'Row 1',
      isRow: true,
      expanded: true,
      noDrag: true,
      folderId: null,
    },
    {
      _id: '2',
      title: 'Row 2',
      isRow: true,
      expanded: true,
      noDrag: true,
      folderId: null,
    },
    {
      _id: '3',
      title: 'Row 3',
      isRow: true,
      expanded: true,
      noDrag: true,
      folderId: null,
    },
    {
      folderId: '3',
      isItem: true,
      _id: 'Eu_EaPh',
      _mId: 'message_menu',
    },
    {
      folderId: '3',
      isItem: true,
      _id: 'wM3Eugo',
      _mId: 'note_menu',
    },
  ],
}

// src/services/menu/init/compact.init.ts
const COMPACT = {
  _id: 'compact_menu',
  title: 'Compact Menu',
  _type: 'compact',
  icon: 'moon:more',
  _items: [
    {
      isItem: true,
      _id: 'IR50',
      folderId: null,
      _mId: 'home_menu',
    },
    // {
    //   isItem: true,
    //   _id: 'cvEo',
    //   folderId: null,
    //   _mId: 'stage_menu',
    // },
    {
      isItem: true,
      _id: 'lwwh',
      folderId: null,
      _mId: 'sponsor_menu',
    },
    {
      isItem: true,
      _id: 'Uvk9',
      folderId: null,
      _mId: 'party_menu',
    },
    {
      isItem: true,
      _id: '_Gm3',
      folderId: null,
      _mId: 'resource_doc_menu',
    },
    {
      isItem: true,
      _id: 'Wuyt',
      folderId: null,
      _mId: 'expo_manager_menu',
    },
  ],
}

// src/services/menu/init/main.init.ts
const MAIN = [
  {
    _id: 'home_menu',
    title: FEATURES._home.title,
    _action: 'page',
    icon: FEATURES._home.icon,
    page_id: 'home_page',
  },
  // {
  //   _id: 'stage_menu',
  //   title: FEATURES._stage.title,
  //   _action: 'page',
  //   icon: FEATURES._stage.icon,
  //   page_id: 'stage_page',
  // },
  {
    _id: 'pick_stage_menu',
    title: `Stage ${FEATURES._pick.title}`,
    _action: 'page',
    icon: FEATURES._stage.icon,
    page_id: 'pick_stage_page',
  },
  {
    _id: 'party_menu',
    title: FEATURES._party.title,
    _action: 'page',
    icon: FEATURES._party.icon,
    page_id: 'party_page',
  },
  {
    _id: 'resource_doc_menu',
    title: FEATURES._resource.title,
    _action: 'page',
    icon: FEATURES._resource.icon,
    page_id: 'resource_doc_page',
  },
  {
    _id: 'resource_vid_menu',
    title: 'Videos',
    _action: 'page',
    icon: FEATURES._video.icon,
    page_id: 'resource_vid_page',
  },
  {
    _id: 'resource_img_menu',
    title: FEATURES._gallery.title,
    _action: 'page',
    icon: FEATURES._gallery.icon,
    page_id: 'resource_img_page',
  },
  {
    _id: 'expo_manager_menu',
    title: FEATURES._expo_manager.title,
    _action: 'page',
    icon: FEATURES._expo_manager.icon,
    page_id: 'expo_manager_page',
    g_On: true,
    g_ids: ['sponsor'],
  },
  {
    _id: 'attend_menu',
    title: 'Attendees',
    _action: 'page',
    icon: FEATURES._people.icon,
    page_id: 'attend_page',
  },
  {
    _id: 'session_menu',
    title: 'Programme',
    _action: 'page',
    icon: FEATURES._session.icon,
    page_id: 'session_page',
  },
  {
    _id: 'speaker_menu',
    title: 'Speakers',
    _action: 'page',
    icon: 'linear:mic2',
    page_id: 'speaker_page',
  },
  {
    _id: 'info_menu',
    title: FEATURES._info.title,
    _action: 'page',
    icon: FEATURES._info.icon,
    page_id: 'info_page',
  },
  {
    _id: 'about_menu',
    title: FEATURES._about.title,
    _action: 'page',
    icon: FEATURES._about.icon,
    page_id: 'about_page',
  },
  {
    _id: 'social_menu',
    title: FEATURES._social.title,
    _action: 'page',
    icon: FEATURES._social.icon,
    page_id: 'social_page',
  },
  {
    _id: 'feed_menu',
    title: FEATURES._feed.title,
    _action: 'page',
    icon: FEATURES._feed.icon,
    page_id: 'feed_page',
  },
  {
    _id: 'qns_menu',
    title: FEATURES._qns.title,
    _action: 'page',
    icon: FEATURES._qns.icon,
    page_id: 'qns_page',
  },
  {
    _id: 'note_menu',
    title: FEATURES._note.title,
    _action: 'page',
    icon: FEATURES._note.icon,
    page_id: 'note_page',
  },
  {
    _id: 'message_menu',
    title: 'Messages',
    _action: 'page',
    icon: FEATURES._message.icon,
    page_id: 'message_page',
  },
  {
    _id: 'sponsor_menu',
    title: 'Exhibition',
    _action: 'page',
    icon: FEATURES._expo.icon,
    page_id: 'sponsor_page',
  },
  {
    _id: 'photo_booth_menu',
    title: 'Photo Booth',
    _action: 'page',
    icon: FEATURES._photo_booth.icon,
    page_id: 'photo_booth_page',
  },
  {
    _id: 'survey_menu',
    title: 'Surveys',
    _action: 'page',
    icon: FEATURES._survey.icon,
    page_id: 'survey_page',
  },
]
const MAIN_OUTER = [
  {
    _id: 'resource_menu',
    title: FEATURES._resource.title,
    _action: 'page',
    icon: FEATURES._resource.icon,
    page_id: 'resource_page',
  },
  {
    _id: 'info_menu',
    title: FEATURES._info.title,
    _action: 'page',
    icon: FEATURES._info.icon,
    page_id: 'info_page',
  },
  {
    _id: 'about_menu',
    title: FEATURES._about.title,
    _action: 'page',
    icon: FEATURES._about.icon,
    page_id: 'about_page',
  },
  {
    _id: 'social_menu',
    title: FEATURES._social.title,
    _action: 'page',
    icon: FEATURES._social.icon,
    page_id: 'social_page',
  },
  {
    _id: 'feed_menu',
    title: FEATURES._feed.title,
    _action: 'page',
    icon: FEATURES._feed.icon,
    page_id: 'feed_page',
  },
  {
    _id: 'qns_menu',
    title: FEATURES._qns.title,
    _action: 'page',
    icon: FEATURES._qns.icon,
    page_id: 'qns_page',
  },
  {
    _id: 'note_menu',
    title: FEATURES._note.title,
    _action: 'page',
    icon: FEATURES._note.icon,
    page_id: 'note_page',
  },
  {
    _id: 'message_menu',
    title: 'Messages',
    _action: 'page',
    icon: FEATURES._message.icon,
    page_id: 'message_page',
  },
  {
    _id: 'event_menu',
    title: 'Events',
    _action: 'page',
    icon: FEATURES._event.icon,
    page_id: 'event_page',
  },
  {
    _id: 'dirtemp_menu',
    title: 'Directory',
    _action: 'page',
    icon: FEATURES._dirtemp.icon,
    page_id: 'dirtemp_page',
  },
  {
    _id: 'calculator_menu',
    title: 'Calculator',
    _action: 'page',
    icon: FEATURES._calculator.icon,
    page_id: 'calculator_page',
  },
  {
    _id: 'arbitration_menu',
    title: 'Arbitration & ADR',
    _action: 'page',
    icon: FEATURES._arbitration.icon,
    page_id: 'doc_page',
  },
]

// src/services/menu/menu.init.ts
const MAIN_MENU_ITEMS = MAIN
const MAIN_MENU_ITEMS_OUTER = MAIN_OUTER
const COMPACT_MENU = COMPACT
const COMPACT_MENU_ITEMS = [...COMPACT._items]
const BUBBLE_MENU_INNER_EVENT = BUBBLE_INNER_EVENT
const BUBBLE_MENU_INNER_MY = BUBBLE_INNER_MY
const BUBBLE_MENU_OUTER_PORTAL = BUBBLE_OUTER_PORTAL
const BUBBLE_MENU_OUTER_MY = BUBBLE_OUTER_MY

// src/services/designer/init/event.init.ts
const EDITOR_INNER = {
  title: 'Layout Preset',
  pages: [
    /* LIVE */
    // { ...PAGES.__stage },
    { ...PAGES.__pick_stage },
    { ...PAGES.__party },
    // { ...PAGES.__expo },
    {
      ...PAGES.__sponsor,
      title: 'Exhibition Page',
      _config: {
        ...PAGES.__sponsor._config,
        headerTitle: 'Exhibition',
        headerIcon: 'linear:store',
      },
    },
    { ...PAGES.__expo_manager },
    /* EVENT */
    {
      ...PAGES.__people,
      _id: 'attend_page',
      title: 'Attendees Page',
      _config: {
        ...PAGES.__people._config,
        headerTitle: 'Attendees',
        dataFilter: { grp_ids: ['attend'] },
      },
    },
    {
      ...PAGES.__people,
      _id: 'speaker_page',
      title: 'Speakers Page',
      icon: 'linear:mic2',
      _config: {
        ...PAGES.__people._config,
        headerTitle: 'Speakers',
        headerIcon: 'linear:mic2',
        dataFilter: { grp_ids: ['speaker'] },
      },
    },
    {
      ...PAGES.__session,
      title: 'Programme Page',
      _config: {
        ...PAGES.__session._config,
        headerTitle: 'Programme',
      },
    },
    { ...PAGES.__qna },
    { ...PAGES.__about },
    { ...PAGES.__feed },
    { ...PAGES.__social },
    { ...PAGES.__discussion },
    { ...PAGES.__photo_booth },
    {
      ...PAGES.__resource_doc,
      _config: {
        ...PAGES.__resource_doc._config,
        headerTitle: 'Resources',
      },
    },
    { ...PAGES.__resource_vid },
    { ...PAGES.__resource_img },
    /* SHARED */
    { ...PAGES.__home },
    { ...PAGES.__qns },
    { ...PAGES.__note },
    { ...PAGES.__message },
    { ...PAGES.__survey },
  ],
  profiles: [],
  mItems: [...MAIN_MENU_ITEMS],
  menus: [
    { ...COMPACT_MENU },
    { ...BUBBLE_MENU_INNER_EVENT },
    { ...BUBBLE_MENU_INNER_MY },
  ],
  layouts: [
    { ...LAYOUT_INNER.A },
    { ...LAYOUT_INNER.B },
    { ...LAYOUT_INNER.C },
    { ...LAYOUT_INNER.D },
    { ...LAYOUT_INNER.E },
  ],
  layoutConfig: {
    web: {
      S: {
        _on: true,
        layout_id: 'layout_C',
        landing: 'home_page',
      },
      M: {
        _on: true,
        layout_id: 'layout_A',
        landing: 'home_page',
      },
      L: {
        _on: true,
        layout_id: 'layout_A',
        landing: 'home_page',
      },
    },
    mob: {
      S: {
        _on: true,
        layout_id: 'layout_C',
        landing: 'about_page',
      },
      M: {
        _on: true,
        layout_id: 'layout_A',
        landing: 'about_page',
      },
      L: {
        _on: true,
        layout_id: 'layout_A',
        landing: 'about_page',
      },
    },
  },
}

// src/services/designer/init/portal.init.ts
const EDITOR_OUTER = {
  title: 'Layout Preset',
  pages: [
    { ...PAGES.__event },
    { ...PAGES.__about },
    { ...PAGES.__feed },
    { ...PAGES.__dirtemp },
    { ...PAGES.__calculator },
    /* SHARED */
    { ...PAGES.__home },
    { ...PAGES.__qns },
    { ...PAGES.__note },
    { ...PAGES.__message },
  ],
  profiles: [],
  mItems: [...MAIN_MENU_ITEMS_OUTER],
  menus: [
    // { ...COMPACT_MENU },
    { ...BUBBLE_MENU_OUTER_PORTAL },
    { ...BUBBLE_MENU_OUTER_MY },
  ],
  layouts: [
    { ...LAYOUT_OUTER.A },
    { ...LAYOUT_OUTER.B },
    { ...LAYOUT_OUTER.C },
    { ...LAYOUT_OUTER.D },
    { ...LAYOUT_OUTER.E },
  ],
  layoutConfig: {
    web: {
      S: {
        _on: true,
        layout_id: 'layout_C',
        landing: 'event_page',
      },
      M: {
        _on: true,
        layout_id: 'layout_E',
        landing: 'event_page',
      },
      L: {
        _on: true,
        layout_id: 'layout_E',
        landing: 'event_page',
      },
    },
    mob: {
      S: {
        _on: true,
        layout_id: 'layout_C',
        landing: 'event_page',
      },
      M: {
        _on: true,
        layout_id: 'layout_E',
        landing: 'event_page',
      },
      L: {
        _on: true,
        layout_id: 'layout_E',
        landing: 'event_page',
      },
    },
  },
}

// src/services/banner/banner.init.ts
const DEFAULT_SET_CONFIG = {
  showLabel: false,
  labelColor: '#4d4d4d',
  label: 'WE THANK OUR SPONSORS',
  bgColor: '#fff',
  padding: '15px',
  gap: '15px',
  stretch: false,
  showShadow: true,
}
const BANNER_SET = {
  banner: {
    _type: 'banner',
    widget: {
      _slots: [
        {
          _id: 'lUx7',
          sec: 10,
          anime: 'fadeIn',
          banners: [
            {
              _id: 'XDNv',
              banner_id: '',
            },
          ],
        },
      ],
    },
    __preview: {
      _config: { ...DEFAULT_SET_CONFIG },
    },
  },
}

// src/services/home/init/home.init.ts
const HOME = {
  header: {
    _size: 'S',
    color: '#ffffff',
    img: '',
    imgT: '',
  },
  widgets: [
    {
      _id: 'oyULGr4',
      _type: '__session',
      feature: '_session',
      icon: 'linear:calendar-full',
      title: 'Programme Widget',
      _config: {
        headerTitle: 'Sessions',
        showTitle: true,
        showHeader: false,
        showSearch: false,
        dataFilter: {
          grp_ids: ['prog'],
        },
      },
    },
    {
      _id: 'ZwqSU4E',
      _type: '__people',
      feature: '_people',
      icon: 'linear:users2',
      title: 'Speakers Widget',
      _config: {
        headerTitle: 'Users',
        showHeader: false,
        showTitle: true,
        isMsgOn: false,
        showSearch: false,
        dataFilter: {
          grp_ids: ['speaker'],
        },
      },
    },
    {
      _id: 'K1OfDHK',
      _type: '__people',
      feature: '_people',
      icon: 'linear:users2',
      title: 'Participants Widget',
      _config: {
        headerTitle: 'Users',
        showHeader: false,
        showTitle: true,
        isMsgOn: false,
        showSearch: false,
        dataFilter: {
          grp_ids: ['attend'],
        },
      },
    },
    {
      _id: 'TM0LBxI',
      _type: '__about',
      feature: '_about',
      icon: 'linear:document',
      title: 'About Widget',
      _config: {
        headerTitle: 'About',
        showHeader: false,
        content:
          '<p><span style="color: var(--brand);">Welcome</span></p>\n',
      },
    },
    {
      _id: 'P6SW4d8',
      _type: '__twitter',
      feature: '_twitter',
      icon: 'moon:twitter',
      title: 'Twitter Widget',
      _config: {
        headerTitle: 'Twitter',
        showHeader: false,
        url: '',
      },
    },
    {
      _id: 'rC4fFvF',
      _type: '__facebook',
      feature: '_facebook',
      icon: 'moon:facebook',
      title: 'Facebook Widget',
      _config: {
        headerTitle: 'Facebook',
        showHeader: false,
        url: '',
      },
    },
    {
      _id: 'kwYEgvX',
      _type: '__feed',
      feature: '_feed',
      icon: 'linear:layers',
      title: 'Feed Widget',
      _config: {
        headerTitle: 'News',
        showHeader: false,
        _type: 'post',
      },
    },
    {
      _id: '5v0AJPp',
      _type: '__photo_booth',
      feature: '_feed',
      icon: 'linear:picture2',
      title: 'Photo Booth',
      _config: {
        headerIcon: 'linear:picture2',
        headerTitle: 'Photo Booth',
        showHeader: true,
        _type: 'booth',
      },
    },
    {
      _id: 'tgaEWJE',
      _type: '__sponsor',
      feature: '_sponsor',
      icon: 'linear:diamond4',
      title: 'Sponsor Banners',
      _config: {
        headerTitle: 'Sponsors',
        showHeader: false,
        widget_id: '',
        ...DEFAULT_SET_CONFIG,
      },
    },
  ],
  layout: {
    _model: 'H1',
    H1: {
      color: '#dfe4e7',
      _columns: [
        {
          _id: 'wDsRbOe',
          ratio: 2.5,
          _rows: [
            {
              _id: 'C4bB',
              widget_id: '',
              ratio: 1,
              showTabs: true,
              tabs: [
                {
                  _id: '3CJV2f5',
                  title: 'Twitter',
                  widget_id: 'P6SW4d8',
                },
                {
                  _id: 'Szwiz8Z',
                  title: 'Facebook',
                  widget_id: 'rC4fFvF',
                },
              ],
            },
          ],
        },
        {
          _id: 'qrlNxR_',
          ratio: 5,
          _rows: [
            {
              _id: 'WgYN',
              widget_id: '',
              ratio: 1,
              showTabs: true,
              tabs: [
                {
                  _id: 'Ot99WS5',
                  title: 'About',
                  widget_id: 'TM0LBxI',
                },
                {
                  _id: 'R3RF9AV',
                  title: 'Speakers',
                  widget_id: 'ZwqSU4E',
                },
                {
                  _id: 'bFtqlSP',
                  title: 'Programme',
                  widget_id: 'oyULGr4',
                },
                {
                  _id: 'MkFjW0N',
                  title: 'Participants',
                  widget_id: 'K1OfDHK',
                },
                {
                  _id: 'y7PIoDY',
                  title: 'News',
                  widget_id: 'kwYEgvX',
                },
              ],
            },
          ],
        },
        {
          _id: 'Etv2pVN',
          ratio: 2.5,
          _rows: [
            {
              _id: 'cCZN',
              widget_id: 'tgaEWJE',
              ratio: 1,
              showTabs: false,
              tabs: [],
            },
          ],
        },
      ],
    },
  },
  colors: {
    '--expo-brand': '#0b49ad',
    '--expo-tabs': '#0b49ad',
    '--custom-text-1': '#AEBC3B',
  },
}

// src/services/home/init/kiosk.init.ts
const KIOSK = {
  header: {
    _size: 'S',
    color: '#ffffff',
    img: '',
    imgT: '',
  },
  widgets: [
    {
      _id: '4Xmw3Ck',
      _type: '__reps',
      feature: '_people',
      icon: 'linear:users2',
      title: 'Representatives Widget',
      _config: {
        headerTitle: 'Our Representatives',
        showHeader: true,
        showTitle: true,
        isMsgOn: true,
        showSearch: false,
        dataFilter: {
          grp_ids: [],
        },
      },
    },
    {
      _id: 'pEW5SQd',
      _type: '__message_kiosk',
      feature: '_message',
      icon: 'linear:envelope',
      title: 'Private Chat Widget',
      _config: {
        headerTitle: 'Private Chat',
        showHeader: true,
        showTitle: true,
      },
    },
    {
      _id: 'SG3Jbp9',
      _type: '__about',
      feature: '_about',
      icon: 'linear:document',
      title: 'About Widget',
      _config: {
        headerTitle: 'About',
        showHeader: false,
        content:
          '<p><span style="color: var(--brand);">About</span></p>\n',
      },
    },
    {
      _id: '7ZZZ_PE',
      _type: '__twitter',
      feature: '_twitter',
      icon: 'moon:twitter',
      title: 'Twitter Widget',
      _config: {
        headerTitle: 'Twitter',
        showHeader: false,
        url: '',
      },
    },
    {
      _id: 'FLe34tU',
      _type: '__facebook',
      feature: '_facebook',
      icon: 'moon:facebook',
      title: 'Facebook Widget',
      _config: {
        headerTitle: 'Facebook',
        showHeader: false,
        url: '',
      },
    },
    {
      _id: 'AplWy9r',
      _type: '__video',
      feature: '_video',
      icon: 'linear:film-play',
      title: 'Video Gallery Widget',
      _config: {
        headerTitle: 'Videos',
        showHeader: false,
        _items: [],
      },
    },
    {
      _id: '1HKzSSj',
      _type: '__doc',
      feature: '_doc',
      icon: 'lindua:newsletter',
      title: 'Documents Widget',
      _config: {
        headerTitle: 'Documents',
        showHeader: false,
        _items: [],
      },
    },
  ],
  layout: {
    _model: 'H1',
    H1: {
      color: '#dfe4e7',
      _columns: [
        {
          _id: '68IhaKR',
          ratio: 2.5,
          _rows: [
            {
              _id: '2R0WUun',
              ratio: 1,
              showTabs: false,
              widget_id: '4Xmw3Ck',
              tabs: [],
            },
            {
              _id: 'U-sv5Ma',
              ratio: 1,
              showTabs: false,
              widget_id: 'pEW5SQd',
              tabs: [],
            },
          ],
        },
        {
          _id: 'k2XTSxF',
          ratio: 5,
          _rows: [
            {
              _id: 'AB7d3Lv',
              ratio: 1,
              showTabs: false,
              widget_id: 'SG3Jbp9',
              tabs: [],
            },
          ],
        },
        {
          _id: 'air_h1b',
          ratio: 2.5,
          _rows: [
            {
              _id: '3H9WQUD',
              ratio: 1,
              showTabs: true,
              widget_id: '',
              tabs: [
                {
                  _id: 'zGqRT3D',
                  title: 'Twitter',
                  widget_id: '7ZZZ_PE',
                },
                {
                  _id: 'J1X0kuM',
                  title: 'Facebook',
                  widget_id: 'FLe34tU',
                },
              ],
            },
            {
              _id: 'kq0dI8O',
              ratio: 1,
              showTabs: true,
              widget_id: '',
              tabs: [
                {
                  _id: '43GLsNh',
                  title: 'Videos',
                  widget_id: 'AplWy9r',
                },
                {
                  _id: 'YLM-Wpf',
                  title: 'Downloads',
                  widget_id: '1HKzSSj',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  colors: {
    '--expo-brand': '#0b49ad',
    '--expo-tabs': '#0b49ad',
    '--custom-text-1': '#AEBC3B',
  },
}

// src/services/scheme/scheme.init.ts
const COLORS = {
  '--brand': '#007dff',
  '--menu-bg': '#3c3a45',
  '--menu-icons': '#007dff',
  '--main-menu-items': '#007dff',
  '--menu-accent': '#007dff',
  '--menu-accent-2': '#007dff',
  '--header-button': '#007dff',
  '--header-icon': '#007dff',
  '--header-bar': '#007dff',
  '--list-tabs': '#007dff',
  '--list-title': '#007dff',
}

// src/services/classifier/classifier.constant.ts
const SPONSOR_CATEGORIES_DEFAULT = [
  { title: 'Organiser', _id: 'orga' },
  { title: 'Diamond', _id: 'diamond' },
  { title: 'Platinum', _id: 'platinum' },
  { title: 'Gold', _id: 'gold' },
  { title: 'Silver', _id: 'silver' },
  { title: 'Bronze', _id: 'bronze' },
  { title: 'Branding', _id: 'brand' },
  { title: 'Supporters', _id: 'supporters' },
  { title: 'Media Partner', _id: 'media-partner' },
]
const SESSION_CATEGORIES_DEFAULT = [
  { title: 'Welcome', _id: 'W', color: '#0b5b9c' },
  { title: 'Keynote', _id: 'K', color: '#3598d8' },
  { title: 'Session', _id: 'S', color: '#82b839' },
  { title: 'Panel', _id: 'P', color: '#3598d8' },
  { title: 'Discussion', _id: 'D', color: '#f29c2f' },
  { title: 'Break', _id: 'B', color: '#203548' },
  { title: 'Closing', _id: 'C', color: '#0b5b9c' },
  { title: 'Reception', _id: 'R', color: '#1e344a' },
  { title: 'Networking', _id: 'N', color: '#1e344a' },
]
const USER_LABEL_DEFAULT = [
  { title: 'Online', _id: 'online', color: '#0b5b9c' },
  { title: 'In-Person', _id: 'in_per', color: '#3598d8' },
]
const USER_STICKERS_COMPETITION = [
  {
    locked: true,
    title: 'Newcomer',
    _id: 'Newcomer',
    color: '#e0aeae',
  },
  {
    locked: true,
    title: 'Returning',
    _id: 'Returning',
    color: '#92b4f1',
  },
  { locked: true, title: 'High Priority', _id: 'Priority' },
  { locked: true, title: 'Native Lang', _id: 'NativeLang' },
  { locked: true, title: 'Fluent Lang', _id: 'FluentLang' },
  { locked: true, title: 'Good Lang', _id: 'GoodLang' },
]
const REGISTRATION_STICKERS_COMPETITION = [
  {
    locked: true,
    title: 'Newcomer',
    _id: 'Newcomer',
    color: '#e0aeae',
  },
]

// src/services/classifier/init/event.init.ts
const CLASSIFIERS_EVENT = {
  _people: {
    tags: [],
    keywords: [],
    labels: [...USER_LABEL_DEFAULT],
    categories: [],
    stickers: [],
  },
  _session: {
    tags: [],
    keywords: [],
    labels: [],
    categories: [...SESSION_CATEGORIES_DEFAULT],
    stickers: [],
  },
  _company: {
    tags: [],
    keywords: [],
    labels: [],
    categories: [],
    stickers: [],
  },
  _sponsor: {
    tags: [],
    keywords: [],
    labels: [],
    categories: [...SPONSOR_CATEGORIES_DEFAULT],
    stickers: [],
  },
  _regi: {
    stickers: [],
  },
}

// src/services/classifier/init/event-portal.init.ts
const CLASSIFIERS_PORTAL = {
  _people: {
    tags: [],
    keywords: [],
    labels: [],
    categories: [],
    stickers: [],
  },
  _event: {
    tags: [],
    keywords: [],
    labels: [],
    categories: [],
    stickers: [],
  },
  _company: {
    tags: [],
    keywords: [],
    labels: [],
    categories: [],
    stickers: [],
  },
  _sponsor: {
    tags: [],
    keywords: [],
    labels: [],
    categories: [...SPONSOR_CATEGORIES_DEFAULT],
    stickers: [],
  },
}

// src/services/team/team.init.ts
const TEAM_INITIAL_VALUES = {
  member_limit: 2,
  coach_limit: 1,
  pub: true,
  grp_ids: [],
  leader_id: '',
  tz: '',
  user_ids: [],
  member_ids: [],
  coach_ids: [],
  pool_ids: [],
}
export {
  CLASSIFIERS_EVENT,
  CLASSIFIERS_PORTAL,
  COLORS,
  EDITOR_INNER,
  EDITOR_OUTER,
  HOME,
  KIOSK,
  PARTY_GROUPS_DEFAULT,
  REGISTRATION_STICKERS_COMPETITION,
  RESOURCE_GROUPS_DEFAULT,
  RESOURCE_GROUPS_ICC,
  SESSION_GROUPS_DEFAULT,
  SPONSOR_GROUPS_DEFAULT,
  TEAM_INITIAL_VALUES,
  USER_GROUPS_APP_DEFAULT,
  USER_GROUPS_COMPETITION,
  USER_GROUPS_DEFAULT,
  USER_GROUPS_MENTOR,
  USER_STICKERS_COMPETITION,
}
