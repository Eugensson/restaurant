"use client";

import Image from "next/image";
import { Icon, LatLngTuple } from "leaflet";
import { useMediaQuery } from "react-responsive";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { cn } from "@/lib/utils";

const markers: {
  id: number | string;
  position: LatLngTuple;
  title: string;
  subtitle: string;
  image: string;
}[] = [
  {
    id: 1,
    position: [34.052235, -118.243683],
    title: "Location 1",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/map/1.png",
  },
  {
    id: "2",
    position: [33.9748, -118.3356],
    title: "Location 2",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/map/2.png",
  },
  {
    id: "3",
    position: [34.0211, -118.3965],
    title: "Location 3",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/map/3.png",
  },
];

const customIcon = new Icon({
  iconUrl: "/pin-solid.svg",
  iconSize: [40, 40],
});

const DynamicMap = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <MapContainer
      center={[34.052235, -118.243683]}
      zoom={isMobile ? 10 : 12}
      zoomControl={false}
      className={cn("z-10", isMobile ? "h-[300px]" : "h-[900px]")}
    >
      <TileLayer
        attribution='&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com//light_all/{z}/{x}/{y}{r}.png"
      />
      {markers.map(({ id, position, title, subtitle, image }) => (
        <Marker key={id} position={position} icon={customIcon}>
          <Popup>
            <div className="flex gap-x-7">
              <div className="flex-1">
                <h3>{title}</h3>
                <p className="leading-snug">{subtitle}</p>
              </div>
              <div className="flex-1">
                <Image src={image} alt={title} width={130} height={160} />
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default DynamicMap;
