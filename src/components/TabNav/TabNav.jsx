import React from "react";
import './TabNav.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { pillTabsStylesHook } from '@mui-treasury/styles/tabs';
import { appleTabsStylesHook } from '@mui-treasury/styles/tabs';

function TabNav(props) {
    const [tabIndex, setTabIndex] = React.useState(0);
    const tabsStyles = appleTabsStylesHook.useTabs();
    const tabItemStyles = appleTabsStylesHook.useTabItem();
    return (
        <Tabs
            classes={tabsStyles}
            value={tabIndex}
            onChange={(e, index) => setTabIndex(index)}
        >
            <Tab classes={tabItemStyles} disableRipple label={'Student'} onClick={() => props.setSelected('student')} />
            <Tab classes={tabItemStyles} disableRipple label={'Mentor'} onClick={() => props.setSelected('mentor')} />
        </Tabs>
    );
};

export default TabNav;