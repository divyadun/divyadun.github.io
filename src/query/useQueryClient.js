import { useQuery} from '@tanstack/react-query'
import axios from 'axios'


export const useGetFetchQuery = (name) => {
    // const data = useGetFetchQuery("todos");
    const queryClient = useQuery();
    return queryClient.getQueryData(name);
};

export const useGetQuery = (queryKey = [''], url = '') => {
    const { isLoading, error, data, isFetching } = useQuery({
      queryKey: [...queryKey],  // Always use array for queryKey for consistency
      queryFn: () =>
        axios
          .get(url)
          .then((res) => res.data),
    })
    return { isLoading, error, data, isFetching }
};
