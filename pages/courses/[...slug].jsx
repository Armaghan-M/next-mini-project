import React from 'react'
import { useRouter } from 'next/router'



export default function Course() {
  const route = useRouter()
  const slug = route.query.slug || []

    const goBackHandler =() => {
        route.back()
}    
    
  return (<>
    <h1>
      this is /{slug[0]}/ which is held by /{slug[1]}/ on sunday in /{slug[2] }/
      </h1>
      <hr />


      <button onClick={goBackHandler}>back</button>
      </>
  )
}
