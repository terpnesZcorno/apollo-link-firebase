import React, {Component} from "react";
import {Form, Input, Button} from 'antd';
import { ChildProps } from 'react-apollo';
const FormItem = Form.Item;

export interface Props {
  addTodo: ({content: string}) => Promise<any>,
  form: any
};

class TodoForm extends Component<ChildProps<Props, any>> {
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.addTodo(values);
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
      <FormItem>
        {getFieldDecorator('content', {
          rules: [{required: true, message: 'Please input your content!'}]
        })(
          <Input placeholder="Content" />
        )}
      </FormItem>
      <FormItem>
        <Button
          type="primary"
          htmlType="submit"
        >
          Create Todo
        </Button>
      </FormItem>
      </Form>
    );
  }
}

export default Form.create()(TodoForm);