import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TABS_DATA } from '../utils/Helper';

const TabsWithParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialTab = searchParams.get('tab') || TABS_DATA[0].title;
    const [value, setValue] = useState(
        TABS_DATA.find((tab) => tab.title === initialTab) || TABS_DATA[0]
    );

    const handleTabClick = (obj) => {
        setValue(obj);
        setSearchParams({ tab: obj.title });
    };

    useEffect(() => {
        const tabParam = searchParams.get('tab');
        if (tabParam) {
            const foundTab = TABS_DATA.find((tab) => tab.title === tabParam);
            if (foundTab) setValue(foundTab);
        }
    }, [searchParams]);

    return (
        <>
            <div className="flex justify-center gap-20 pt-20">
                {TABS_DATA.map((obj, i) => (
                    <div key={i}>
                        <h2
                            onClick={() => handleTabClick(obj)}
                            className={`${value.title === obj.title ? 'underline text-green-700' : ''
                                } text-4xl font-bold cursor-pointer`}
                        >
                            {obj.title}
                        </h2>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-20">
                <p className="min-h-[500px] w-[1000px] bg-black text-green-700 text-4xl font-bold flex justify-center items-center">
                    {value.content}
                </p>
            </div>
        </>
    );
};

export default TabsWithParams;
