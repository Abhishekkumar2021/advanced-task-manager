import { useState } from "react"

export default function Forms() {
    const [value, setValue] = useState("ABCDEF")
    const [para, setPara] = useState("")
    const [checked, setChecked] = useState(true)

    // handle change
    function handleChange(evt){
        // console.log(evt.target.value)

        // setState: It will say react to re reender the component with the updated state
        setValue(evt.target.value)
    }

    return <div className="flex flex-col gap-4 justify-center items-center bg-blue-200 flex-1">
        <h1 className="text-3xl font-bold">Forms</h1>
        <input type="text" className="px-4 py-3 border-none text-2xl outline-none shadow-md rounded-md" placeholder="Enter something here..." onChange={handleChange} value={value}/>

        <button className="bg-orange-500 text-white px-6 py-3 active:scale-95" onClick={() => {
            alert(`You have typed: ${value}`)
        }}>
            Submit
        </button>

        <textarea name="paragraph" onChange={(evt) => {
            setPara(evt.target.value)
        }} value={para}>
            
        </textarea>

        <p>
            You have typed: <span className="font-bold">
                {value.length}
            </span> characters in the input field. and <span className="font-bold">
                {para.length}
            </span> characters in the textarea.
        </p>

        <input className="w-40 h-40" type="checkbox" name="check" checked={checked} onChange={(evt) => {
            setChecked(evt.target.checked)
        }}/>


    </div>
}