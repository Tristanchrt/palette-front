import Icon from "@ant-design/icons-vue/lib/components/Icon";
import { Comment, AutoComplete, Image, Button, Card, Divider, Dropdown, Input, InputNumber, Menu, Pagination, Radio, Rate, Select, Space, Spin, Switch, Tooltip, Tag, Descriptions, Avatar, Badge, Skeleton, Upload, Drawer, Modal, Tabs, Form, DatePicker, Alert, Steps, Checkbox, Result } from "ant-design-vue";
import { MenuItem } from "ant-design-vue/lib/vc-menu";

export default (app) => {
  app
  .use(Button)
  .use(Divider)
  .use(Alert)
  .use(Card)
  .use(Dropdown)
  .use(Menu)
  .use(Space)
  .use(Checkbox)
  .use(Result)
  .use(Tooltip)
  .use(Select)
  .use(Input)
  .use(Switch)
  .use(AutoComplete)
  .use(Pagination)
  .use(Badge)
  .use(Rate)
  .use(InputNumber)
  .use(Skeleton)
  .use(Radio)
  .use(Tag)
  .use(Spin)
  .use(Image)
  .use(Descriptions)
  .use(Comment)
  .use(Upload)
  .use(Modal)
  .use(Avatar)
  .use(Tabs)
  .use(Steps)
  .use(Form)
  .use(Drawer)
  .use(DatePicker)
  return app
}
