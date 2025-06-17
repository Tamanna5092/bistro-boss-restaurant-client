import { useQuery } from "@tanstack/react-query";
import useAxiouPublic from "./useAxiouPublic";


const useMenu = () => {
  const axiosPublic = useAxiouPublic()
  const {data: menu = [], isPending: loading, refetch} = useQuery({
    queryKey: ['menu'],
    queryFn: async() => {
      const res = await axiosPublic.get('/menu')
      return res.data
    }
  })
      return [menu, refetch];
};

export default useMenu;