import React from 'react'
import AnimatedCounter from './animatedCounter';
import DoughnutChart from './doughnutChart';

export default function TotalBalanceBox({ accounts = [], totalBanks, totalCurrentBalance} : TotalBalanceBoxProps) {

    return (
        <section className='total-balance'>
            <div className='total-balance-chart'>
                {/* DoughnutChart */}
                <DoughnutChart 
                    accounts={accounts}   
                />
            </div>

            <div className='flex flex-col gap-6'>
                <h2 className='header-2'>
                    {totalBanks} Bank accounts
                </h2>
                <div className='flex flex-col gap-2'>
                    <p className='total-balance-label'>
                        Total Current Balance
                    </p>

                    <div className='total-balance-amount flex-center gap-2'>
                        <AnimatedCounter 
                            amount={totalCurrentBalance} 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}