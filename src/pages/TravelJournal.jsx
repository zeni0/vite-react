import Header from "../components/TravelJournal/Header"
import Entry from "../components/TravelJournal/Entry"
import data from "../components/TravelJournal/data"

export default function TravelJournal(){
    
    console.log(data)
    
    return (
        <section id="travel-journal">
            <Header />
            <main>
            {data.map(entry => 
                <Entry
                    key={entry.id}
                    {...entry}
                />
            )}
            </main>
        </section>
    )
}