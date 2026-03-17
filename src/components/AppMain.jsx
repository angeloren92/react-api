import { useEffect, useState } from 'react'
import AppCards from './AppMain/AppCards'

export default function AppMain({ apiUrl }) {

    const [lists, setLists] = useState([])
    console.log(lists)

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setLists(data)
            })
    }, [])

    return (
        <main>
            <div className="container">
                <div className="row">
                    {
                        lists.map(element => {
                            return (
                                <AppCards 
                                key={element.id}
                                element={element}
                                /> 
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}