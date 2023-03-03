import { atom, useAtomValue, useSetAtom } from 'jotai'
import { Suspense, useEffect } from 'react'

const idsAtom = atom<string[]>([])

type Data = {
  id: string
}

const dataAtom = atom<Data[] | Promise<Data[]>>(async (get) => {
  const ids = get(idsAtom)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ids.map(id => ({ id })))
    }, 1000)
  })
})

function List () {
  const data = useAtomValue(dataAtom)
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.id}</div>
      ))}
    </div>
  )
}

export default function Home () {
  const set = useSetAtom(idsAtom)
  useEffect(() => {
    set(['123', '456', '789'])
  }, [])
  return (
    <>
      <div>
        header
      </div>
      <Suspense fallback="loading">
        <List/>
      </Suspense>
    </>
  )
}
