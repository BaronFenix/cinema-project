import './tabs.css';
import React, { useState } from 'react';
import TabContent from './TabContent';

function Tabs (props) {
    const [items, setItems] = useState(["Билеты", "О фильме"]);
    const [active, setActive] = useState(0);

    const openTab = event => setActive(+event.target.dataset.index);

    return (
        <div>
            <div className='tab'>
                {
                    items.map((elem, i) => (
                        <button className={i === active ? "tab-btn active" : "tab-btn" }
                            onClick={openTab}
                            data-index={i}
                            key={i}
                        >
                            {elem}
                        </button>
                    ))
                }
            </div>
            {
                items[active] && <TabContent tabIndex={active} movieData={props.movieData} />
            }
        </div>
    );
}

export default Tabs;