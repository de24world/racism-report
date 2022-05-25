import React from 'react';
import moment, { now } from 'moment';

import { getDatabase, ref, set, push } from 'firebase/database';
import { IDataValue } from '../interface/dataInterface';

import { Form, Input, Button, Radio, Select, DatePicker, message } from 'antd';
import { IUser } from '../interface/dataInterface';
import { Countries } from '../../shared/model/country';
import ReactCountryFlag from 'react-country-flag';
type Props = {
  user: IUser;
};

const CreateForm = ({ user }: Props) => {
  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

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

  const onFinish = (values: IDataValue) => {
    // e.preventDefault();

    const db = getDatabase();
    const postListRef = ref(db, `reportDB/${Date.now()}`);
    // const newPostRef = push(postListRef);
    set(postListRef, {
      useremail: values.useremail,
      offender: values.offender,
      victim: values.victim,
      place: values.place,
      evidence: values.evidence,
      occurDate: moment(values.occurDate).format('YYYY-MM'),
      level: values.level,
      description: values.description || null,
      submitTime: values.submitTime,
    });

    // console.log(moment(values.occurDate).format('YYYY-MM'), 'values.occurDate');

    message.success('Submit Success');
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
          submitTime: Date(),
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
        *만약 온라인이면 가해자 국가로 선택하세요
        <Form.Item name="place" label="place" hasFeedback rules={[{ required: true, message: 'Please select your country!' }]}>
          <Select
            // showSearch
            // optionFilterProp="children"
            // filterOption={(input, option) => option.children.includes(input)}
            // filterSort={(optionA, optionB) => optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())}
            placeholder="please select place"
          >
            {Countries.map((item, countryIndex) => (
              <Select.Option key={countryIndex} value={item.name}>
                <ReactCountryFlag
                  countryCode={item.code}
                  svg
                  cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                  cdnSuffix="svg"
                  title={item.name}
                  // style={{
                  //   width: '2em',
                  //   height: '2em',
                  // }}
                />
                {item.name}
              </Select.Option>
            ))}
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
          <DatePicker
            picker="month"
            disabledDate={(current) => {
              return moment() <= current;
            }}
          />
          {/* var unixTimestamp = moment('2012.08.10', 'YYYY.MM.DD').unix(); */}
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
          제출날짜 = submitTime / 안보임
        </Form.Item>
        추가작업할 것: place 소문자 검색가능 / icon표시로 설명하기 / item name 에러/ 캡쳐?
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
