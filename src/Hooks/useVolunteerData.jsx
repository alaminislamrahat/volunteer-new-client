import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useVolunteerData = () => {
    const axiosSecure = useAxiosSecure();

    const { data,refetch } = useQuery({
        queryKey: ['volunteer'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/volunteer')
            // console.log(data)
            return data;

        }
    })
    return {data,refetch}
};

export default useVolunteerData;