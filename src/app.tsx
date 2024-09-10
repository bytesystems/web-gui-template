import { useState } from 'react'
import LoginStateCard from "@/components/login-state-card.tsx";
import {InputForm} from "@/features/auth/login-form.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";
import UserListing from "@/features/user/user-listing.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <LoginStateCard />
        <InputForm />
        <UserListing />
        <Toaster />
    </>
  )
}

export default App
