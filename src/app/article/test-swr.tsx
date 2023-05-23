'use client'

import useSWR from 'swr';

export default function TestSwr() {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR('/api/article', fetcher);

    console.log({
        data,
        error,
        isLoading
    })

    return (
        <div>test swr</div>
    )
}       