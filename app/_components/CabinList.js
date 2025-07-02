import {unstable_noStore as noStore} from 'next/cache';
import {getCabins} from '../_lib/data-service';
import CabinCard from './CabinCard';
// import {useSearchParams} from 'next/navigation';

async function CabinsList(params) {
  // noStore();
  // const searchParams = useSearchParams();
  // const capacity = searchParams.get('capacity') || 'all';

  console.log(params);

  const cabins = await getCabins();
  if (!cabins.length) return null;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinsList;
