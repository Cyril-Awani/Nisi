'use client';

import { usePathname } from 'next/navigation';
import TopBar from '@/components/TopBar';

export default function TopBarWrapper() {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  return isHomepage ? <TopBar /> : null;
}