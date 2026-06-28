import React from 'react'
import { useEffect, useState } from 'react'

const UseEffectTest = () => {
    const[userName, setUserName]=useState("Yuklanmoqda...")
    useEffect(()=>{
        setTimeout(()=>{
            setUserName("Sunnatova Muslima Shuhrat qizi")

        }, 2000)
    })
  return (
    <div>
      <h1>Foydalanuvchi ismi {userName}</h1>
    </div>
  )
}

export default UseEffectTest
