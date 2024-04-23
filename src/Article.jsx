import React from 'react'

const Article = ({data}) => {
  return (
    <div>
    <div><h1>{data.title}</h1>
          <h2>published on {data.date}by {data.author}</h2>
    </div>
    <div>
        {data.content.map((value,index)=>(
            <p style={{fontFamily:'monospace' ,fontSize:20,fontWeight:800,color:'red'}} key={index}>{value}</p>
        ))}
    </div>
          </div>
  )
}

export default Article