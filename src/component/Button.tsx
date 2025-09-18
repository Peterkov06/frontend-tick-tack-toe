import React, { useContext, useEffect, useState } from 'react'
import { fieldContext } from '../App'

const Button = (props: {x: number, y: number}) => {
    const ctx = useContext(fieldContext);
    const [value, setValue] = useState<boolean | null>(null)

    useEffect(() => {
        setValue(ctx.fieldData[props.x][props.y]);
    }, [value])
    

  return (
    <div>
        {
            value ? 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill='#29cabd'><path d="M504.6 148.5C515.9 134.9 514.1 114.7 500.5 103.4C486.9 92.1 466.7 93.9 455.4 107.5L320 270L184.6 107.5C173.3 93.9 153.1 92.1 139.5 103.4C125.9 114.7 124.1 134.9 135.4 148.5L278.3 320L135.4 491.5C124.1 505.1 125.9 525.3 139.5 536.6C153.1 547.9 173.3 546.1 184.6 532.5L320 370L455.4 532.5C466.7 546.1 486.9 547.9 500.5 536.6C514.1 525.3 515.9 505.1 504.6 491.5L361.7 320L504.6 148.5z"/></svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill='#f6b13d'><path d="M320 160C231.6 160 160 231.6 160 320C160 408.4 231.6 480 320 480C408.4 480 480 408.4 480 320C480 231.6 408.4 160 320 160zM544 320C544 443.7 443.7 544 320 544C196.3 544 96 443.7 96 320C96 196.3 196.3 96 320 96C443.7 96 544 196.3 544 320z"/></svg>
        }
    </div>
  )
}

export default Button