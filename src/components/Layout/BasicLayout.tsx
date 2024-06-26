import React, { ReactNode } from 'react'
import Header from './Header'

const BasicLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <div className="
          relative
          flex
          flex-1
          flex-col
          overflow-y-auto
          overflow-x-hidden 
          bg-custom-light-blue
          "
        >
          <Header />
          <main className="flex grow">
            <div className="
              flex
              flex-col
              grow
              mx-auto
              max-w-screen-2xl
              p-4
              md:p-6
              2xl:p-10
              "
            >
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default BasicLayout
