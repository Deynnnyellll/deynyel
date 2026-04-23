'use client'

import Button from "./Button"

export default function Tabs({ tabControls, children, setTab }) {

    function handleTab(id) {
        setTab(id);
    }

    return (
        <div>
            <div className="flex items-center justify-start gap-2 mb-8">
               { tabControls.map(item => (
                    <Button 
                        key={item.id} 
                        action={() => handleTab(item.id)} 
                        type={"ghost"}
                        customStyle={"hover:bg-white duration-300 ease-in-out *:hover:text-black!"}
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