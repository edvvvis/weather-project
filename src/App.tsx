import { useQuery } from "@tanstack/react-query"
import { getWeather } from "./api"

function App() {

  const {data} = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({lat: 54.97888702928258, lon: -1.6465833967929782})
  })

  return <>{JSON.stringify(data)}</>
}

export default App


// Styling - tailwind
// data fetching - TanStack Query (React Query)