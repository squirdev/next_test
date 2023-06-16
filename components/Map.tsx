import { useLoadScript, GoogleMap, MarkerF, Marker } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useMemo, useState } from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import styles from '../styles/home.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';


const Map: NextPage = () => {

  // const [lat, setLat] = useState(27.672932021393862);
  // const [lng, setLng] = useState(85.31184012689732);
  const [places, setPlaces] = useState<any[]>([]);
  const libraries = useMemo(() => ['places'], []);
  const mapCenter = { lat: 27.672932021393862, lng: 85.31184012689732 };
  const router = useRouter()

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  // const backtoHome = () => {
  //   if (router.pathname !== '/home') {
  //     router.push('/home')
  //   }
  // }

  const mapClicked = (info: any) => {
    if (places.length === 3) return
    const updated = [...places, { id: `map-${places.length}`, pos: { lat: info.lat, lng: info.lng } }];
    console.log('updated', updated, info);
    setPlaces(updated);
  }

  const MyPin = () => (
    <div>
      <Image src="/Pin.svg" alt="Custom Pin" />
    </div>
  );

  return (
    <>
      <div className={styles.Map}>
        <div className={styles.Topbtn}>
          <div>
            <div className={styles.floatBtn}>
              <span>鹿児島</span>
              <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              <span>ユーザー数 :</span>
              <span>1234人</span>
            </div>
          </div>
        </div>
        {/* <PlacesAutocomplete
          onAddressSelect={(address) => {
            getGeocode({ address: address }).then((results) => {
              const { lat, lng } = getLatLng(results[0]);
              setLat(lat);
              setLng(lng);
            });
          }}
        /> */}
        <p className={styles.notice}>長押しでピンを立てる</p>
        <GoogleMap
          onClick={(e: any) => mapClicked(e.latLng.toJSON())}
          options={mapOptions}
          zoom={14}
          center={mapCenter}
          mapTypeId={google.maps.MapTypeId.ROADMAP}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          onLoad={() => console.log('Map Component Loaded...')}
        >
          {places.map((place: any) => (
            <Marker
              key={place.id}
              position={place.pos}
              // onLoad={marker => markerLoadHandler(marker, place)}
              // onClick={event => markerClickHandler(event, place)}
              // Not required, but if you want a custom icon:
              // icon={{
              //   path:
              //     "M12.75 0l-2.25 2.25 2.25 2.25-5.25 6h-5.25l4.125 4.125-6.375 8.452v0.923h0.923l8.452-6.375 4.125 4.125v-5.25l6-5.25 2.25 2.25 2.25-2.25-11.25-11.25zM10.5 12.75l-1.5-1.5 5.25-5.25 1.5 1.5-5.25 5.25z",
              //   fillColor: "#0000ff",
              //   fillOpacity: 1.0,
              //   strokeWeight: 0,
              //   scale: 1.25
              // }}
              
              icon={"/Pin.svg"}
            />
          ))}
        </GoogleMap>
        <MarkerF
          position={mapCenter}
          onLoad={() => console.log('Marker Loaded')}
        />
      </div>
    </>
  );
};

const PlacesAutocomplete = ({
  onAddressSelect,
}: {
  onAddressSelect?: (address: string) => void;
}) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: { componentRestrictions: { country: 'jp' } },
    debounce: 300,
    cache: 86400,
  });
  const renderSuggestions = () => {
    return data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
        description,
      } = suggestion;

      return (
        <li
          key={place_id}
          onClick={() => {
            setValue(description, false);
            clearSuggestions();
            onAddressSelect && onAddressSelect(description);
          }}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  };

  return (
    <div className={styles.autocompleteWrapper}>
      <input
        value={value}
        className={styles.autocompleteInput}
        disabled={!ready}
        onChange={(e) => setValue(e.target.value)}
        placeholder="123 Stariway To Heaven"
      />

      {status === 'OK' && (
        <ul className={styles.suggestionWrapper}>{renderSuggestions()}</ul>
      )}
    </div>
  );
};
export default Map;