'use client'

import Button from "./Button"

export default function Tabs(tabControls, children, setTab) {

    function handleTab(id) {
        setTab(id);
    }

    return (
        <div>
            <div className="flex items-center justify-start gap-2">
               { tabControls.map(item => (
                    <Button 
                        key={item.id} 
                        action={() => handleTab(item.id)} 
                        type={"ghost"}
                    >
                        <p>{item.name}</p>
                    </Button>
                ))}
            </div>

            <div>
                {children}
            </div>
        </div>
    )
}