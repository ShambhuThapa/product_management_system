import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'next/image';
import { PageRoutes, dropdownItems } from '@/constants';

function DropDownList({imageUrl,showDropdown,setShowDropdown }:any) {
  return (
    <Dropdown>
    <Dropdown.Toggle variant="white" id="dropdown-basic">
      <div style={{width:"30px",height:"auto"}}>
    <Image src={imageUrl} alt='user' />
    </div>
    </Dropdown.Toggle>
    <Dropdown.Menu show={showDropdown} align="end">
        {dropdownItems.map((item: any,index:number) => (
       
            <Dropdown.Item key={index} eventKey={item.eventKey} href={item.route}>{item.label}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownList;
