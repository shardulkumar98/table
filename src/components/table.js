import React, { useState, useEffect } from "react";
import { Table } from "antd";
import Axios from "axios";
const DataTable = () => {
  const [state, setstate] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await Axios.get("https://fakestoreapi.com/products").then((res) => {
      setloading(false);
      setstate(
        res.data.map((row) => ({
          id: row.id,
          title: row.title,
          price: row.price,
          description: row.description,
          category: row.category,
          rating: row.rating,
        }))
      );
    });
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
  ];

  return (
    <>{loading ? "Loading" : <Table columns={columns} dataSource={state} />}</>
  );
};

export default DataTable;
