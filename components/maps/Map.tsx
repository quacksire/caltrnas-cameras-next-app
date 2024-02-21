/*
'use client'
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents,
    useMap,
    FeatureGroup,
    GeoJSON,
    LayerGroup
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import React, {SetStateAction, useCallback, useEffect, useRef, useState, ReactDOM, useMemo} from "react";
import L, {geoJSON, map} from "leaflet";
import DistrictGeoJSON from '../../lib/geojson/Caltrans_Districts.json'
import {counties, districtNames, districtsCenter} from "@/lib/lists";
import {booleanContains, centroid} from "@turf/turf";
import CameraCard from "@/components/cards/cameraCard";
import {toast, useToast} from "@/components/ui/use-toast";
import {TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import BackToMap from "@/components/maps/BackToMap";
import {useEventListener} from "@react-hooks-library/core";
import {Tooltip} from "@nextui-org/react";
import {usePathname, useRouter} from "next/navigation";

const DEFAULT_ZOOM = 7
const TOAST_DURATION = 20000



*/

// @ts-ignore
const Map = ({ children }) => {

    return null
/*
    const [activeDistrict, setActiveDistrict] = useState(0)
    const pathname = usePathname()





    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
            click() {
                if (position !== null) return
                map.locate()
            },
            dragend() {
                //map.flyTo([37.166111, -119.449444], map.getZoom(), {duration: 0})
            },
            locationfound(e) {
                map.flyTo(e.latlng, 7, {duration: 0})

                // @ts-ignore
                setPosition(e.latlng)
            },
        })

        return position === null ? null : (
            <Marker position={position}>
                <Popup>You are here</Popup>
            </Marker>
        )
    }

    function CameraMarkers() {
        const [marker, setMarker] = useState([])

        useEffect(() => {
            async function a() {
                let cams = await fetch(`https://caltrans-cameras.quacksire.workers.dev/`, {cache: 'no-store'})
                let data = await cams.json()
                let camsData = data.map((item: {
                    cctv: any
                }) => item.cctv)

                let mark = []
                mark = camsData.map((cam: any, index: number) => {
                    if (activeDistrict === undefined) return
                    if (activeDistrict != cam.location.district) return
                    //console.log(cam)

                    return (
                        <>
                            <Marker position={[cam.location.latitude, cam.location.longitude]} key={index} >
                                <Popup>
                                    <CameraCard camera={cam} hideBlank={true}/>
                                </Popup>
                            </Marker>
                        </>
                    )
                })
                setMarker(mark)
            }
            a()
        }, [activeDistrict]);

        return marker === null ? null : (
            <>
                {marker}
            </>
        )
    }
    function ToastyMap(district: any, layerId: any) {

        let districtCounties = district.counties.replace('undefined', '').split(',').filter((entry: string) => /\S/.test(entry));
        //console.log(districtCounties)

        let layerID: any;

        if (layerId instanceof Object) {
            layerID = layerId._leaflet_id
        } else {
            layerID = layerId
        }

        console.log(layerID)
        //console.log(`layerID: ${JSON.stringify(layerID)}`)
        toast({
            title: `${district.name} District`,
            description: (<>
                <ul>
                    <li>
                        <TooltipProvider>
                            <Tooltip content={districtCounties.map((county: string, index: number) => {
                                    if (county === 'Orange') return ` ${county}`

                                    if (index === districtCounties.length - 1) {
                                        return ` and ${county}`
                                    } else if (index === 0) {
                                        return `${county}`
                                    } else {
                                        return `, ${county}`
                                    }
                                })} classNames={{
                                base: "border bg-background w-mx",
                                 }}>
                                    <span className="underline decoration-dotted cursor-help">{districtCounties.length} count{districtCounties.length <= 1 ? 'y' : 'ies'}</span>
                            </Tooltip>
                        </TooltipProvider>

                    </li>
                    <div className={'grid grid-cols-1 m-2'}>
                        {district.features.map((feat: string, index: number) => {
                            switch (feat) {
                                case 'cctv':
                                    return (
                                        <Button className={'m-1'}>
                                            Traffic Cameras
                                        </Button>
                                    )
                                case 'chainControl':
                                    return (
                                        <Button className={'m-1'}>
                                            Chain Control Signs
                                        </Button>
                                    )
                                case 'cms':
                                    return (
                                        <Button className={'m-1'}>
                                            Changeable Message Signs
                                        </Button>
                                    )
                                case 'lcs':
                                    return (
                                        <Button className={'m-1'}>
                                            Lane Closure Signs
                                        </Button>
                                    )
                                case 'weather':
                                    return (
                                        <Button className={'m-1'}>
                                            Weather Stations
                                        </Button>
                                    )
                                case 'travelTimes':
                                    return (
                                        <Button className={'m-1'}>
                                            Travel Times
                                        </Button>
                                    )
                                default:
                                    return null
                            }
                        })}

                    </div>
                    <BackToMap />
                </ul>

            </>),
            duration: TOAST_DURATION,
            autoFocus: true,
        })
    }



    function DistrictGeoJSONLayer() {
        const map = useMap()
        const { toast } = useToast()
        const router = useRouter()
        const districtData = districtArrayMaker()
        const target = useRef(null)
        const inputRef = React.useRef(null)
        const [mouseClickPos, setMouseClickPos] = useState([0, 0])

        useEffect(() => {
            () => console.log('unmounting...')
        }, []);


        return (
            <>
            <GeoJSON data={DistrictGeoJSON}

                     onEachFeature={(feature, layer) => {
                         let clickedOn = false


                         layer.on('click', function (e) {
                             const center = centroid(e.target.toGeoJSON())

                             const layerID = e.target._leaflet_id
                             console.log(layerID)

                             target.current = e.target
                             console.log(center)
                             // center is lng, lat, but leaflet is lat, lng
                             // fly to the center of the layer
                             // @ts-ignore
                             map.flyTo(center.geometry.coordinates.reverse(), 7, {duration: 2})

                             //feature.properties.DISTRICT
                             const district = districtData[feature.properties.DISTRICT - 1]
                             console.log(layerID)
                             clickedOn = true
                             e.target.setStyle({fillColor: 'transparent', color: 'blue'})


                             ToastyMap(district, layerID)
                             //router.push(`/map/layer/${feature.properties.DISTRICT}`)

                             map.eachLayer(layer => {
                                 // Check if the layer is a GeoJSON layer and has the desired property
                                 if (layer instanceof L.GeoJSON) {
                                     // Access the matching layer's properties

                                     // @ts-ignore
                                     const layers = Object.values(layer._layers);

                                     console.log(layers)


                                     let districtLayer;

                                     layers.forEach((layer: any) => {
                                         if (layer._leaflet_id != layerID) {
                                             layer.setStyle({fillColor: '#3388ff'})
                                         }
                                     })
                                 }
                             })

                             // CHange the targets fill color
                             // @ts-ignore
                         })

                         layer.on('mouseover', function (e) {
                                const layerID = e.target._leaflet_id
                                // @ts-ignore
                                if (!clickedOn) e.target.setStyle({color: 'red'})
                                // @ts-ignore
                         })

                         layer.on('mouseout', function (e) {
                                const layerID = e.target._leaflet_id
                                // @ts-ignore

                                if (!clickedOn) e.target.setStyle({color: '#3388ff'})
                                // @ts-ignore
                         })
                     }}
             />
            </>
        )}


    return (
        <MapContainer center={[37.166111, -119.449444]}
                      zoom={DEFAULT_ZOOM}
                      scrollWheelZoom={pathname.includes('layer')}
                      dragging={pathname.includes('layer')}
                      className={'h-screen w-full z-0'}
                      zoomControl={pathname.includes('layer')}

        >
            <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2hpbGRxdWFjayIsImEiOiJja21mNmxsYmoyend6MzNvY3gzcmd0cTVxIn0.CAIKNdp3JZdHCMuD2MGorg`}
                attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
            />
            <LocationMarker />
            <DistrictGeoJSONLayer />
            <CameraMarkers />
            {children}


        </MapContainer>
    )
 */
}

export default Map
