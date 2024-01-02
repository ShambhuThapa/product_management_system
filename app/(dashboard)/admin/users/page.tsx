"use client"
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import HeadingTitle from "../../_components/HeadingTitle";
import {Edit,Trash } from "react-feather";
import ButtonComponent from "@/components/ButtonComponent";
import { showToast } from "@/common/utils/toast";
import { useRouter } from "next/navigation";
import { User } from "@/common/constants";
const Page = () => {
  const [userList, setUserList] = useState([]);
  const router = useRouter();
  useEffect(() => {
   const users=JSON.parse(localStorage.getItem("users") || '[]');
   setUserList(users);
  }, [])
  
  const handleDelete=(index:number)=> {
    if(confirm("Are you sure you want to delete ?")){
      const remainingUsers = userList.filter((user, i) => i !== index);
      localStorage.setItem("users", JSON.stringify(remainingUsers));
      setUserList(remainingUsers);
      showToast("success","Account removed",{position:"top-center",theme:"light"});
    }

  }

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <HeadingTitle title="Users" />
      </div>
      {userList.length === 0 ? (
        <p className="text-center">No results found</p>
      ) : (
        <Table borderless striped hover responsive className="mt-2">
          <thead>
            <tr>
              <th>sn</th>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map(({full_name,email}:User,index:number) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{full_name}</td>
                <td>{email}</td>
                <td>
                <ButtonComponent Icon={<Edit/>} tooltip="Edit" type="icon"  href={`/admin/user/${index}`}/>
                <ButtonComponent Icon={<Trash/>} tooltip="Delete" type="icon" onClick={()=>handleDelete(index)} />

                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Page;
