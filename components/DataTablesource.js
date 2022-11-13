import React from "react";
import { Link } from "react-router-dom";
import pic from "../pic.jpg";

export const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "img",
    headerName: "User",
    width: 160,
    renderCell: (params) => {
      return (
        <div className="cellwithimg">
          <img className="cellimg" src={params.row.img} alt="dsa" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 70 },
  { field: "age", headerName: "Age", width: 70 },
  {
    field: "status",
    headerName: "Status",
    width: 70,
    renderCell: (params) => {
      return (
        <div className={`cellwithstatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => {
      return (
        <div className="cellAction">
          <Link to="/users/:id">
            <div className="viewBt">View</div>
          </Link>
          <div className="delBt">Delete</div>
        </div>
      );
    },
  },
];

export const rows = [
  {
    id: 1,
    username: "A",
    img: pic,
    status: "disable",
    email: "engr@gmail.com",
    age: 30,
  },
  {
    id: 2,
    username: "B",
    img: pic,
    status: "active",
    email: "engr@gmail.com",
    age: 30,
  },
  {
    id: 3,
    username: "C",
    img: pic,
    status: "active",
    email: "engr@gmail.com",
    age: 30,
  },
  {
    id: 4,
    username: "D",
    img: pic,
    status: "active",
    email: "engr@gmail.com",
    age: 30,
  },
  {
    id: 5,
    username: "E",
    img: pic,
    status: "active",
    email: "engr@gmail.com",
    age: 30,
  },
  {
    id: 6,
    username: "F",
    img: pic,
    status: "active",
    email: "engr@gmail.com",
    age: 30,
  },
];
