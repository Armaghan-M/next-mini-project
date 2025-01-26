import React from 'react'

export default function SingleProduct({product}) {
  return (
    <div>
      {product.id} - {product.title}
    </div>
  )
}

export async function getStaticPaths() {


    return {
        paths: [{ params: { id: '1' } },{ params: { id: '2'}}],
        fallback:false
    }
    
}

export async function getStaticProps(context) {
    const productID=context.params.id
const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${productID}`)
const data=await res.json()


    return {
        props: {
        product:data
    }
}

}