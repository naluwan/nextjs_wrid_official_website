import React from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { Loader } from 'lucide-react';

const GoogleMaps: React.FC = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const center = React.useMemo(
    () => ({ lat: 24.98069894748379, lng: 121.424667579672 }),
    [],
  );

  if (!isLoaded)
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <Loader className='h-8 w-8 animate-spin' />
      </div>
    );

  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName='w-full h-full'>
      <MarkerF position={center} />
    </GoogleMap>
  );
};

export default GoogleMaps;
