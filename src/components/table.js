import React, { useState, useEffect } from "react";
import { Table, Divider, Modal, Button } from "antd";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { Form, Input, FormButton } from "styles/components/modal";

const DataTable = () => {
  const [state, setstate] = useState([]);
  const [loading, setloading] = useState(true);
  const [modal, setModal] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await Axios.get("https://fakestoreapi.com/products").then((res) => {
      // console.log(res.data);
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

  const onDelete = () => {
    console.log();
  };

  // Modal Start Here
  const ModalForm = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const formData = (data) => console.log(data);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };

    const handleOk = () => {
      setIsModalVisible(false);
    };

    const handleCancel = () => {
      setIsModalVisible(false);
    };

    return (
      <>
        <Button type="primary" onClick={showModal}>
          Edit
        </Button>
        <Modal
          title="Edit"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form formData={handleSubmit(formData)}>
            <Input placeholder="Title" {...register("title")} />
            <Input placeholder="Price" {...register("price")} />
            <Input placeholder="Description" {...register("description")} />
            <Input placeholder="Category" {...register("category")} />
            {errors.exampleRequired && <span>This field is required</span>}

            <FormButton type="submit">Save</FormButton>
          </Form>
        </Modal>
      </>
    );
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
      dataIndex: "id",
      render: (id) => (
        <span>
          {/* <a>Edit {record.name}</a> */}
          <a href="#">Edit</a>
          <Divider type="vertical" />
          <a href="#" onClick={onDelete}>
            Delete
          </a>
        </span>
      ),
    },
  ];

  return (
    <>{loading ? "Loading" : <Table columns={columns} dataSource={state} />}</>
  );
};

export default DataTable;
