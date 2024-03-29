'use client';

import { Phone, X } from '@phosphor-icons/react';

import {
    SidebarContainer,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarNav,
    SidebarNavItem,
    SidebarOverlay,
} from './styles';
import { NavItems } from '@/data/header/navItems';
import { Button } from '@/components/buttons/Button';
import { useSidebar } from '@/hooks/sidebar';

export function Sidebar() {
    const { isSidebarOpen, toggleSidebar } = useSidebar();

    return (
        <SidebarContainer isOpen={isSidebarOpen}>
            <SidebarOverlay isOpen={isSidebarOpen} />
            <SidebarContent isOpen={isSidebarOpen}>
                <SidebarHeader>
                    <button className="close" onClick={toggleSidebar}>
                        <X size={30} weight="bold" />
                    </button>
                </SidebarHeader>
                <SidebarNav>
                    {NavItems.map((item) => (
                        <SidebarNavItem
                            onClick={toggleSidebar}
                            href={item.id}
                            key={item.id}
                        >
                            {item.label}
                        </SidebarNavItem>
                    ))}
                </SidebarNav>
                <SidebarFooter>
                    <Button
                        isExternalLink
                        href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}
                        Icon={<Phone weight="bold" />}
                    >
                        Contato
                    </Button>
                </SidebarFooter>
            </SidebarContent>
        </SidebarContainer>
    );
}
