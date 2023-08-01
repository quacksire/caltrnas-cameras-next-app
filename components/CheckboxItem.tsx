"use client"
import {Checkbox} from "@/components/ui/checkbox";
import {cn} from "@/lib/utils";
import {CheckedState} from "@radix-ui/react-menu";
import {useCallback, useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {bool} from "prop-types";


export default function CheckboxItem({id, content, func, className, checked} : {id: string, content: any, func?: ((checked: boolean) => void) | undefined , className?: string, checked?: boolean }) {

    const [check, setCheck] = useState(true)

    useEffect(() => {
        if (checked) {
            setCheck(checked)
        }

        setCheck(false)
        if (func) {
            check ? func(true) : func(false)
        }

        setTimeout(() => {
            setCheck(false)
            if (func) {
                check ? func(true) : func(false)
            }
        }, 1000)
    }, []);

    return (
        <Button className={cn('items-center space-x-2 w-full', className)} variant={check ? 'default' : "outline"} onClick={() => {
            setCheck(!check)
            if (func) {
                check ? func(true) : func(false)
            }
        }} defaultChecked={checked}>
            {content}
        </Button>
    )
}