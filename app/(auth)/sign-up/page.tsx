import AuthForm from '@/components/auth/authForm'
import React from 'react'

export default function SignUp() {

    return (
        <section className='flex-center size-full max-sm:px-6'>
            <AuthForm
                type="sign-up"
            />
        </section>
    )
}
