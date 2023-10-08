// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {useGetQuery} from '../query/useQueryClient'

export default function Example() {
  const { isLoading, error, data, isFetching } = useGetQuery(
    ['repoData'],
    'https://api.github.com/repos/tannerlinsley/react-query')

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? 'Updating...' : ''}</div>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </div>
  )
}
