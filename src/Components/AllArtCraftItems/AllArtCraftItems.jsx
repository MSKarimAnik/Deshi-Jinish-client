import { useLoaderData } from "react-router-dom";
import CraftCard from "../CraftCard/CraftCard";


const AllArtCraftItems = () => {
    const crafts = useLoaderData();

  return (
    <>
      
      <div className='m-20'>
      <h1 className='text-6xl text-purple-600 text-center my-20'>
        All Art & Craft Items:{crafts.length}
        </h1>
      <div className='grid md:grid-cols-2 gap-4'>
      {
        crafts.map((craft)=><CraftCard key={craft._id} craft={craft}></CraftCard>) 
      }
      </div>
      </div>
      
    </>
  )
}

export default AllArtCraftItems;