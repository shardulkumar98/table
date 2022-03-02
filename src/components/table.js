import React, { useState, useEffect } from "react";
import { Table, Divider } from "antd";
import Axios from "axios";
import EditModal from "components/modal";
import { Button, Span } from "styles/components/table";

const DataTable = () => {
  const [state, setstate] = useState([]);
  const [loading, setloading] = useState(true);
  const [modal, setModal] = useState(false);

  const [data, setData] = useState(null);

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
        <Span size="middle">
          <a>
            <Button
              type="primary"
              onClick={() => {
                setData(record);
                setModal(true);
              }}
            >
              Edit
            </Button>

            {/* </button> */}
          </a>
          <Divider type="vertical" />
          <a>
            <Button onClick={() => onDelete(record)}>Delete</Button>
          </a>
        </Span>
      ),
    },
  ];

  const handleCancel = () => {
    setModal(false);
  };

  const handleOnOk = () => {
    setModal(false);
  };

  const onDelete = (index) => setstate(state.filter((i) => index !== i)); //Delete Fumction

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

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? "Loading" : <Table columns={columns} dataSource={state} />}
      {modal && (
        <EditModal
          title="Edit"
          isOpen={modal}
          onCancel={handleCancel}
          onOk={handleOnOk}
          data={data}
        />
      )}
    </>
  );
};

export default DataTable;
