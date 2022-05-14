import React, { useState } from 'react';
import { Form, Input, Button, Radio, Select, Cascader, DatePicker, InputNumber, TreeSelect, Switch } from 'antd';
type Props = {};

const CreateForm = (props: Props) => {
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

  const onFinish = (values: any) => {
    console.log(values, 'values?');
  };

  return (
    <>
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        {/* <input value="usermail" readOnly>
          test1234@gmail.com
        </input> */}
        {/* <Form.Item name="email" label="email">
          <Select defaultValue="lucy" open={false}>
            <Select.Option value="lucy">Lucy</Select.Option>
          </Select>
        </Form.Item> */}
        <Form.Item name="offender" label="offender" rules={[{ required: true, message: 'Please select offender!' }]}>
          <Cascader
            options={[
              {
                value: 'Black',
                label: 'Black',
                children: [
                  {
                    value: 'Mann',
                    label: 'Mann',
                  },
                  {
                    value: 'Women',
                    label: 'Women',
                  },
                  {
                    value: 'LGBT',
                    label: 'LGBT',
                  },
                ],
              },
              {
                value: 'White',
                label: 'White',
                children: [
                  {
                    value: 'Mann',
                    label: 'Mann',
                  },
                  {
                    value: 'Women',
                    label: 'Women',
                  },
                  {
                    value: 'LGBT',
                    label: 'LGBT',
                  },
                ],
              },
              {
                value: 'Yellow',
                label: 'Yellow',
                children: [
                  {
                    value: 'Mann',
                    label: 'Mann',
                  },
                  {
                    value: 'Women',
                    label: 'Women',
                  },
                  {
                    value: 'LGBT',
                    label: 'LGBT',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item name="victim" label="victim" rules={[{ required: true, message: 'Please select offender!' }]}>
          <Cascader
            options={[
              {
                value: 'Black',
                label: 'Black',
                children: [
                  {
                    value: 'Mann',
                    label: 'Mann',
                  },
                  {
                    value: 'Women',
                    label: 'Women',
                  },
                  {
                    value: 'LGBT',
                    label: 'LGBT',
                  },
                ],
              },
              {
                value: 'White',
                label: 'White',
                children: [
                  {
                    value: 'Mann',
                    label: 'Mann',
                  },
                  {
                    value: 'Women',
                    label: 'Women',
                  },
                  {
                    value: 'LGBT',
                    label: 'LGBT',
                  },
                ],
              },
              {
                value: 'Yellow',
                label: 'Yellow',
                children: [
                  {
                    value: 'Mann',
                    label: 'Mann',
                  },
                  {
                    value: 'Women',
                    label: 'Women',
                  },
                  {
                    value: 'LGBT',
                    label: 'LGBT',
                  },
                ],
              },
            ]}
          />
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
        <Form.Item name="날짜" label="날짜" {...dataConfig}>
          <DatePicker picker="month" />
        </Form.Item>
        <Form.Item label="level" name="level">
          <Radio.Group>
            <Radio.Button value="first">1단계:언어</Radio.Button>
            <Radio.Button value="second">2단계:신체적</Radio.Button>
            <Radio.Button value="third">3단계:강력범죄</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="설명" label="Description">
          <Input />
        </Form.Item>
        업로드 날짜
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
