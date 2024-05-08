import TotalBalanceBox from '@/components/totalBalanceBox'
import HeaderBox from '@/components/headerBox'
import React from 'react'
import RightSidebar from '@/components/sidebar/rightSidebar'

export default function Home() {

    const loggedIn = { firstName: "Roland", lastName: "SK", email: "rolandkomenan@civ.pro"}

    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || "Guest"}
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
