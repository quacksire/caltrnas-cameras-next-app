'use client'
// @ts-nocheck
import {LayerGroup, Marker, Popup, useMap} from "react-leaflet";
import React, {useEffect, useMemo, useState} from "react";
import L, {geoJSON} from "leaflet";
import CameraCard from "@/components/cards/cameraCard";
import {useRouter} from "next/navigation";
import {centroid} from "@turf/turf";
import {counties, districtArrayMaker, districtNames, districtsCenter} from "@/lib/lists";

export default function CameraMarkers({ params }: { params: { layerId: string }}) {
    const map = useMap()
    const router = useRouter()
    const [cameras, setCameras] = useState([])
    const [marker, setMarker] = useState([])
    const [district, setDistrict] = useState(0)
    const districtData = districtArrayMaker()


    const [layer, setLayer] = useState(null)

    // find the layer that matches the layer id of params.layerID and use setLayer to save it to state using react-leaflet's useMap hook

    useEffect(() => {
        // Iterate through each layer on the map
        map.eachLayer(layer => {
            // Check if the layer is a GeoJSON layer and has the desired property
            if (layer instanceof L.GeoJSON) {
                // Access the matching layer's properties

                //@ts-ignore
                const layers = Object.values(layer._layers);

                console.log(layers)


                let districtLayer;

                layers.forEach((layer: any) => {
                    layer.setStyle({fillColor: '#3388ff'})

                    if (layer._leaflet_id === params.layerId) {
                        districtLayer = layer
                    }
                })


                //console.log('Found matching layer:', layer._layers[params.layerId]);
                //@ts-ignore
                if (!districtLayer) districtLayer = layer._layers[params.layerId]

                //setLayer(layer._layers[params.layerId])

                console.log(districtLayer)

                //console.log(districtLayer.feature.properties)

                districtLayer.setStyle({fillColor: 'transparent'})
                setDistrict(districtLayer.feature.properties.DISTRICT)

                const center = centroid(districtLayer.toGeoJSON())
                // @ts-ignore
                map.flyTo(center.geometry.coordinates.reverse(), 7, {duration: 2})


                const district = districtData[districtLayer.feature.properties.DISTRICT - 1]
                //console.log(district)

                //ToastyMap(district, districtLayer)
                // /
                //layer.feature.properties.id === params.layerId
                // Now you can set the layer's style or do other operations
            }
        });
    }, [params.layerId, map]);


    // get properties of a layer

    useEffect(() => {
        if (layer) {
            //@ts-ignore
            layer.setStyle({fillColor: 'transparent'})
            //@ts-ignore
            setDistrict(layer.feature.properties.DISTRICT)
        }

    }, [layer]);


    // remove all useEffects and make it functional
    // I'm turning this component into a next.js page, as its map is too complex to be a component so I turned it into a layout with components
    // I'm also going to make it so that the map is only rendered on the client side, as it's too heavy to be rendered on the server side
    // Refactor this component to be a next.js page


    // when the cameras change, update the camera markers

    useEffect(() => {
        async function a() {
            let cams = await fetch(`https://caltrans-cameras.quacksire.workers.dev/`, {cache: 'no-store'})
            let data = await cams.json()
            let camsData = data.map((item: {
                cctv: any
            }) => item.cctv)

            let mark = []
            mark = camsData.map((cam: any, index: number) => {
                if (district === undefined) return
                if (district != cam.location.district) return
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
    }, [district]);




    return (
        <>
            <LayerGroup>
                {marker}
            </LayerGroup>
        </>
    )


}