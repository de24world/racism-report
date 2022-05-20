import React from 'react';
import { getDatabase, ref, set, push } from 'firebase/database';

import { Form, Input, Button, Radio, Select, DatePicker, Alert } from 'antd';
import { IUser } from '../interface/dataInterface';
type Props = {
  user: IUser;
};

const CreateForm = ({ user }: Props) => {
  const nowTime = new Date();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  const dataConfig = {
    rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
  };

  const [form] = Form.useForm();

  const onFinish = (values: {
    useremail: any;
    offender: any;
    victim: any;
    place: any;
    evidence: any;
    occurDate: { _d: any };
    level: any;
    description: any;
    submitTime: any;
  }): any => {
    // e.preventDefault();

    // const db = getDatabase();
    // const postListRef = ref(db, 'reportDB/');
    // const newPostRef = push(postListRef);
    // set(newPostRef, {
    //   useremail: values.useremail,
    //   offender: values.offender,
    //   victim: values.victim,
    //   place: values.place,
    //   evidence: values.evidence,
    //   // occurDate: values.occurDate._d,
    //   level: values.level,
    //   description: values.description,
    //   submitTime: values.submitTime,
    // });
    console.log(values, 'values?');
    console.log(values.occurDate._d, 'occurDate?');
    console.log(values.submitTime, 'submitTime?');
    <Alert message="Success Submit" type="success" showIcon />;

    form.resetFields();
  };

  return (
    <>
      <Form
        form={form}
        {...layout}
        name="nest-messages"
        initialValues={{
          useremail: user.email,
          submitTime: nowTime,
        }}
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item label="User Email" name="useremail">
          {user.email}
        </Form.Item>
        <Form.Item name="offender" label="offender" rules={[{ required: true, message: 'Please select offender!' }]}>
          <Select showSearch placeholder="Select to Offender">
            <Select.Option value="Black Mann">Black Mann</Select.Option>
            <Select.Option value="Black Women">Black Women</Select.Option>
            <Select.Option value="White Mann">White Mann</Select.Option>
            <Select.Option value="White Women">White Women</Select.Option>
            <Select.Option value="Yellow Mann">Yellow Mann</Select.Option>
            <Select.Option value="Yellow Women">Yellow Women</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="victim" label="Victim" rules={[{ required: true, message: 'Please select Victim!' }]}>
          <Select showSearch placeholder="Select to Victim">
            <Select.Option value="Black Mann">Black Mann</Select.Option>
            <Select.Option value="Black Women">Black Women</Select.Option>
            <Select.Option value="White Mann">White Mann</Select.Option>
            <Select.Option value="White Women">White Women</Select.Option>
            <Select.Option value="Yellow Mann">Yellow Mann</Select.Option>
            <Select.Option value="Yellow Women">Yellow Women</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="place" label="place" hasFeedback rules={[{ required: true, message: 'Please select your country!' }]}>
          <Select placeholder="please select place">
            <Select.Option value="USA">미국</Select.Option>
            <Select.Option value="Online?">온라인</Select.Option>
          </Select>
        </Form.Item>
        {/* AutoComplete Update */}
        <Form.Item
          name="evidence"
          label="Evidence"
          rules={[
            {
              required: true,
            },
            {
              type: 'url',
              warningOnly: true,
            },
            {
              type: 'string',
              min: 6,
            },
          ]}
        >
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item name="occurDate" label="날짜" {...dataConfig}>
          <DatePicker picker="month" />
        </Form.Item>
        <Form.Item label="level" name="level" rules={[{ required: true, message: 'Please select level!' }]}>
          <Radio.Group>
            <Radio.Button value="1">1단계:언어</Radio.Button>
            <Radio.Button value="2">2단계:신체적</Radio.Button>
            <Radio.Button value="3">3단계:강력범죄</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="description" label="설명">
          <Input />
        </Form.Item>
        <Form.Item label="제출냘짜" name="submitTime" style={{ display: 'none' }}>
          제출날짜 = submitTime
        </Form.Item>
        추가작업할 것: 날짜 create가 안됨/ 중복 제춤 안되게 해야함 / 캡쳐?
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateForm;
