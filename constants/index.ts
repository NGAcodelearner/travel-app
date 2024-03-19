import { FiMail, FiPhone, FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

//navbar
export const NAV_LINKS = [
    {href: '/', key: 'home', label: 'Home'},
    { href: '/', key: 'services', label: 'Services' },
  { href: '/', key: 'pricing ', label: 'Pricing ' },
  { href: '/', key: 'contact_us', label: 'Contact Us' },
]

export const Features = [
    {
        title: "Leave No Trace Principle",
        description: "Follow the Leave No Trace principles to minimize your impact on the environment. Pack out all trash, minimize campfire impacts, and respect wildlife.",
        icon: "leaf"
    },
    {
        title: "Trail Etiquette",
        description: "Be courteous to other campers and hikers. Yield to uphill hikers, keep noise levels down, and stay on designated trails to protect the ecosystem.",
        icon: "hiking"
    },
    {
        title: "Campfire Safety",
        description: "Follow local regulations regarding campfires. Always build fires in designated fire rings, fully extinguish them before leaving, and never leave a fire unattended.",
        icon: "fire"
    },
    {
        title: "Wildlife Awareness",
        description: "Observe wildlife from a distance and avoid feeding or approaching animals. Store food securely to prevent attracting wildlife to your campsite.",
        icon: "animal"
    }
];

export const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: [
        'About Us',
        'Environment',
        'Jobs',
        'Privacy Policy',
        'Contact Us',
      ],
    },
    {
      title: 'Our Community',
      links: ['Climbing ', 'Hiking '],
    },
  ];

  export const FOOTER_CONTACT = {
    title: 'Contact Us',
    links: [
      { label: 'Admin Officer', value: '123-456-7890' },
      { label: 'Email Officer', value: 'hilink@akinthil.com' },
    ],
  };

 