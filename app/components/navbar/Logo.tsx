"use client"

const Logo = () => {
  return (
    <div className="bg-orange-700 px-2 py-1 rounded-md text-lg md:text-2xl cursor-pointer">
      Burada<span className="text-sm">.com</span>
    </div>
  )
}

export default Logo




















// Next.js, varsayılan olarak sunucu taraflı (server-side) render yapar.
// Ama bazı durumlarda tarayıcıya özel şeyler kullanıyorsan, mesela:

// useState, useEffect gibi React Hook’ları

// window, localStorage gibi tarayıcı objeleri

// Butona tıklayınca bir şey olacaksa (interaktivite)

// 👉 o dosyanın client component olması gerekir. Ve bunu "use client" ile belirtirsin.