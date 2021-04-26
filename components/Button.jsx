import * as React from 'react'


export default function Button({text,align}){
    return<div className={`bg-gray-600 inline-block float-${align} text-gray-50 px-4 py-2 text-2xl rounded`}>
        {text}
    </div>
}