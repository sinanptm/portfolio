'use client';

import SimplifiedFloatingDock from '@/components/ui/floating-dock';
import { memo } from 'react';

const links = [
  { title: "GitHub", icon: "/assets/social/github.svg", href: "https://github.com/sinanptm" },
  { title: "LinkedIn", icon: "/assets/social/linkedin.svg", href: "https://www.linkedin.com/in/sinanptm" },
  { title: "Resume", icon: "/assets/social/resume.svg", href: "/resume" },
  { title: "Instagram", icon: "/assets/social/instagram.svg", href: "https://www.instagram.com/si_an_z" },
  { title: "Email", icon: "/assets/social/email.svg", href: "mailto:muhammedsinan0549@gmail.com" },
  { title: "phone", icon: "/assets/social/phone.svg", href: "tel:+918089507749" },
];

const NavMenu = () => {
  return (
    <SimplifiedFloatingDock items={links} />
  );
};

export default memo(NavMenu);