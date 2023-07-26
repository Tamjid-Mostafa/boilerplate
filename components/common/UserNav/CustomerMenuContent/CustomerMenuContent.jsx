import cn from 'clsx'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { Moon, Sun } from '@components/icons'
import s from './CustomerMenuContent.module.css'
import {
  DropdownContent,
  DropdownMenuItem,
} from '@components/ui/Dropdown/Dropdown'
import { Button, Text } from '@components/ui'
import { useSession, signIn, signOut } from 'next-auth/react'

const LINKS = [
  {
    name: 'Profile',
    href: '/profile',
  },
  {
    name: 'Drafts',
    href: '/drafts',
  },
  {
    name: 'Published',
    href: '/published',
  },
]

export default function CustomerMenuContent() {
  const router = useRouter()
  const { pathname } = useRouter()
  const { theme, setTheme } = useTheme()
  const { data: session } = useSession()
  function handleClick(_, href) {
    router.push(href)
  }

  return (
    <DropdownContent sideOffset={10} id="CustomerMenuContent">
      {LINKS.map(({ name, href }) => (
        <DropdownMenuItem key={href}>
          <a
            className={cn(s.link, {
              [s.active]: pathname === href,
            })}
            onClick={(e) => handleClick(e, href)}
          >
            {name}
          </a>
        </DropdownMenuItem>
      ))}
      <DropdownMenuItem>
        <a
          className={cn(s.link, 'justify-between')}
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }}
        >
          <div>
            Theme: <strong>{theme}</strong>{' '}
          </div>
          <div className="ml-3">
            {theme == 'dark' ? (
              <Moon width={20} height={20} />
            ) : (
              <Sun width={20} height={20} />
            )}
          </div>
        </a>
      </DropdownMenuItem>
      <DropdownMenuItem>
        {/* <a
          className={cn(s.link, 'border-t border-accent-2 mt-4')}
        >
          Logout
        </a> */}

        {session && (
          <>
            <Text
              variant="body"
              className={cn(s.link, 'border-t border-accent-2 mt-4 flex flex-col gap-2 text-start')}
            >
              <span>{session?.user?.name}</span>
              <span>{session?.user?.email}</span>
            </Text>
            <Button
              variant="naked"
              onClick={() => signOut()}
              className={cn(s.link, '')}
            >
              Sign out
            </Button>
          </>
        )}
      </DropdownMenuItem>
    </DropdownContent>
  )
}
