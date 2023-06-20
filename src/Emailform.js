import { useId } from "react"

export const Emailform = () => {

    const id = useId();
    return (
        <div>
            <label htmlFor={`${id}-email`}>Email</label>
            <input type='email' id={`${id}-email`}/>
            <br />
            <label htmlFor={`${id}-name`}>Name</label>
            <input type='email' id={`${id}-name`}/>
        </div>
    )
}