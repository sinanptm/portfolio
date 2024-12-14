import { usePathname } from 'next/navigation';
import { useCallback } from 'react';

const useIsActiveLink = () => {
    const pathname = usePathname();

    const isActive = useCallback(
        (href: string) => {
            if (href === '/' && pathname === '/') return true; 
            if (pathname === href) return true; 
            if (href !== '/' && pathname.startsWith(href)) return true;
            return false;
        },
        [pathname]
    );

    return isActive;
};

export default useIsActiveLink;
