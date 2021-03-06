import React from 'react';
import moment from 'moment';

import { getDatabase, ref, set, push } from 'firebase/database';
import { IDataValue } from '../interface/dataInterface';

import { Form, Input, Button, Radio, Select, DatePicker, message, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { IUser } from '../interface/dataInterface';
import { Countries } from '../../shared/model/country';
import { People } from '../../shared/model/people';
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

  const peopleArray = (
    <>
      {People.map((peoples, peopleIndex) => (
        <Select.Option key={peopleIndex} value={peoples}>
          {peoples}
        </Select.Option>
      ))}
    </>
  );

  const onFinish = (values: IDataValue) => {
    // e.preventDefault();

    const db = getDatabase();
    const postListRef = ref(db, 'posts/');
    push(postListRef, {
      id: Date.now(),
      useremail: values.useremail,
      offender: values.offender,
      victim: values.victim,
      place: values.place,
      evidence: values.evidence,
      occurDate: moment(values.occurDate).format('YYYY-MM'),
      level: values.level,
      description: values.description || null,
      submitTime: values.submitTime,
    })
      .then(() => {
        message.success('Submit Success');
      })
      .catch((error) => {
        // The write failed...
      });

    // console.log(moment(values.occurDate).format('YYYY-MM'), 'values.occurDate');

    form.resetFields();
  };

  return (
    <>
      <Form
        form={form}
        {...layout}
        name="create-report"
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
            {peopleArray}
          </Select>
        </Form.Item>
        <Form.Item name="victim" label="Victim" rules={[{ required: true, message: 'Please select Victim!' }]}>
          <Select showSearch placeholder="Select to Victim">
            {peopleArray}
          </Select>
        </Form.Item>
        *?????? ??????????????? ????????? ????????? ???????????????
        <Form.Item name="place" label="place" hasFeedback rules={[{ required: true, message: 'Please select your country!' }]}>
          <Select showSearch placeholder="please select place">
            {Countries.map((countries, countryIndex) => (
              <Select.Option key={countryIndex} value={countries.name}>
                <ReactCountryFlag
                  countryCode={countries.code}
                  svg
                  cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                  cdnSuffix="svg"
                  title={countries.name}
                  // style={{
                  //   width: '2em',
                  //   height: '2em',
                  // }}
                />
                {countries.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
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
          <Input
            placeholder="Youtube URL"
            // addonBefore="https://youtu.be/"
            suffix={
              <Tooltip title="????????? URL ???: https://youtu.be/HOLc4S2N5eI">
                <InfoCircleOutlined
                  style={{
                    color: 'rgba(0,0,0,.45)',
                  }}
                />
              </Tooltip>
            }
          />
        </Form.Item>
        <Form.Item name="occurDate" label="??????" {...dataConfig}>
          <DatePicker
            picker="month"
            disabledDate={(current) => {
              return moment() <= current;
            }}
          />
        </Form.Item>
        <Form.Item label="level" name="level" rules={[{ required: true, message: 'Please select level!' }]}>
          <Radio.Group>
            <Radio.Button value={1}>1??????</Radio.Button>
            <Radio.Button value={2}>2??????</Radio.Button>
            <Radio.Button value={3}>3??????</Radio.Button>
            <Tooltip title="1????????? ??????, ?????? / 2????????? ?????? / 3????????? ??????, ????????? ??? ????????????" color="blue">
              <InfoCircleOutlined style={{ fontSize: '1rem', paddingLeft: '0.5rem', verticalAlign: 'top', color: '#08c' }} />
            </Tooltip>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="description" label="??????">
          <Input />
        </Form.Item>
        <Form.Item label="????????????" name="submitTime" style={{ display: 'none' }}>
          ???????????? = submitTime / ?????????
        </Form.Item>
        ??????????????? ???: icon????????? ???????????? / item name ??????/ ???????
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
