import React, { useState, useEffect } from "react";
import { Table, Divider } from "antd";
import Axios from "axios";
import Modal from "components/modal/index.js";

const DataTable = () => {
  const [state, setstate] = useState([]);
  const [loading, setloading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  // const onEdit = (index) => {
  //   setShowModal(true);
  //   console.log(index);
  // };

  const onDelete = (index) => {
    console.log("You Deleted this row from the table", index);
    setstate(state.filter((i) => index !== i));
  };

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
          action: row.action,
        }))
      );
    });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Columns Start Here
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
      title: "Action",
      key: "action",
      dataIndex: "action",
      render: (text, record, index) => (
        <span size="middle">
          <a>
            {/* <button type="primary" onClick={() => showModal(showModal)}> */}
            <button type="primary" onClick={showModal}>
              Edit
            </button>

            {/* </button> */}
          </a>
          <Divider type="vertical" />
          <a>
            <button onClick={() => onDelete(record)}>Delete</button>
          </a>
        </span>
      ),
    },
  ];

  return (
    <>
      <Modal
        title="Edit"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      />
      {loading ? "Loading" : <Table columns={columns} dataSource={state} />}
    </>
  );
};

export default DataTable;
