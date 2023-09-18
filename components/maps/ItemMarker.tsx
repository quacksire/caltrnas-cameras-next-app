'use client'
import {LayerGroup, Marker, Popup, useMap} from "react-leaflet";
import React, {useEffect, useMemo, useRef, useState} from "react";
import {geoJSON} from "leaflet";
import CameraCard from "@/components/cards/cameraCard";

export default function ItemMaker({ cam, index }: { cam: any, index: number}) {

    const map = useMap()

    const eventHandlers = useMemo(
        () => ({
            click() {
                    map.flyTo([cam.location.latitude, cam.location.longitude], 10, {duration: 1} )
            },
        }),
        [],
    )


    return ( // Create props for this component
        <Marker position={[cam.location.latitude, cam.location.longitude]} key={index} autoPanOnFocus={true} eventHandlers={eventHandlers}>
            <Popup>
                <CameraCard camera={cam} hideBlank={true}/>
            </Popup>
        </Marker>
    )
}