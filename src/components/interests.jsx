import { AlarmOn, MilitaryTech, PsychologyAlt, Shuffle, Stars } from '@mui/icons-material';
import React from 'react';
import "./interestsS.css";
import SidebarRow from './SidebarRow';

const Interests = () => {
  return (
    <div className='sidebar'>
      <SidebarRow Icon={Stars} title='Topic of the day' />
      <SidebarRow Icon={Shuffle} title='Random topic' />
      <SidebarRow Icon={PsychologyAlt} title='Current interests' />
      <SidebarRow Icon={AlarmOn} title='Timer' />
      <SidebarRow Icon={MilitaryTech} title='Top topics' />

    </div>
  )
}

export default Interests;