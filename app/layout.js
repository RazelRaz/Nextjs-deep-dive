'use client'

import Menu from '@/components/Menu';
import './globals.css'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import {Oswald, Roboto} from 'next/font/google'
const OswaldFont = Oswald (
  {
    subsets:['cyrillic'],
    weight: ['200','300','400','500','700'],
    variable: '--font-OswaldFont'
  }
)

const RobotoFont = Roboto (
  {
    subsets:['cyrillic'],
    weight: ['400','500'],
    variable: '--font-RobotoFont'
  }
)

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${OswaldFont.variable} ${RobotoFont.variable}`}>
      <body>
        <Menu />
        {children}
        <ProgressBar height="4px"
          color="#fffd00"
          options={{ showSpinner: false }}
          shallowRouting />
      </body>
    </html>
  )
}
