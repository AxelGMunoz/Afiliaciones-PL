import React from 'react'

export const Navigation = () => {
  return (
    <div className="bg-slate-100 shadow">
      <nav className="container p-5 flex items-center justify-start">
        <a href='https://libertariopampa.com.ar'>
          <img className='h-14' src='https://libertariopampa.com.ar/wp-content/uploads/2022/11/PL-Logo-Web.png' />
        </a>
        <div className="font-semibold">Afiliaciones</div>
      </nav>
    </div>
  )
}