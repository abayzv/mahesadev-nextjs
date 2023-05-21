import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {query} = context

    return {
        props: {
            query
        }
    }
}

export default function Search({query} : any) {
    const {origin, destination, date} = query

    return (
        <div>
            <h1>Search Page</h1>
            <h2>Query</h2>
        </div>
    )
}