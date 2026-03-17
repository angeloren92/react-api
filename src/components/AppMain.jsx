import { useEffect, useState } from 'react'
import AppCards from './AppMain/AppCards'

const apiUrlActors = 'https://lanciweb.github.io/demo/api/actors/'
const apiUrlActress = 'https://lanciweb.github.io/demo/api/actresses/'

export default function AppMain() {

    const [actors, setActors] = useState([])
    const [actress, setActress] = useState([])

    useEffect(() => {
        fetch(apiUrlActors)
            .then(response => response.json())
            .then(data => {
                setActors(data)
            })

        fetch(apiUrlActress)
            .then(response => response.json())
            .then(data => {
                setActress(data)
            })
    }, [])

    console.log(actress)

    return (
        <main>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    {
                        actors.map(element => {
                            return (
                                <AppCards
                                    key={element.id}
                                    element={element}
                                />
                            )
                        })
                    }
                    {
                        actress.map(element => {
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