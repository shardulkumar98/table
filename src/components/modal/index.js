import React, { useState } from "react";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { Form, Input, FormButton } from "styles/components/modal";
import axios from "axios";

const ModalComponent = ({ isOpen, title, onCancel, onOk, data }) => {
  const [defaultValue, setDefaultValue] = useState(data);
  // console.log(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formData = (data) => {
    console.log(data);
    axios
      .post("https://fakestoreapi.com/products/", {
        title: defaultValue?.title,
        price: defaultValue?.price,
        description: defaultValue?.description,
        image: defaultValue?.image,
        category: defaultValue?.category,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Modal
        title={title}
        visible={isOpen}
        onCancel={onCancel}
        onOk={onOk}
        defaultValue={data}
      >
        <Form onSubmit={handleSubmit(formData)}>
          <Input
            placeholder="Title"
            {...register("title")}
            value={defaultValue?.title}
          />
          <Input
            placeholder="Price"
            {...register("price")}
            value={defaultValue?.price}
          />
          <Input
            placeholder="Description"
            {...register("description")}
            value={defaultValue?.description}
          />
          <Input
            placeholder="Category"
            {...register("category")}
            value={defaultValue?.category}
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <FormButton type="submit">Save</FormButton>
        </Form>
      </Modal>
    </>
  );
};
export default ModalComponent;
