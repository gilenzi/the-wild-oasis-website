import TextExpander from '@/app/_components/TextExpander/TextExpander';
import {getCabin, getCabins} from '@/app/_lib/data-service';
import {EyeSlashIcon, MapPinIcon, UsersIcon} from '@heroicons/react/24/solid';
import Image from 'next/image';

export async function generateMetadata({params}) {
  const {name} = await getCabin(params.id);

  return {
    title: `Cabin ${name}`,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  return cabins.map(({id}) => ({id: String(id)}));
}

export default async function CabinPage({params}) {
  const {id: cabinId} = params;
  const {name, image, description, maxCapacity, disount} = await getCabin(
    cabinId
  );

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative scale-[1.15] -translate-x-3">
          <Image
            fill
            className="object-cover"
            src={image}
            alt={`Cabin ${name}`}
          />
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
            Cabin {name}
          </h3>
          <TextExpander
            linesToShow={3}
            text={description}
            classes={'text-lg text-primary-300 mb-2'}
          />

          <ul className="flex flex-col gap-4 mb-7 mt-6">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{' '}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{' '}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
