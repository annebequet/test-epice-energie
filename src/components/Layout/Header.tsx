import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/">
            <img className="h-12 w-auto" src="/public/logo-epices-energie.png" alt="logo" />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
