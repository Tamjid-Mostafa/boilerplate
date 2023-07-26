import { useEffect, useState, useCallback } from 'react'
import { Logo, Button, Input } from '@components/ui'
import { useUI } from '@components/ui/context'
import { validate } from 'email-validator'
import { useRouter } from 'next/router'
import { signIn, signOut } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'

const LoginView = () => {
  // Form State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const { setModalView, closeModal } = useUI()

  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: 'http://localhost:3000/' })
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!dirty && !disabled) {
      setDirty(true)
      handleValidation()
    }

    try {
      setLoading(true)
      setMessage('')
      // await login({
      //   email,
      //   password,
      // })
      closeModal()
    } catch (errors) {
      setMessage('Unexpected error')
      setDisabled(false)
    } finally {
      setLoading(false)
    }
  }

  const handleValidation = useCallback(() => {
    // Test for Alphanumeric password
    const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)
    // Unable to send form unless fields are valid.
    if (dirty) {
      setDisabled(!validate(email) || password.length < 7 || !validPassword)
    }
  }, [email, password, dirty])

  useEffect(() => {
    handleValidation()
  }, [handleValidation])

  const router = useRouter()

  console.log(router.pathname)

  const handleView = () => {
    if (router.pathname === '/login') {
      router.push('/sign-up')
    }
    return setModalView('SIGNUP_VIEW')
  }

  return (
    <form
      onSubmit={handleLogin}
      className="w-80 flex flex-col justify-between p-3"
    >
      <div className="flex justify-center pb-12 ">
        <Logo />
      </div>
      <div className="flex flex-col space-y-3">
        {message && (
          <div className="text-red border border-red p-3">
            {message}. Did you {` `}
            <a
              className="text-accent-9 inline font-bold hover:underline cursor-pointer"
              onClick={() => setModalView('FORGOT_VIEW')}
            >
              forgot your password?
            </a>
          </div>
        )}
        <Input type="email" placeholder="Email" onChange={setEmail} />
        <Input type="password" placeholder="Password" onChange={setPassword} />

        <Button
          variant="slim"
          type="submit"
          loading={loading}
          disabled={disabled}
        >
          Log In
        </Button>
        <div className="pt-1 text-center text-sm">
          <span className="text-accent-7">Don&apos;t have an account?</span>
          {` `}
          <a
            className="text-accent-9 font-bold hover:underline cursor-pointer"
            onClick={handleView}
          >
            Sign Up
          </a>
        </div>
        <Button variant="ghost" onClick={handleGoogleSignIn} className="rounded-lg space-x-5"
        style={{
          height: '2rem'
        }}
        >
          <FcGoogle />
          <span>Google SignIn</span>
        </Button>
      </div>
    </form>
  )
}

export default LoginView
