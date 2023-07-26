import cn from 'clsx'
import Link from 'next/link'
import s from './UserNav.module.css'
import { Avatar } from '@components/common'
import { useUI } from '@components/ui/context'
import { Menu } from '@components/icons'
import CustomerMenuContent from './CustomerMenuContent'
import React from 'react'
import {
  Dropdown,
  DropdownTrigger as DropdownTriggerInst,
  Button,
} from '@components/ui'
import { useSession, signIn, signOut } from 'next-auth/react'

const UserNav = ({ className }) => {
  const { openModal, setSidebarView, openSidebar } = useUI()
  const { data: user } = useSession()
  const DropdownTrigger = user ? DropdownTriggerInst : React.Fragment

  return (
    <nav className={cn(s.root, className)}>
      <ul className={s.list}>
        <li className={s.item}>
          <Dropdown>
            <DropdownTrigger>
              <span
                aria-label="Menu"
                className={s.avatarButton}
                onClick={() => (user ? null : openModal())}
              >
                <Avatar />
              </span>
            </DropdownTrigger>
            <CustomerMenuContent />
          </Dropdown>
        </li>
        <li className={s.mobileMenu}>
          <Button
            className={s.item}
            aria-label="Menu"
            variant="naked"
            onClick={() => {
              setSidebarView('MOBILE_MENU_VIEW')
              openSidebar()
            }}
          >
            <Menu />
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default UserNav
