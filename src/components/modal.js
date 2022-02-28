import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useForm } from "react-hook-form";
import { Form, Input, FormButton } from "styles/components/modal";
const ModalComponent = () => {
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
export default ModalComponent;
// ReactDOM.render(<App />, mountNode);