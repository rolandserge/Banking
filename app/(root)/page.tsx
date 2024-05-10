import TotalBalanceBox from '@/components/totalBalanceBox'
import HeaderBox from '@/components/headerBox'
import React from 'react'
import RightSidebar from '@/components/sidebar/rightSidebar'
import { getLoggedInUser } from '@/actions/user.actions'
import { redirect } from 'next/navigation'

export default async function Home() {

    const loggedIn = await getLoggedInUser()

    if(!loggedIn) redirect("/sign-in")

    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.name || "Guest"}
                        subtext="Access and manage your account and transactions efficiently"
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.34}
                    />
                </header>

                RECENT TRANSACTION
            </div>

            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 123.50 }, { currentBalance: 500.50}]}
            />
        </section>
    )
}
