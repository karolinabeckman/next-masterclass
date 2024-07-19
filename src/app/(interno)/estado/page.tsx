'use client'
import { useState } from "react"

export default function Page() {
    const [nome, setNome] = useState('')

    return (
        <div>
            <div className="flex flex-col">
                <label htmlFor="tarefa">Tarefa</label>
                <input 
                    id="tarefa" 
                    type="text" 
                    value={nome}
                    className="bg-zinc-800 py-2 px-4 rounded-md outline-none text-xl"
                />
            </div>
        </div>
    )
}