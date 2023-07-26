import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Logo, Container } from '@components/ui'
import {  UserNav } from '@components/common'


const Navbar = ({ links }) => (
  <NavbarRoot>
    <Container clean className="mx-auto max-w-8xl md:px-20 px-6">
      <div className={s.nav}>
        <div className="flex items-center flex-1">
          <Link href="/" className={s.logo} aria-label="Logo">
            <Logo />
          </Link>
          <nav className={s.navMenu}>
            {links?.map((l) => (
              <Link href={l.href} key={l.href} className={s.link}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="justify-center flex-1 hidden lg:flex"></div>
        {/* <a
          href="mailto:tamjid430@gmai.com"
          className="flex items-center justify-end flex-1 space-x-8"
        >
          tamjid430@gmai.com
        </a> */}
        <div className="flex items-center justify-end flex-1 space-x-8">
          <UserNav />
        </div>
      </div>
    </Container>
  </NavbarRoot>
)

export default Navbar
